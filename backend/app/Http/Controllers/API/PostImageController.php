<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PostImage;
use Illuminate\Http\Request;

class PostImageController extends Controller
{
    public function uploadImage(Request $request)
    {
        if (!$request->hasFile('image')) {
            return response()->json(['success' => 0, 'message' => 'No file uploaded'], 400);
        }

        $file = $request->file('image');
        $originalName = $file->getClientOriginalName();
        $cleanName = preg_replace('/\s+/', '-', $originalName);
        $filename = time() . '_' . $cleanName;
        $path = 'uploads/' . $filename;

        $file->move(public_path('uploads'), $filename);

        PostImage::create([
            'path' => $path,
            'post_id' => null,
        ]);

        return response()->json([
            'success' => 1,
            'file' => [
                'url' => asset($path)
            ]
        ]);
    }
}
