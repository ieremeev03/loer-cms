<?php

namespace App\Models;


use App\Base\SluggableModel;
use App\Models\Infoblock\Infoblock;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends SluggableModel
{
    use HasFactory;

    protected $fillable = ['title', 'content', 'slug', 'parent_id'];

    public function parent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(__CLASS__);
    }

    public function children(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(__CLASS__, 'parent_id', 'id');
    }

    public function getLinkAttribute(): string
    {
        return route('page', ['pSlug' => $this->slug]);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function infoblocks()
    {
        return $this->belongsToMany(Infoblock::class, 'page_infoblock', 'page_id', 'infoblock_id')->withPivot('sort', 'bunch');;
    }
}
