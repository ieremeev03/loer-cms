<?php

namespace App\Base;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Model;

class SluggableModel extends Model
{
    use Sluggable, SluggableScopeHelpers;

    /**
     * @var array
     */
    protected $guarded = ['created_at', 'id'];

    /**
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source'   => 'title',
                'onUpdate' => false
            ]
        ];
    }
}
