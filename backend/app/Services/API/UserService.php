<?php

namespace App\Services\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserService
{
    public function authenticate(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validation->fails()) {
            return ['success' => false, 'errors' => $validation->errors(), 422];
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return ['success' => false, 'message' => 'Invalid Credential'];
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return ['success' => true, 'token' => $token, 'user' => $user];
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return true;
    }

    public function updatePassword(Request $request)
    {
        $user = Auth::user();

        $validation = Validator::make($request->all(), [
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        if ($validation->fails()) {
            return ['success' => false, 'errors' => $validation->errors()];
        }

        if (!Hash::check($request->current_password, $user->password)) {
            return ['success' => false, 'message' => 'Current password is incorrect.'];
        }

        $user->update(['password' => Hash::make($request->new_password)]);
        return ['success' => true];
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $user->update($request->all());

        return ['success' => true];
    }
}
