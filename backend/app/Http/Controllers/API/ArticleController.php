<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\API\ArticleService;

class ArticleController extends Controller
{
    protected $service;

    public function __construct(ArticleService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return $this->service->getArticles();
    }

    public function recent()
    {
        return $this->service->getArticleRecent();
    }

    public function show($slug)
    {
        return $this->service->getArticleBySlug($slug);
    }
}
