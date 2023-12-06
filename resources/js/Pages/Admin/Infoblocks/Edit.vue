<template>
    <Head :title="'Редактирование меню - '+block.title"/>
    <AdminLayout>
    <section>
        <form @submit.prevent="form.patch(route('infoblocks.update', block))" >
        <div class="bg-white md:flex md:flex-row ">
            <div class="p-4 mt-6 space-y-6 w-full">
                <h2 class="text-lg font-medium text-black-50">Редактирование инфоблока</h2>
                    <div >
                        <InputLabel for="title" value="Название блока" />
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

                <div>
                    <InputLabel for="content" value="Текст блока" class="mb-1"/>
                    <TextArea v-model="form.content" class="mt-1 block w-full"/>
                    <InputError class="mt-2" :message="form.errors.title" />
                </div>



                <div class="space-y-2 ">

                    <div v-if="Object.keys(props).length > 0" class="space-y-6">
                        <h2 class="text-lg font-medium text-black-50 mb-2">Свойства</h2>
                        <template v-for="(block, index) in form.properties">
                            <component
                                v-bind:is="component_type(block.type)"
                                :title="block.title"
                                :list="JSON.parse(block.list)"
                                :item_id="parseInt(index)"
                                :field_id="index"
                                :field_value="block.value"
                                v-model="form.properties[index].value"
                                @files-dropped="getUploadedDataProp"
                            ></component>
                        </template>
                    </div>

                    <div v-if="block.array" class="space-y-6" >
                        <h2 class="text-lg font-medium text-black-50 mb-2">Элементы</h2>

                        <template v-for="(item, index_i) in form.items"  :key="index_i">
                            <div class="p-4 bg-gray-50 rounded-lg" :id="'item_'+index_i">
                                <template v-for="(block, index_b) in item.fields">
                                    <component
                                        v-bind:is="component_type(block.field.type)"
                                        :title="block.field.title"
                                        :list="null"
                                        :item_id="parseInt(index_i)"
                                        :field_id="index_b"
                                        :field_value="block.value"
                                        v-model="form.items[index_i].fields[index_b].value"
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

        </div>

        </form>
    </section>
    </AdminLayout>
</template>

<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import Select from '@/Components/Select.vue';


import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";
import SecondaryButton
    from "../../../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/SecondaryButton.vue";
import Image from "@/Components/Admin/Properties/image.vue";
import Video from "@/Components/Admin/Properties/video.vue";
import Text from "@/Components/Admin/Properties/text.vue";
import Radio from "@/Components/Admin/Properties/radio.vue";
import Content from "@/Components/Admin/Properties/content.vue";

const components = {
    'Image': Image,
    'Text': Text,
    'Radio': Radio,
    'Video': Video,
    'Content' : Content
};

const component_type = (type) => components[type];

defineProps({
    status: {
        type: String,
    },
});

const block = usePage().props.block;
const props = usePage().props.props;
let items = usePage().props.items;
const fields = usePage().props.fields;

const form = useForm({
    title: block.title,
    content: block.content,
    items: items,
    properties: props,
});

console.log(props)


const formDelete = useForm({
    id: block.id,
});

function addItem() {
    let item = [];
    console.log(form.items)
    form.items[Object.keys(form.items).length] = fields
    console.log(form.items)
}

function removeItem(id){
    if (confirm('Вы действительно хотите удалить элеиент?')) {
        form.items[id]['remove'] = true;
        document.getElementById("item_"+id).remove();
    }
}

function uniqid(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}`:""}`;
};
function  getUploadedData(file) {
    console.log(file[0][0], file[1],  file[2])
    let item = file[1];
    let field = file[2];
    console.log(form.items)
    form.items[item]['fields'][field]['file'] = file[0];
}

function  getUploadedDataProp(file) {
    console.log(file[0][0])
    let item = file[2];
    form.properties[item]['file'] = file[0];
}
function destroy() {
console.log(block)
    if (confirm('Вы действительно хотите удалить страницу?')) {
        router.delete(route('menus.destroy', block.id))
    }
}
</script>
