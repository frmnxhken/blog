<?php

namespace App\Services\API;

use App\Models\PostImage;

class PostImageSevice
{
    public function uploadImage($file)
    {
        $originalName = $file->getClientOriginalName();
        $cleanName = preg_replace('/\s+/', '-', $originalName);
        $filename = time() . '_' . $cleanName;
        $path = 'uploads/' . $filename;

        $file->move(public_path('uploads'), $filename);

        PostImage::create([
            'path' => $path,
            'post_id' => null,
        ]);

        return $path;
    }
}
