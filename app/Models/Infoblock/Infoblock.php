<?php

namespace App\Models\Infoblock;

use App\Models\Menu\MenuItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Infoblock extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['title', 'content', 'name', 'type' ];
    //public $timestamps = false;

    public function items(): HasMany
    {
        return $this->hasMany(InfoblockItem::class);
    }

    public function fields(): HasMany
    {
        return $this->hasMany(InfoblockField::class);
    }

    public function properties(): HasMany
    {
        return $this->hasMany(InfoblockProperty::class, 'infoblock_type', 'type');
    }


}
