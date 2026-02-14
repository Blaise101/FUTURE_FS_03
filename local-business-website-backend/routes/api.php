<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::post("/login", [AuthController::class, 'login']);
Route::post('/createMessage', [MessageController::class, 'createMessage']);
Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', [AuthController::class, 'user']);
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::group(["prefix" => "products"], function () {
    Route::get('/', [ProductController::class, 'products']);
    Route::post('/create', [ProductController::class, 'createProduct']);
    Route::post('/update/{id}', [ProductController::class, 'updateProduct']);
    Route::delete('/delete/{id}', [ProductController::class, 'deleteProduct']);
  });
  Route::group(['prefix' => 'collections'], function () {
    Route::get('/', [CollectionController::class, 'collections']);
    Route::post('/create', [CollectionController::class, 'createCollection']);
    Route::post('/update/{id}', [CollectionController::class, 'updateCollection']);
    Route::delete('/delete/{id}', [CollectionController::class, 'deleteCollection']);
  });
  Route::group(['prefix' => 'messages'], function () {
    Route::get('/', [MessageController::class, 'getMessages']);
    Route::get('/markAsRead/{id}', [MessageController::class, 'markAsRead']);
    Route::delete('/delete/{id}', [MessageController::class, 'deleteMessage']);
  });
});
