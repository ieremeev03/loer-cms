<?php

namespace App\Repositories;

use App\Models\Infoblock\Infoblock;
use App\Models\Infoblock\InfoblockFieldValue;
use App\Models\Infoblock\InfoblockItem;
use App\Models\Infoblock\InfoblockPropertyValue;
use App\Models\Page;

class InfoblockRepository
{
    public function getAllInfoblock() {
        return Infoblock::all();
    }

    public function getPropertiesInfoblock($infoblock, $page) {
        $propertires = [];
        $propertiresRaw = $infoblock->properties->sortBy('sort');

        foreach ($propertiresRaw as $property) {

            if($page!=null) {
                $value = InfoblockPropertyValue::where('property_id',$property->id)->where('infoblock_id',$infoblock->id)->where('page_id',$page)->first();
            } else {
                $value = InfoblockPropertyValue::where('property_id',$property->id)->where('infoblock_id',$infoblock->id)->first();
            }

            $propertires[$property->name] = $property;
            $propertires[$property->name]['value'] = $value == null ? $property->default : $value->value;
        }

        return $propertires;
    }

    public function getItemsInfoblock($infoblock, $page) {
        $items = [];

        if($page!=null) {
            $itemsRaw =  $infoblock->items->where('page_id',$page);
        } else {
            $itemsRaw = $infoblock->items;
        }

        foreach ($itemsRaw as $key=>$item) {
            $fields = $infoblock->fields;
            $items[$key]['id'] = $item->id;
            $items[$key]['updated_at'] = $item->updated_at;
            $items[$key]['fields']['title']['value'] = $item->title;
            $items[$key]['fields']['description']['value'] = $item->description;
            $items[$key]['fields']['title']['field']['title'] = "Заголовок";
            $items[$key]['fields']['description']['field']['title'] = "Анонс";
            $items[$key]['fields']['title']['field']['type'] = "Text";
            $items[$key]['fields']['description']['field']['type'] = "Content";
            $items[$key]['fields']['title']['field']['list'] = null;
            $items[$key]['fields']['description']['field']['list'] = null;

            foreach ($fields as $field) {
                $value =  InfoblockFieldValue::where('item_id',$item->id)->where('field_id',$field->id)->first();
                $items[$key]['fields'][$field->name]['value'] = $value == null ? null : $value->value;
                $items[$key]['fields'][$field->name]['field'] = $field;
            }
        }

        return $items;
    }
    public function getItemWithPage($page): array
    {
        $infoblocks = $page->infoblocks;
        $block = [];

        foreach ($infoblocks as $infoblock) {
            $block[$infoblock->name]['type'] = $infoblock->type;
            $block[$infoblock->name]['title'] = $infoblock->title;
            $block[$infoblock->name]['content'] = $infoblock->content;
            $block[$infoblock->name]['button_text'] = $infoblock->button_text;
            $block[$infoblock->name]['button_link'] = $infoblock->button_link;
            $properties = $this->getPropertiesInfoblock($infoblock, $page->id);
            if($properties==null) $block[$infoblock->name]['properties'] = null;
            foreach ($properties as $property) {
                $value = InfoblockPropertyValue::where('property_id',$property->id)->where('infoblock_id',$infoblock->id)->first();
                $block[$infoblock->name]['properties'][$property->name] = $value == null ? $property->default : $value->value;
            }
            $block[$infoblock->name]['items'] = $this->getItemsInfoblock($infoblock, $page->id);

        }
    //dd($block);
        return $block;
    }

    public function getFieldsItem($infoblock) {
        $fieldsRaw = $infoblock->fields->sortBy('sort');
        $fields = [];
        $fields['fields']['title']['value'] = '';
        $fields['fields']['description']['value'] = '';
        $fields['fields']['title']['field']['title'] = "Заголовок";
        $fields['fields']['description']['field']['title'] = "Анонс";
        $fields['fields']['title']['field']['type'] = "Text";
        $fields['fields']['description']['field']['type'] = "Content";
        $fields['fields']['title']['field']['list'] = null;
        $fields['fields']['description']['field']['list'] = null;
        foreach ($fieldsRaw as $field) {
            $fields['fields'][$field->name]['field'] = $field;
            $fields['fields'][$field->name]['value'] = '';
        }

        return $fields;
    }

    public function updateOrCteateItems($items, $block, $page = null) {
        foreach ($items as $item) {
            $key = $item['id'] ?? null;
            $InfoblockItem =  InfoblockItem::find($key);
            //echo $key.' '.$InfoblockItem->id. '<br>';
            if(isset($item['remove'])) {
                $InfoblockItem->delete();
            } else {
                if($InfoblockItem) {
                    $InfoblockItem->update([
                        'title' => $item['fields']['title']['value'],
                        'description' => $item['fields']['description']['value']
                    ]);
                } else {
                    $newItem = InfoblockItem::create([
                        'infoblock_id' =>$block->id,
                        'page_id' => $page,
                        'title' => $item['fields']['title']['value'],
                        'description' => $item['fields']['description']['value']
                    ]);
                }

                foreach ($item['fields'] as $field) {
                    if(isset($field['file'])) {
                        $field['value'] = '/images/temp/'.$field['file'];
                    }
                    if(isset($field['field']['id'])) {
                        $ex = InfoblockFieldValue::where('item_id',$key)->where('field_id', $field['field']['id'])->first();
                        if($ex!=null) {
                            $ex->update([
                                'value' => $field['value']
                            ]);
                        } else {
                            if($field['value']!=null) {
                                InfoblockFieldValue::create([
                                    'item_id' => $InfoblockItem?$key:$newItem->id ,
                                    'field_id' => $field['field']['id'],
                                    'value' => $field['value']
                                ]);
                            }

                        }
                    }
                }
            }


        }

    }

    public function updateOrCreateProperties($props, $block, $page = null) {
        foreach ($props as $prop) {
            if(isset($prop['file'])) {
                $prop['value'] = '/images/temp/'.$prop['file'];
            }
            $ex = InfoblockPropertyValue::where('infoblock_id',$block->id)->where('property_id', $prop['id'])->where('page_id', $page)->first();
            if($ex) {
                $ex->update([
                    'value' => $prop['value']
                ]);
            } else {
                InfoblockPropertyValue::create([
                    'infoblock_id' => $block->id,
                    'property_id' => $prop['id'],
                    'value' => $prop['value'],
                    'page_id' => $page
                ]);
            }
        }
    }
}
