<template>
    <Head :title="'Редактирование страницы - '+page.title"/>
    <AdminLayout>
    <section>
        <form @submit.prevent="form.patch(route('pages.update', page))" >
        <div class="bg-white md:flex md:flex-row ">
            <div class="p-4 mt-6 space-y-6 md:basis-3/4">
                <h2 class="text-lg font-medium text-black-50">Редактирование страницы</h2>
                    <div >
                        <InputLabel for="title" value="Заголовок страницы" />
                        <TextInput
                            id="title"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.title"
                            autofocus
                            autocomplete="title"
                        />

                        <InputError class="mt-2" :message="form.errors.title" />
                    </div>

                    <div class="hidden">
                        <InputLabel for="content" value="Содержимое страницы" class="mb-1"/>
                        <TextArea v-model="form.content" class="mt-1 block w-full"/>
                        <InputError class="mt-2" :message="form.errors.title" />
                    </div>

                <div class="flex flex-row gap-10">
                    <div class="w-1/2">
                        <div class="font-bold">Блоки на странице</div>
                        <div class="space-y-6">
                            <draggable v-model="form.blocks">
                                <template v-slot:item="{item}">
                                    <div v-if="item.id === -1" :class="{'hidden' : form.blocks.length > 1}" class="w-full h-32 bg-gray-50 rounded-lg flex flex-col text-xs text-gray-500 items-center justify-center">
                                        Перетащите сюда нужный блок
                                        {{form.blocks.length}}
                                    </div>

                                    <div v-else class="p-3 border-2 bg-lime-200 rounded-md mb-2 relative flex flex-row items-center justify-between group">
                                        <div class="flex flex-col">
                                            <div>{{item.title}}</div>
                                            <div class="text-xs text-gray-400 h-5">{{item?.pivot?.bunch}}</div>
                                        </div>
                                        <div class="" v-if="loading">
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                        <a class="group-hover:block hidden cursor-pointer" @click="showModalEdit(item.id, item?.pivot?.bunch);">
                                            <svg class="text-gray-500" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 5L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M4 8H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M4 11H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.4563 13.5423L13.9268 18.0719C13.6476 18.3511 13.292 18.5414 12.9048 18.6188L10.8153 19.0367L11.2332 16.9472C11.3106 16.5601 11.5009 16.2045 11.7801 15.9253L16.3096 11.3957M18.4563 13.5423L19.585 12.4135C19.9755 12.023 19.9755 11.3898 19.585 10.9993L18.8526 10.2669C18.4621 9.8764 17.8289 9.8764 17.4384 10.2669L16.3096 11.3957M18.4563 13.5423L16.3096 11.3957" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>

                    <div class="w-1/2">
                        <div class="font-bold">Список блоков</div>
                            <div class="w-full">
                                <draggable v-model="form.infoblocks">
                                    <template v-slot:item="{item}">
                                        <span class="w-auto p-1 border-2 bg-gray-50 rounded-md mb-2 text-xs">
                                            {{item.title}}
                                        </span>
                                    </template>
                                </draggable>
                            </div>
                    </div>
                </div>
            </div>
            <div class="p-4 md:mt-6 space-y-6 md:basis-1/4">
                <h2 class="text-lg font-medium text-black-50">Свойства</h2>
                <div>
                    <InputLabel for="slug" value="Адрес" />
                    <TextInput  v-model="form.slug"  class="mt-1 block w-full"/>
                    <InputError class="mt-2" :message="form.errors.slug" />
                </div>
                <div>
                    <InputLabel for="parent" value="Родительский элемент" />
                    <Select :parents="parents" v-model="form.parent_id" class="mt-1 block w-full"/>
                </div>
                <div class="flex items-center gap-4">
                    <PrimaryButton :disabled="form.processing">Сохранить</PrimaryButton>
                    <button @click="destroy">Удалить</button>
                </div>
                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <div v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">Сохранено</div>
                </Transition>

            </div>
        </div>
        </form>
    </section>

        <!-- Main modal -->
        <div v-if="openModalEdit" id="edit-modal" tabindex="-1" aria-hidden="true" class=" backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
            <div class="relative w-full max-w-2xl max-h-full mx-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-2xl ">
                    <!-- Modal header -->
                    <form id="fItems" @submit.prevent="formItems.post('/InfoBlocks/addItems'); openModalEdit= false" >
                    <div class="flex items-start justify-between pl-4 pr-4 pt-4  rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold  ">
                           {{modalTitle}}
                        </h3>
                        <button @click="openModalEdit = false; " type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only" >Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div v-if="Object.keys(formItems.properties).length > 0" class="p-6 space-y-6">
                        <template v-for="(block, index) in formItems.properties">

                            <component
                                :is="component_type(block.type)"
                                :title="block.title"
                                :list="JSON.parse(block.list)"
                                :item_id="parseInt(index)"
                                :field_id="index"
                                :field_value="block.value"
                                v-model="formItems.properties[index].value"
                                @files-dropped="getUploadedDataProp"
                            ></component>
                        </template>
                    </div>
                    <div v-if="infoblockArray" class="p-6 space-y-6">
                        <template v-for="(item, index_i) in formItems.items"  :key="index_i">
                            <div class="p-4 bg-gray-50 rounded-lg space-y-2" :id="'item_'+index_i">
                                <template v-for="(block, index_b) in item.fields">
                                    <component
                                        v-bind:is="component_type(block.field.type)"
                                        :title="block.field.title"
                                        :list="null"
                                        :item_id="parseInt(index_i)"
                                        :field_id="index_b"
                                        :field_value="block.value"
                                        v-model="formItems.items[index_i].fields[index_b].value"
                                        @files-dropped="getUploadedData"
                                    ></component>
                                </template>

                                <div class="flex flex-row items-center justify-end ">
                                    <span class="cursor-pointer bg-red-500 p-2 rounded-lg text-xs text-white" @click="removeItem(index_i)">Удалить</span>
                                </div>
                            </div>
                        </template>

                        <div class="h-50 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                            <span class="cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white" @click="addItem">Добавить</span>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center justify-end p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="submit" class="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-400 border border-transparent rounded-md font-semibold text-xs text-white  uppercase">Сохранить</button>
                        <a @click="openModalEdit = false">Отмена</a>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import Select from '@/Components/Select.vue';
