<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function authentication(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validation->fails()) {
            return response()->json(['message' => $validation->errors()]);
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response()->json(['message' => 'Invalid Credential']);
        }


        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'access_token' => $token,
            'user' => $user
        ]);
    }

    public function deauthentication()
    {
        Auth::user()->currentAccessToken()->delete();
        return response()->json([
            'success' => true,
        ]);
    }

    public function updatePassword(Request $request)
    {
        $user = Auth::user();

        $validation = Validator::make($request->all(), [
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        if ($validation->fails()) {
            return response()->json(['message' => $validation->errors()]);
        }

        if (!Hash::check($request->current_password, $user->password)) {
            return ['success' => false, 'message' => 'Current password is incorrect.'];
        }

        $user->update(['password' => Hash::make($request->new_password)]);

        return response()->json([
            'success' => true,
        ]);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $user->update($request->all());

        return response()->json([
            'success' => true,
        ]);
    }
}
