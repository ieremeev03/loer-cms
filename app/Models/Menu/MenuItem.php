<?php

namespace app\Models\Menu;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['title', 'link', 'position'];
}
