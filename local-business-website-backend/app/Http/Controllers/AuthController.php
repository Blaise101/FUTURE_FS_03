<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

  // LOGIN
  public function login(Request $request)
  {
    $request->validate([
      'email' => 'required|email',
      'password' => 'required'
    ]);

    $user = User::where('email', $request->input('email'))->first();

    if (!$user || !Hash::check($request->input('password'), $user->password)) {
      return response()->json(['message' => 'Invalid Credentials'], 401);
    }

    // create token
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
      'message' => 'Logged successfully',
      'token' => $token,
      'user' => $user
    ], 200);
  }

  // LOGOUT

  public function logout(Request $request)
  {
    $request->user()->tokens()->delete();
    return response()->json(['message' => 'Logged out'], 200);
  }

  // GET AUTHENTICATED USER
  public function user(Request $request)
  {
    return response()->json($request->user());
  }
}
