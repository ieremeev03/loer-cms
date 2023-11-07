<?php

namespace App\Models\Menu;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'name', ];
    public $timestamps = false;

    public function items(): HasMany
    {
        return $this->hasMany(MenuItem::class);
    }
}
