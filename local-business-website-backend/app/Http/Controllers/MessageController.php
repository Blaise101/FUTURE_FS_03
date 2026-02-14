<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
  public function createMessage(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'email' => 'required',
      'message' => 'required',
    ]);
    if ($validator->fails()) {
      return response()->json(['errors' => $validator->errors()], 422);
    }
    Message::create([
      'name' => $request->input('name'),
      'email' => $request->input('email'),
      'message' => $request->input('message'),
    ]);
    return response()->json(['success' => 'Message sent successfully'], 200);
  }

  public function getMessages()
  {
    $messages = Message::all();
    return response()->json(['messages' => $messages], 200);
  }

  public function markAsRead($id)
  {
    $message = Message::find($id);
    if (!$message) {
      return response()->json(['error' => 'Message not found'], 404);
    }
    $message->update(['read' => true]);
    return response()->json(['message' => $message], 200);
  }

  public function deleteMessage($id)
  {
    $message = Message::find($id);
    if (!$message) {
      return response()->json(['error' => 'Message not found'], 404);
    }
    $message->delete();
    return response()->json(['success' => 'Message deleted successfully'], 200);
  }
}
