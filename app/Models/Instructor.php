<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Instructor extends Model
{
    use HasFactory, HasUuids;
    protected $keyType = 'string';


    public function instructor(): MorphOne
    {
        return $this->morphOne(Instructor::class, 'userable');
    }
}
