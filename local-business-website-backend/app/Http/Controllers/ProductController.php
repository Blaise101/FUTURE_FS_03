<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
  public function products()
  {
    $products = Product::all();
    return response()->json(['products' => $products], 200);
  }

  public function createProduct(Request $request)
  {
    $validate = Validator::make($request->all(), [
      'name' => 'required',
      'category' => 'required',
      'price' => 'required|numeric',
      'image' => 'required|image|mimes:jpeg,png,jpg',
      'description' => 'sometimes'
    ]);
    if ($validate->fails()) {
      return response()->json(['errors' => $validate->errors()], 422);
    };
    $image = $request->file('image');

    if ($image) {
      $filename = $request->input('name') . time() . '.' . $image->getClientOriginalExtension();
      $path = public_path('products');
      if (!file_exists($path)) {
        mkdir($path, 0755, true);
      }
      $image->move($path, $filename);
    }
    $product = Product::create([
      'name' => $request->input('name'),
      'category' => $request->input('category'),
      'price' => $request->input('price'),
      'image' => 'products/' . $filename,
      'description' => $request->input('description'),
    ]);
    return response()->json(['product' => $product], 200);
  }

  public function getProduct($id)
  {
    $product = Product::find($id);
    if (!$product) {
      return response()->json(['message' => 'Product data not found'], 200);
    }
    return response()->json(['product' => $product], 200);
  }

  public function updateProduct($id, Request $request)
  {
    $validate = Validator::make($request->all(), [
      'name' => 'required',
      'category' => 'required',
      'price' => 'required|numeric',
      'image' => 'sometimes',
      'description' => 'sometimes'
    ]);
    if ($validate->fails()) {
      return response()->json(['errors' => $validate->errors(), $request->all()], 422);
    };
    $product = Product::find($id);
    if (!$product) {
      return response()->json(['error' => 'Product data not found'], 404);
    }
    $image = $request->file('image');

    if ($image) {
      $filename = $request->input('name') . time() . '.' . $image->getClientOriginalExtension();
      $path = public_path('products');
      if (!file_exists($path)) {
        mkdir($path, 0755, true);
      }
      $image->move($path, $filename);
    }

    $product->update([
      'name' => $request->input('name'),
      'category' => $request->input('category'),
      'price' => $request->input('price'),
      'image' => $image ? 'products/' . $filename : $product->image,
      'description' => $request->input('description'),
    ]);
    return response()->json(['product' => $product], 200);
  }

  public function deleteProduct($id)
  {
    $product = Product::find($id);
    if (!$product) {
      return response()->json(['error' => 'Product data not found'], 404);
    }
    $product->delete();
    return response()->json(['message' => 'Product deleted successfully'], 200);
  }
}
