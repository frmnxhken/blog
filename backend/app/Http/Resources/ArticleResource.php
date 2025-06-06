<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $tags = [];
        foreach ($this->tags as $tag) {
            $tags[] = $tag->name;
        }

        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'thumbnail' => asset($this->thumbnail),
            'tags' => $tags,
            'date' => $this->created_at->format("Y M d"),
        ];
    }
}
