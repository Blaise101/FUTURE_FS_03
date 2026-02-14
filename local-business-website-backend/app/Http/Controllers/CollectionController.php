<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CollectionController extends Controller
{
  public function collections()
  {
    $collections = Collection::all();
    return response()->json(['collections' => $collections], 200);
  }

  public function createCollection(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'description' => 'required',
    ]);
    if ($validator->fails()) {
      return response()->json(['errors' => $validator->errors(), $request->all()], 422);
    }
    $collection = new Collection();
    $collection->name = $request->input('name');
    $collection->description = $request->input('description');
    $collection->save();
    return response()->json(['collection' => $collection], 202);
  }

  public function updateCollection(Request $request, $id)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'description' => 'required',
    ]);
    if ($validator->fails()) {
      return response()->json(['errors' => $validator->errors()], 422);
    }
    $collection =  Collection::find($id);
    if (!$collection) {
      return response()->json(['error' => 'Collection Data Not found'], 404);
    }

    $collection->name = $request->input('name');
    $collection->description = $request->input('description');
    $collection->save();
    return response()->json(['collection' => $collection], 202);
  }

  public function deleteCollection($id)
  {
    $collection =  Collection::find($id);
    if (!$collection) {
      return response()->json(['error' => 'Collection Data Not found'], 404);
    }
    $collection->delete();

    return response()->json(['messgae' => 'Collection deleted successfully'], 202);
  }
}
