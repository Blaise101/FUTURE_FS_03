<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
  use HasUuids, SoftDeletes;

  protected $fillable = [
    'name',
    'slug',
    'price',
    'description',
    'image',
    'category',
    'featured',
    'stock_quantity',
  ];
}
