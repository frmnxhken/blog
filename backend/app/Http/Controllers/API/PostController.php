<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $articles = Post::get();
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


    public function update() {}

    public function destroy() {}
}
