<?php

namespace App\Repositories;

use App\Models\Menu\Menu;


class MenuRepository
{
    public function getAllMenus()
    {
        return Menu::all();
    }

    public function getItems($menu)
    {
        return Menu::find($menu->id)->items()->get();
    }
}
