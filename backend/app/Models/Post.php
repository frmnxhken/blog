<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = ['id'];
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tags');
    }

    public function images()
    {
        return $this->hasMany(PostImage::class);
    }
}
