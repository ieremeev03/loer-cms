<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Models\Menu\Menu;
use App\Models\Menu\MenuItem;
use App\Repositories\MenuRepository;
use Illuminate\Support\Facades\Redirect;


class MenuController extends Controller
{
    protected MenuRepository $menuRepository;

    public function __construct(MenuRepository $menuRepository)
    {
        $this->menuRepository = $menuRepository;
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = $this->menuRepository->getAllMenus();
        return inertia('Admin/Menus/Index', compact('menus'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        $items = $menu->items();

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        $items = $this->menuRepository->getItems($menu);
        $menu->items = $items;
        return inertia('Admin/Menus/EditMenu', compact('menu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        $validated = $request->validated();
        if($menu->update($validated)) {
            //dd($request->items);
            foreach ($request->items as $item) {
                MenuItem::find($item['id'])->update($item);
            }

            return $this->index();
            //return Redirect::to('admin/menus');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
