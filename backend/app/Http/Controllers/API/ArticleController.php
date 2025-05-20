<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Post::where('status', 'publish')->get();
        return response()->json([
            'message' => 'List Article',
            'data' => $articles
        ]);
    }

    public function recent()
    {
        $articles = Post::where('status', 'publish')->get();
        return response()->json([
            'message' => 'List Article',
            'data' => $articles
        ]);
    }

    public function show($slug)
    {
        $article = Post::where('slug', $slug)->first();
        return response()->json([
            'message' => 'Detail article',
            'data' => $article
        ]);
    }
}
