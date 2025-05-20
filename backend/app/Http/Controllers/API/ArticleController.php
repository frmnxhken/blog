<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleDetailResource;
use App\Http\Resources\ArticleResource;
use App\Models\Post;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Post::where('status', 'publish')->get();
        return response()->json([
            'message' => 'List Article',
            'data' => ArticleResource::collection($articles)
        ]);
    }

    public function recent()
    {
        $articles = Post::where('status', 'publish')->get();
        return response()->json([
            'message' => 'List Article',
            'data' => ArticleResource::collection($articles)
        ]);
    }

    public function show($slug)
    {
        $article = Post::where('slug', $slug)->first();
        return response()->json([
            'message' => 'Detail article',
            'data' => new ArticleDetailResource($article)
        ]);
    }
}
