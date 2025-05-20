<?php

use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\PostImageController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth', [UserController::class, 'authentication'])->name('login');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/deauth', [UserController::class, 'deAuthentication'])->name('logout');
    Route::put('/profile', [UserController::class, 'updatePassword']);
    Route::put('/password', [UserController::class, 'updateProfile']);

    Route::apiResource('/post', PostController::class);
    Route::post('/upload/image', [PostImageController::class, 'uploadImage']);
});
