<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query("status");
        $key = $request->query("key");

        $articles = Post::when($status, function ($query, $status) {
            return $query->where('status', $status);
        })
            ->when($key, function ($query, $key) {
                return $query->where('title', 'like', '%' . $key . '%');
            })
            ->get();

        return response()->json([
            'message' => 'Articles',
            'data' => $articles
        ]);
    }


    public function store(Request $request)
    {
        $thumbnailPath = null;
        if ($request->hasFile('thumbnail')) {
            $filename = time() . '_' . $request->file('thumbnail')->getClientOriginalName();
            $path = 'uploads/thumbnails/' . $filename;
            $request->file('thumbnail')->move(public_path('uploads/thumbnails'), $filename);
            $thumbnailPath = $path;
        }

        $post = Post::create([
            'title' => $request->title,
            'thumbnail' => $thumbnailPath,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'status' => $request->status,
        ]);

        $tagsString = $request->tags;
        $tagNames = array_map('trim', explode(',', $tagsString));

        $tagIds = collect($tagNames)->map(function ($tagName) {
            $tag = Tag::firstOrCreate(
                ['slug' => Str::slug($tagName)],
                ['name' => $tagName]
            );
            return $tag->id;
        });


        $post->tags()->sync($tagIds);

        $content = json_decode($request->content, true);
        $usedImageUrls = collect($content['blocks'] ?? [])
            ->filter(fn($block) => $block['type'] === 'image')
            ->pluck('data.file.url')
            ->map(fn($url) => str_replace(asset(''), '', $url)) // ambil relative path
            ->toArray();

        PostImage::whereIn('path', $usedImageUrls)->update([
            'post_id' => $post->id,
        ]);

        $unusedImages = PostImage::whereNull('post_id')->get();

        foreach ($unusedImages as $img) {
            $fullPath = public_path($img->path);
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
            $img->delete();
        }

        return response()->json([
            'success' => true,
            'post' => $post
        ]);
    }

    public function show($id)
    {
        $article = Post::with('tags')->findOrFail($id);
        return response()->json([
            'message' => 'Article Detail',
            'data' => new PostResource($article)
        ]);
    }


    public function update(Request $request, Post $post)
    {
        if ($request->hasFile('thumbnail')) {
            if ($post->thumbnail && file_exists(public_path($post->thumbnail))) {
                unlink(public_path($post->thumbnail));
            }

            $filename = time() . '_' . $request->file('thumbnail')->getClientOriginalName();
            $path = 'uploads/thumbnails/' . $filename;
            $request->file('thumbnail')->move(public_path('uploads/thumbnails'), $filename);
            $post->thumbnail = $path;
        }

        $post->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'status' => $request->status,
            'thumbnail' => $post->thumbnail,
        ]);

        $tagsString = $request->tags;
        $tagNames = array_map('trim', explode(',', $tagsString));

        $tagIds = collect($tagNames)->map(function ($tagName) {
            $tag = Tag::firstOrCreate(
                ['slug' => Str::slug($tagName)],
                ['name' => $tagName]
            );
            return $tag->id;
        });

        $post->tags()->sync($tagIds);

        $unusedTags = Tag::doesntHave('posts')->get();
        foreach ($unusedTags as $tag) {
            $tag->delete();
        }

        $content = json_decode($request->content, true);
        $usedImageUrls = collect($content['blocks'] ?? [])
            ->filter(fn($block) => $block['type'] === 'image')
            ->pluck('data.file.url')
            ->map(fn($url) => str_replace(asset(''), '', $url)) // ambil relative path
            ->toArray();

        PostImage::whereIn('path', $usedImageUrls)->update([
            'post_id' => $post->id,
        ]);

        $unusedImages = PostImage::whereNull('post_id')->get();
        foreach ($unusedImages as $img) {
            $fullPath = public_path($img->path);
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
            $img->delete();
        }

        return response()->json([
            'success' => true,
            'post' => $post
        ]);
    }


    public function destroy($id)
    {

        $usedImages = PostImage::where('post_id', $id)->get();
        foreach ($usedImages as $img) {
            $fullPath = public_path($img->path);
            if (file_exists($fullPath)) {
                unlink($fullPath);
            }
            $img->delete();
        }

        Post::findOrFail($id)->delete();

        $unusedTags = Tag::doesntHave('posts')->get();
        foreach ($unusedTags as $tag) {
            $tag->delete();
        }

        return response()->json([
            'success' => true,
        ]);
    }
}
