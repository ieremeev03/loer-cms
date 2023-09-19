<?php

namespace App\Repositories;

use App\Models\Page;

class PageRepository
{
    public function getAllLinks()
    {
        return Page::where('parent_id', null)->get()->map(function ($page) {
            return [
                'id' => $page->id,
                'title' => $page->title,
                'children' => $page->children->map(function ($child) {
                    return [
                        'id' => $child->id,
                        'title' => $child->title,
                    ];
                })->toArray(),
            ];
        })->toArray();
    }
}
