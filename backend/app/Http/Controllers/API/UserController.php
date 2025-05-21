<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\AuthRequest;
use App\Http\Requests\API\ChangePasswordRequest;
use App\Http\Requests\API\EditProfileRequest;
use App\Services\API\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    public function authentication(AuthRequest $request)
    {
        $result = $this->service->authenticate($request);

        if (!$result['success']) {
            return response()->json(['message' => $result['message'] ?? $result['errors']], 401);
        }

        return response()->json([
            'success' => true,
            'access_token' => $result['token'],
            'user' => $result['user']
        ]);
    }

    public function deauthentication()
    {
        $this->service->logout();
        return response()->json(['success' => true]);
    }

    public function updatePassword(ChangePasswordRequest $request)
    {
        $result = $this->service->updatePassword($request);

        if (!$result['success']) {
            return response()->json(['message' => $result['message'] ?? $result['errors']], 422);
        }

        return response()->json(['success' => true]);
    }

    public function updateProfile(EditProfileRequest $request)
    {
        $this->service->updateProfile($request);
        return response()->json(['success' => true]);
    }
}
