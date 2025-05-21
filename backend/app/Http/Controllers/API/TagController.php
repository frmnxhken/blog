<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TagResource;
use App\Models\Tag;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::get();
        return response()->json([
            'message' => 'List of tag',
            'data' => TagResource::collection($tags)
        ]);
    }
}
