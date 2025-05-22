<?php

use App\Http\Controllers\API\ArticleController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\PostImageController;
use App\Http\Controllers\API\PostTagController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth', [UserController::class, 'authentication'])->name('login');

Route::prefix('article')->group(function () {
    Route::get('/', [ArticleController::class, "index"]);
    Route::get('/recent', [ArticleController::class, "recent"]);
    Route::get('/{slug}', [ArticleController::class, "show"]);
});

Route::prefix('tag')->group(function () {
    Route::get('/', [TagController::class, 'index']);
    Route::get('/{name}', [PostTagController::class, 'index']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/deauth', [UserController::class, 'deAuthentication'])->name('logout');
    Route::put('/profile', [UserController::class, 'updateProfile']);
    Route::put('/password', [UserController::class, 'updatePassword']);

    Route::apiResource('/post', PostController::class);
    Route::post('/upload/image', [PostImageController::class, 'uploadImage']);
});
