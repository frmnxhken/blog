<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\API\ArticleService;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    protected $service;

    public function __construct(ArticleService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $key = $request->input('key');
        return $this->service->getArticles($key);
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
