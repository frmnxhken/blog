<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PostImageController extends Controller
{
    public function upload(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|max:2048', // max 2MB
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => 0, 'message' => 'Invalid image'], 400);
        }

        $file = $request->file('image');
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = 'uploads/' . $filename;
        $file->move(public_path('uploads'), $filename);

        $url = url($path);
        $image = PostImage::create([
            'path' => $path,
            'url' => $url,
        ]);

        return response()->json([
            'success' => 1,
            'file' => [
                'url' => $url
            ]
        ]);
    }
}
