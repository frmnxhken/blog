<?php

namespace App\Services\API;

use App\Http\Resources\ArticleCollection;
use App\Http\Resources\ArticleDetailResource;
use App\Http\Resources\ArticleResource;
use App\Models\Post;

class ArticleService
{
    public function getArticles()
    {
        $articles = Post::with('tags')->where('status', 'publish')->paginate(1);
        return new ArticleCollection($articles);
    }

    public function getArticleRecent()
    {
        $articles = Post::with('tags')->where('status', 'publish')->limit(6)->get();
        return ArticleResource::collection($articles);
    }

    public function getArticleBySlug($slug)
    {
        $article = Post::with('tags')->where('slug', $slug)->first();
        return new ArticleDetailResource($article);
    }
}
