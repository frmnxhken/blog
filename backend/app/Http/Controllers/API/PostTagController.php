<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\API\PostTagService;

class PostTagController extends Controller
{
    protected $service;

    public function __construct(PostTagService $service)
    {
        $this->service = $service;
    }

    public function index($tag)
    {
        return $this->service->getPostByTag($tag);
    }
}
