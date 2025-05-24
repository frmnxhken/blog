<?php

namespace App\Services\API;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\Tag;
use Illuminate\Support\Str;

class PostService
{
    public function getPosts($status, $key)
    {
        $query = Post::with('tags');

        if ($status) $query->where('status', $status);
        if ($key) $query->where('title', 'like', "%$key%");

        return PostResource::collection($query->latest()->paginate(10));
    }

    public function getDetailPost($id)
    {
        $article = Post::with('tags')->findOrFail($id);
        return new PostResource($article);
    }

    public function createPost($data)
    {
        $thumbnailPath = null;

        if (isset($data['thumbnail'])) {
            $thumbnailPath = $this->handleUploadThumbnail($data);
        }

        $post = Post::create([
            'title' => $data['title'],
            'thumbnail' => $thumbnailPath,
            'slug' => Str::slug($data['title']),
            'content' => $data['content'],
            'status' => $data['status'],
        ]);

        $this->syncTags($post, $data['tags'] ?? '');
        $this->associateImages($post, $data['content']);
        $this->deleteUnusedImages();

        return $post;
    }

    public function updatePost($post, $data)
    {
        if ($data->hasFile('thumbnail')) {
            if ($post->thumbnail && file_exists(public_path($post->thumbnail))) {
                unlink(public_path($post->thumbnail));
            }

            $post->thumbnail = $this->handleUploadThumbnail($data);
        }

        $post->update([
            'title' => $data['title'],
            'slug' => Str::slug($data['title']),
            'content' => $data['content'],
            'status' => $data['status'],
            'thumbnail' => $post->thumbnail,
        ]);

        $this->syncTags($post, $data['tags'] ?? '');
        $this->associateImages($post, $data['content']);
        $this->cleanOldPostImages($post, $data['content']);
        $this->deleteUnusedImages();

        return $post;
    }

    public function deletePost($id)
    {
        $post = Post::findOrFail($id);

        foreach ($post->images as $img) {
            $fullPath = public_path($img->path);
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
            $img->delete();
        }

        if ($post->thumbnail && file_exists(public_path($post->thumbnail))) {
            unlink(public_path($post->thumbnail));
        }

        $post->delete();

        Tag::doesntHave('posts')->delete();

        return true;
    }

    private function handleUploadThumbnail($data)
    {
        $filename = time() . '_' . $data['thumbnail']->getClientOriginalName();
        $path = 'uploads/thumbnails/' . $filename;
        $data['thumbnail']->move(public_path('uploads/thumbnails'), $filename);
        return $path;
    }

    private function syncTags($post, $tagsString)
    {
        $tagNames = array_map('trim', explode(',', $tagsString));

        $tagIds = collect($tagNames)->map(function ($tagName) {
            $tag = Tag::firstOrCreate(
                ['slug' => Str::slug($tagName)],
                ['name' => $tagName]
            );
            return $tag->id;
        });

        $post->tags()->sync($tagIds);

        Tag::doesntHave('posts')->delete();
    }

    private function associateImages($post, $content)
    {
        $content = json_decode($content, true);
        $usedImageUrls = collect($content['blocks'] ?? [])
            ->filter(fn($block) => $block['type'] === 'image')
            ->pluck('data.file.url')
            ->map(fn($url) => str_replace(asset(''), '', $url))
            ->toArray();

        PostImage::whereIn('path', $usedImageUrls)->update([
            'post_id' => $post->id,
        ]);
    }

    private function cleanOldPostImages($post, $content)
    {
        $content = json_decode($content, true);
        $usedImageUrls = collect($content['blocks'] ?? [])
            ->filter(fn($block) => $block['type'] === 'image')
            ->pluck('data.file.url')
            ->map(fn($url) => str_replace(asset(''), '', $url))
            ->toArray();

        $existingPaths = PostImage::where('post_id', $post->id)->pluck('path')->toArray();
        $imagesToDelete = array_diff($existingPaths, $usedImageUrls);

        foreach ($imagesToDelete as $path) {
            $image = PostImage::where('path', $path)->where('post_id', $post->id)->first();
            if ($image) {
                $fullPath = public_path($image->path);
                if (file_exists($fullPath)) {
                    unlink($fullPath);
                }
                $image->delete();
            }
        }
    }

    private function deleteUnusedImages()
    {
        $unusedImages = PostImage::whereNull('post_id')->get();

        foreach ($unusedImages as $img) {
            $fullPath = public_path($img->path);
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
            $img->delete();
        }
    }
}