import Draggable from 'vue3-draggable';

import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Image from "@/Components/Admin/Properties/image.vue";
import Video from "@/Components/Admin/Properties/video.vue";
import Text from "@/Components/Admin/Properties/text.vue";
import Radio from "@/Components/Admin/Properties/radio.vue";
import Content from "@/Components/Admin/Properties/content.vue";

defineProps({
    status: {
        type: String,
    },

});

const openModalEdit = ref(false)
const loading = ref(false)
const components = {
    'Image': Image,
    'Video': Video,
    'Text': Text,
    'Radio': Radio,
    'Content': Content
};

const component_type = (type) => components[type];

const page = usePage().props.page;
const parents = usePage().props.pages;
const blocks = usePage().props.infoblocks;
const infoblocks = usePage().props.all_infoblocks;

let fields = [];
let properties = [];
let modalTitle = "";
let infoblockArray = false;




const form = useForm({
    title: page.title,
    content: page.content,
    parent_id: page.parent_id,
    blocks: blocks,
    infoblocks: infoblocks,
    slug: page.slug,
});



const formItems = useForm({
  items: [],
  properties: [],
  infoblock: 0,
  page: 0,
  infoblock_bunch: ''
});

const formDelete = useForm({
    id: page.id,
});

function addItem() {
    let cloneFields =JSON.parse(JSON.stringify(fields));
    formItems.items[Object.keys(formItems.items).length] = Object.assign({}, cloneFields)
}

function removeItem(id){
    if (confirm('Вы действительно хотите удалить элеиент?')) {
        formItems.items[id]['remove'] = true;
        document.getElementById("item_"+id).remove();
    }
}

function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};
function  getUploadedData(file) {
    console.log(file)
    let item = file[1];
    let field = file[2];

    formItems.items[item]['fields'][field]['file'] = file[0];
}

function  getUploadedDataProp(file) {
    console.log(file[0][0])
    let item = file[2];
    formItems.properties[item]['file'] = file[0];
}

function destroy() {
console.log(page)
    if (confirm('Вы действительно хотите удалить страницу?')) {
        router.delete(route('pages.destroy', page.id))
    }
}

function moveUp(pos) {
    console.log(pos)
    formItems.items.splice(1, 2, formItems.items[pos], formItems.items[pos-1]);
    console.log(formItems.items)
    return false;
}
function showModalEdit(id, uuid) {
    loading.value = true
    formItems['infoblock'] = id
    formItems['infoblock_bunch'] = uuid
    formItems['page'] = page.id
    infoblockArray = infoblocks.find(block => block.id === id).array
    modalTitle = infoblockArray?'Элементы':'Настройки'
    axios
        .get('/InfoBlocks/getItems?id='+id+'&page='+page.id+'&uuid='+uuid)
        .then(response => {
            formItems.items = response.data['items']
            fields = response.data['fields']
            formItems.properties = response.data['properties']
            console.log(formItems)
            console.log(fields)
            console.log(properties)
            loading.value = false
            openModalEdit.value = true;
        })
        .catch(err => {
            loading.value = false
            console.log(err)
        })
}
</script>
