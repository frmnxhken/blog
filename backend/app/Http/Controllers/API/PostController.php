<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\PostRequest;
use App\Http\Resources\PostResource;
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
        $articles = $this->service->index($request->query("status"), $request->query("key"));

        return response()->json([
            'message' => 'Articles',
            'data' => $articles
        ]);
    }

    public function show($id)
    {
        $article = $this->service->show($id);

        return response()->json([
            'message' => 'Article Detail',
            'data' => new PostResource($article)
        ]);
    }

    public function store(PostRequest $request)
    {
        $post = $this->service->store($request->validated(), $request->file('thumbnail'));

        return response()->json([
            'success' => true,
            'post' => $post
        ]);
    }

    public function update(PostRequest $request, Post $post)
    {
        $post = $this->service->update($post, $request->validated(), $request->file('thumbnail'));

        return response()->json([
            'success' => true,
            'post' => $post
        ]);
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $this->service->destroy($post);

        return response()->json([
            'success' => true,
        ]);
    }
}
