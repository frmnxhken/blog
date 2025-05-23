<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleCollection;
use App\Models\Post;

class PostTagController extends Controller
{
    public function index($tag)
    {

        $articles = Post::where('status', 'publish')->whereHas('tags', function ($query) use ($tag) {
            $query->where('name', $tag);
        })->paginate(1);

        return new ArticleCollection($articles);
    }
}
