<?php

namespace App\Services\API;

use App\Http\Resources\TagResource;
use App\Models\Tag;

class TagService
{
    public function getTagPublish()
    {
        $tags = Tag::whereHas('posts', function ($query) {
            $query->where('status', 'publish');
        })->get();

        return ['data' => TagResource::collection($tags)];
    }
}
