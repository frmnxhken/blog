<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\API\TagService;

class TagController extends Controller
{
    protected $service;
    public function __construct(TagService $service)
    {
        $this->service = $service;
    }
    public function index()
    {
        $data = $this->service->getTagPublish();
        return response()->json([
            'message' => 'List of tag',
            ...$data
        ]);
    }
}
