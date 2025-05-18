<?php

use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\PostImageController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth', [UserController::class, 'authentication'])->name('login');
Route::post('/deauth', [UserController::class, 'deAuthentication'])->name('logout');

Route::apiResource('/post', PostController::class);
Route::post('/upload/image', [PostImageController::class, 'uploadImage']);
