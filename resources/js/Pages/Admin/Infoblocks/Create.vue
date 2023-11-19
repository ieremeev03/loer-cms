<template>
    <Head title="Добавление инфоблока"/>
    <AdminLayout>
    <section>
        <form @submit.prevent="form.post(route('infoblocks.store'))" >
            <div class="bg-white ">
                <div class="p-4 mt-6 space-y-6 ">
                    <h2 class="text-lg font-medium text-black-50">Добавление инфоблока</h2>
                    <div >
                        <InputLabel for="title" value="Название" />
                        <TextInput
                            id="title"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.title"
                            @input="form.name = transliterate($event.target.value)"
                            autofocus
                            autocomplete="title"
                        />

                        <InputError class="mt-2" :message="form.errors.title" />
                    </div>

                    <div class="hidden">
                        <InputLabel for="title" value="Символьный код" />
                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="form.errors.title" />
                    </div>

                    <div class="hidden">
                        <InputLabel for="content" value="Текст анонса" class="mb-1"/>
                        <TextArea v-model="form.content" class="mt-1 block w-full h-50"/>
                        <InputError class="mt-2" :message="form.errors.title" />
                    </div>



                    <div class="flex flex-row gap-10">
                        <div>
                            <InputLabel for="type" value="Внешний вид блока" />
                            <select  class="border-gray-300 rounded-md shadow-sm"
                                     v-model="form.type"
                                     ref="input"
                                     @change="setType($event, form.blocks)"
                            >
                                <option  value>Не указан</option>
                                <option v-for="type in types" v-bind:value="type.id" >{{ type.title }}</option>
                            </select>
                        </div>
                       <div v-if='block_image'>
                            <span class="text-xs poster">Пример: </span>
                            <img width="300"  :src="'/assets/img/blocks/'+block_image" />
                       </div>

                    </div>

                </div>
                <div class="p-4 md:mt-6 space-y-2 ">
                    <h2 class="text-lg font-medium text-black-50">Свойства</h2>

                    <template v-for="(block, index) in form.blocks">
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
    </AdminLayout>
</template>

<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import { Link, useForm, usePage, Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Image from "@/Components/Admin/Properties/image.vue";
import Text from "@/Components/Admin/Properties/text.vue";
import Radio from "@/Components/Admin/Properties/radio.vue";
import {transliterate} from 'transliteration';


const components = {
    'Image': Image,
    'Text': Text,
    'Radio': Radio
};

const component_type = (type) => components[type];


defineProps({
    status: {
        type: String,
    },
    img_block : {
        type: String,
    },
});

let block_image = '';

const form = useForm({
    title: '',
    content: '',
    name: '',
    array: false,
    type: '',
    type_sp: '',
    properties: {},
    blocks: []
});

const types = ref({
    'Slider-top': {
        'id' : 'Slider-top',
        'title': 'Слайдер на весь экран',
        'image' : 'full_slider.png',
        'array' : true
    },
    'Poster': {
        'id' : 'Poster',
        'title': 'Карусель с заголовками',
        'image' : 'poster.png',
        'array' : true
    },
    'ContentBlock': {
        'id' : 'ContentBlock',
        'title': 'Текстовый блок',
        'image' : 'content.png',
        'array' : false
    },

    'Events': {
        'id' : 'Events',
        'title': 'Карусель без заголовков',
        'image' : 'afisha.png',
        'array' : true
    },

    'LiveBlockTextTop': {
        'id' : 'LiveBlockTextTop',
        'title': 'Фото с текстом (текст сверху)',
        'image' : 'alive.png',
        'array' : false
    },

    'LiveBlockTextBottom': {
        'id' : 'LiveBlockTextBottom',
        'title': 'Фото с текстом (текст снизу)',
        'image' : 'text_bottom.png',
        'array' : false

    },

    'HowBlock': {
        'id' : 'HowBlock',
        'title': 'Двойной блок',
        'image' : 'two.png',
        'array' : false
    },

    'Slider-text': {
        'id' : 'Slider-text',
        'title': 'Слайдер со статичным текстом',
        'image' : 'full_slider.png',
        'array' : true
    },

    'Photo': {
        'id' : 'Photo',
        'title': 'Фото',
        'image' : 'photo.png',
        'array' : false
    },

    'Instructors': {
        'id' : 'Instructors',
        'title': 'Список инструкторов',
        'image' : 'instructors.png',
        'array' : false
    },

    'Instructor': {
        'id' : 'Instructor',
        'title': 'Отдельный инструктор',
        'image' : 'instructors.png',
        'array' : false
    },

    'TourBlock': {
        'id' : 'TourBlock',
        'title': 'Список с изображением',
        'image' : 'tours.png',
        'array' : true
    },

    'ImageContent': {
        'id' : 'ImageContentList',
        'title': 'Изображение с описанием',
        'image' : 'image_content.png',
        'array' : false
    },

    'FileListContent': {
        'id' : 'FileListContent',
        'title': 'Список файлов',
        'image' : 'filelist.png',
        'array' : true
    },
    'Certificate': {
        'id' : 'Certificate',
        'title': 'Продажа сертификата',
        'image' : '',
        'array' : false
    },


});


function  getUploadedDataProp(file) {
    console.log(file[0][0])
    let item = file[2];
    form.properties[item]['file'] = file[0];
}

function setType(event, blocks) {
    let type = event.target.value
    block_image = types.value[type].image;
    form.array = types.value[type].array;
    console.log(type)
    axios
        .get('/InfoBlocks/getProperties?id='+type)
        .then(response => {
            form.blocks = response.data
            form.properties = response.data
        })
        .catch(err => {
            console.log(err)
        })
}
</script>
