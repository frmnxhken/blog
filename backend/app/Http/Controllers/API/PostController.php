<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\CreatePostRequest;
use App\Http\Requests\API\UpdatePostRequest;
use App\Models\Post;
use App\Services\API\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $service;

    public function __construct(PostService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $status = $request->input('status');
        $key = $request->input('key');
        return $this->service->getPosts($status, $key);
    }

    public function show($id)
    {
        return $this->service->getDetailPost($id);
    }

    public function store(CreatePostRequest $request)
    {
        $post = $this->service->createPost($request->all() + ['thumbnail' => $request->file('thumbnail')]);
        return response()->json(['success' => true, 'post' => $post]);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $post = $this->service->updatePost($post, $request);
        return response()->json(['success' => true, 'post' => $post]);
    }

    public function destroy($id)
    {
        $this->service->deletePost($id);
        return response()->json(['success' => true]);
    }
}
