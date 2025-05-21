<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\API\PostImageSevice;
use Illuminate\Http\Request;

class PostImageController extends Controller
{

    protected $service;

    public function __construct(PostImageSevice $service)
    {
        $this->service = $service;
    }
    public function uploadImage(Request $request)
    {
        if (!$request->hasFile('image')) {
            return response()->json(['success' => 0, 'message' => 'No file uploaded'], 400);
        }

        $path = $this->service->uploadImage($request->file('image'));

        if ($path) {
            return response()->json([
                'success' => 1,
                'file' => [
                    'url' => asset($path)
                ]
            ]);
        }
    }
}
