<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInfoblockRequest;
use App\Http\Requests\StorePageRequest;
use App\Http\Requests\UpdateInfoblockRequest;
use App\Http\Requests\UpdatePageRequest;
use App\Models\Infoblock\Infoblock;
use App\Models\Infoblock\InfoblockField;
use App\Models\Infoblock\InfoblockFieldValue;
use App\Models\Infoblock\InfoblockItem;
use App\Models\Infoblock\InfoblockProperty;
use App\Models\Infoblock\InfoblockPropertyValue;
use App\Models\Menu\Menu;
use App\Models\Page;
use App\Repositories\InfoblockRepository;
use App\Repositories\PageRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class InfoblockController extends Controller
{

    protected InfoblockRepository $infoblockRepository;
    protected PageRepository $pageRepository;

    public function __construct(PageRepository $pageRepository, InfoblockRepository $infoblockRepository)
    {
        $this->infoblockRepository = $infoblockRepository;
        $this->pageRepository = $pageRepository;
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $infoblocks = $this->infoblockRepository->getAllInfoblock();
        return inertia('Admin/Infoblocks/Index', compact('infoblocks'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/Infoblocks/Create', compact('pages'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInfoblockRequest $request)
    {
        $validated = $request->validated();
        $block = Infoblock::create($validated);

        if($block) {
            $props = $request->properties;
            foreach ($props as $prop) {
                if(isset($prop['file'])) $prop['value'] = '/images/temp/'.$prop['file'];

                    InfoblockPropertyValue::create([
                        'infoblock_id' => $block->id,
                        'property_id' => $prop['id'],
                        'value' => $prop['value']
                    ]);

            }
        }

       $pages = $this->pageRepository->getAllLinks();
       return $this->index();
    }

    /**
     * Display the specified resource.
     */
    public function show(Infoblock $block)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Infoblock $block)
    {
        $items = $this->infoblockRepository->getItemsInfoblock($block);
        //dd($items);

        $fields = $this->infoblockRepository->getFieldsItem($block);
        //dd($fields);
        $props = [];
        $props = $this->infoblockRepository->getPropertiesInfoblock($block);
        //$pages = $this->pageRepository->getAllLinks();
        //dd($block);
        return inertia('Admin/Infoblocks/Edit', compact('block', 'props' , 'fields', 'items'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInfoblockRequest $request, Infoblock $block)
    {
        $validated = $request->validated();
        $block->update($validated);
        $props = $request->properties;
        $items = $request->items;

        if (count($items) >0 ) {
            $this->infoblockRepository->updateOrCteateItems($items,$block);
        }

        if (count($props) >0 ) {
            $this->infoblockRepository->updateOrCreateProperties($props, $block);
        }
        //dd($validated);
        //$pages = $this->pageRepository->getAllLinks($props);
        return $this->index();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Infoblock $infoblock)
    {

        $infoblock->delete();
        if($infoblock) {
            InfoblockPropertyValue::where('infoblock_id', $infoblock->id)->delete();
        }

        return $this->index();
    }

    public function copy(Request $request)
    {
        $infoblock = Infoblock::find($request->id);
        $newInfoblock = Infoblock::create([
            'name' => $infoblock->name.'_copy',
            'type' => $infoblock->type,
            'array' => $infoblock->array,
            'title' => $infoblock->title.' (копия)',
            'content' =>  $infoblock->content,
            'created_at' => Carbon::now()

        ]);

        if($newInfoblock) {
            $values = InfoblockPropertyValue::where('infoblock_id', $infoblock->id)->get();

            foreach ($values as $value) {
                InfoblockPropertyValue::create([
                    'infoblock_id' => $newInfoblock->id,
                    'property_id' => $value->property_id,
                    'value' => $value->value
                ]);
            }
        }
        return $this->index();
    }

    public function getProperties(Request $request) {
        //$infoblock = Infoblock::where('type', $request->id)->first();
        $properties = InfoblockProperty::where('infoblock_type', $request->id)->get();
        $prop = [];
        foreach ($properties as $property) {
            $prop[$property->name] = $property;
            $prop[$property->name]['value'] = '';
        }
        return $prop;
    }

    public function getItems(Request $request) {
        $data = [];
        $infoblock = Infoblock::find($request->id);
        $fields = $this->infoblockRepository->getFieldsItem($infoblock);
        $page = isset($request->page) ? $request->page : null;
        $properties = $this->infoblockRepository->getPropertiesInfoblock($infoblock, $page);
        $items = [];
        if($infoblock) $items = $this->infoblockRepository->getItemsInfoblock($infoblock, $page);
        $data['items'] = $items;
        $data['fields'] = $fields;
        $data['properties'] = $properties;
        return $data;
    }

    public function addItems(Request $request) {
        $items = $request->items;
        $infoblock = Infoblock::find($request->infoblock);
        $page = isset($request->page) ? $request->page : null;
        $properties = $request->properties;
       //dd($page);
        if (count($items) >0 ) {
            $this->infoblockRepository->updateOrCteateItems($items,$infoblock,$page);
        }

        if (count($properties) >0 ) {
            $this->infoblockRepository->updateOrCreateProperties($properties, $infoblock, $page);
        }
    }

    public function upload(Request $request) {
        //dd($request->file);
        $request->validate([
            'file' => 'required',
        ]);

        $imageName = uniqid(time()).'.'.$request->file->extension();
        $request->file->move(public_path('images/temp'), $imageName);

       return $imageName;
    }
}
