<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'thumbnail' => asset($this->thumbnail),
            'content' => $this->content,
            'date' => $this->created_at->format("Y M d"),
            'user' => $this->user->makeHidden('id'),
        ];
    }
}
