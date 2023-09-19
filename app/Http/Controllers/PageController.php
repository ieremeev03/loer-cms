<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePageRequest;
use App\Http\Requests\UpdatePageRequest;
use App\Models\Page;
use App\Repositories\PageRepository;

class PageController extends Controller
{
    protected PageRepository $pageRepository;

    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
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

      return inertia('Page', compact('page'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/AddPage', compact('pages'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        $validated = $request->validated();
        $page = Page::create($validated);
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/EditPage', compact('page', 'pages'));
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
        return inertia('Admin/EditPage', compact('page','pages'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageRequest $request, Page $page)
    {
        $validated = $request->validated();
        $page->update($validated);
        //dd($validated);
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/EditPage', compact('page', 'pages'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();
        $pages = $this->pageRepository->getAllLinks();
        return inertia('Admin/Index', compact('pages'));
    }
}
