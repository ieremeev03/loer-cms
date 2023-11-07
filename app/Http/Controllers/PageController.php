<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePageRequest;
use App\Http\Requests\UpdatePageRequest;
use App\Models\Infoblock\InfoblockField;
use App\Models\Infoblock\InfoblockFieldValue;
use App\Models\Infoblock\PagesHasInfoblocks;
use App\Models\Menu\Menu;
use App\Models\Page;
use App\Models\Setting;
use App\Repositories\InfoblockRepository;
use App\Repositories\PageRepository;
use Illuminate\Database\Eloquent\Collection;

class PageController extends Controller
{
    protected PageRepository $pageRepository;
    protected InfoblockRepository $infoblockRepository;

    public function __construct(PageRepository $pageRepository, InfoblockRepository $infoblockRepository)
    {
        $this->pageRepository = $pageRepository;
        $this->infoblockRepository = $infoblockRepository;
    }

    public function home()
    {
        $home_id = Setting::where('name', 'home_page')->first()->value;
        $home_page = Page::find($home_id);
        return $this->getPage($home_page);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/Index', compact('pages'));
    }
    public function getPage(Page $page)
    {
      $menus = Menu::with('items')->get()->mapWithKeys(function ($item, $key) {
          $menu[$item->name]['name'] = $item->name;
          $menu[$item->name]['title'] = $item->title;
          $menu[$item->name]['items'] = $item->items->all();
          return $menu;
      })->all();

      $blocks = $this->infoblockRepository->getItemWithPage($page);

      //dd($blocks);

      return inertia('Page', compact('page','menus', 'blocks'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pages = $this->pageRepository->getAllLinks();
        $infoblocks = new Collection();
        $infoblocks->push([
            'id' => -1,
            'name' => 'empty'
        ]);
        $all_infoblocks = $this->infoblockRepository->getAllInfoblock();
        return inertia('Admin/AddPage', compact('pages', 'infoblocks', 'all_infoblocks'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        //dd($request);
        $validated = $request->validated();

        $page = Page::create($validated);
        if($page) {
            $blocks = $request->blocks;
            if($blocks != null) {
                foreach ($blocks as $key=>$block) {
                    PagesHasInfoblocks::create([
                        'page_id' => $page->id,
                        'infoblock_id' => $block['id'],
                        'sort' => $key
                    ]);
                }
            }
        }
        $pages = $this->pageRepository->getAllLinks();

        return $this->index();
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        $pages = $this->pageRepository->getAllLinks();
        $infoblocks = $page->infoblocks;
        if($infoblocks->count() == 0 ) {
            $infoblocks->push([
                'id' => -1,
                'name' => 'empty'
            ]);
        }
        $all_infoblocks = $this->infoblockRepository->getAllInfoblock();
        return inertia('Admin/EditPage', compact('page','pages', 'infoblocks', 'all_infoblocks'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageRequest $request, Page $page)
    {

        $validated = $request->validated();
        $page->update($validated);
        $blocks = $request->blocks;
        if($blocks != null) {
            $pib = PagesHasInfoblocks::where('page_id', $page->id)->delete();
            foreach ($blocks as $key=>$block) {

                PagesHasInfoblocks::create([
                    'page_id' => $page->id,
                    'infoblock_id' => $block['id'],
                    'sort' => $key
                ]);
            }

        }
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/Index', compact('page', 'pages'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();
        $pages = $this->pageRepository->getAllLinks();
        return $this->index();
    }
}
