<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Post;

class PostTagController extends Controller
{
    public function index($tag)
    {

        $articles = Post::whereHas('tags', function ($query) use ($tag) {
            $query->where('name', $tag);
        })->get();

        return response()->json([
            'message' => 'Article by tag ' . $tag,
            'data' => ArticleResource::collection($articles)
        ]);
    }
}
