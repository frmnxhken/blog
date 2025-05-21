<?php

namespace App\Services\API;

use App\Models\Post;
use App\Models\PostImage;
use App\Models\Tag;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class PostService
{
    public function index(?string $status = null, ?string $key = null)
    {
        return Post::when($status, fn($q) => $q->where('status', $status))
            ->when($key, fn($q) => $q->where('title', 'like', "%{$key}%"))
            ->get();
    }

    public function show(int $id): Post
    {
        return Post::with('tags')->findOrFail($id);
    }

    public function store(array $data, ?UploadedFile $thumbnail): Post
    {
        $thumbnailPath = $this->handleThumbnailUpload($thumbnail);

        $post = Post::create([
            'title' => $data['title'],
            'thumbnail' => $thumbnailPath,
            'slug' => Str::slug($data['title']),
            'content' => $data['content'],
            'status' => $data['status'],
        ]);

        $this->syncTags($post, $data['tags'] ?? '');
        $this->syncImages($post, $data['content']);

        return $post;
    }

    public function update(Post $post, array $data, ?UploadedFile $thumbnail): Post
    {
        if ($thumbnail) {
            $this->deleteFile($post->thumbnail);
            $post->thumbnail = $this->handleThumbnailUpload($thumbnail);
        }

        $post->update([
            'title' => $data['title'],
            'content' => $data['content'],
            'status' => $data['status'],
            'thumbnail' => $post->thumbnail,
        ]);

        $this->syncTags($post, $data['tags'] ?? '');
        $this->syncImages($post, $data['content']);

        return $post;
    }

    public function destroy(Post $post): void
    {
        $this->deleteImages($post->id);
        $post->delete();
        $this->deleteUnusedTags();
    }

    private function handleThumbnailUpload(?UploadedFile $thumbnail): ?string
    {
        if (!$thumbnail) return null;

        $filename = time() . '_' . $thumbnail->getClientOriginalName();
        $path = 'uploads/thumbnails/' . $filename;
        $thumbnail->move(public_path('uploads/thumbnails'), $filename);

        return $path;
    }

    private function syncTags(Post $post, string $tagsString): void
    {
        $tagNames = array_map('trim', explode(',', $tagsString));
        $tagIds = collect($tagNames)->map(function ($tagName) {
            $tag = Tag::firstOrCreate([
                'slug' => Str::slug($tagName)
            ], [
                'name' => $tagName
            ]);
            return $tag->id;
        });

        $post->tags()->sync($tagIds);
    }

    private function syncImages(Post $post, string $contentJson): void
    {
        $content = json_decode($contentJson, true);

        $usedImageUrls = collect($content['blocks'] ?? [])
            ->filter(fn($block) => $block['type'] === 'image')
            ->pluck('data.file.url')
            ->map(fn($url) => str_replace(asset(''), '', $url))
            ->toArray();

        PostImage::whereIn('path', $usedImageUrls)->update([
            'post_id' => $post->id,
        ]);

        $unusedImages = PostImage::whereNull('post_id')->get();
        foreach ($unusedImages as $img) {
            $this->deleteFile($img->path);
            $img->delete();
        }
    }

    private function deleteImages(int $postId): void
    {
        $usedImages = PostImage::where('post_id', $postId)->get();
        foreach ($usedImages as $img) {
            $this->deleteFile($img->path);
            $img->delete();
        }
    }

    private function deleteUnusedTags(): void
    {
        $unusedTags = Tag::doesntHave('posts')->get();
        foreach ($unusedTags as $tag) {
            $tag->delete();
        }
    }

    private function deleteFile(?string $path): void
    {
        if ($path && file_exists(public_path($path))) {
            unlink(public_path($path));
        }
    }
}
