<?php

namespace App\Models\Infoblock;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PagesHasInfoblocks extends Model
{
    use HasFactory;
    protected $fillable = ['page_id', 'infoblock_id','sort' ];
    public $timestamps = false;
    protected $table = "page_infoblock";
}
