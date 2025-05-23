<?php

namespace App\Services\API;

use App\Http\Resources\ArticleCollection;
use App\Models\Post;

class PostTagService
{
    public function getPostByTag($tag)
    {
        $articles = Post::where('status', 'publish')->whereHas('tags', function ($query) use ($tag) {
            $query->where('name', $tag);
        })->paginate(9);
        return new ArticleCollection($articles);
    }
}
