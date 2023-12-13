<template>
    <Head title="Добавление страницы"/>
    <AdminLayout>
    <section>
        <form @submit.prevent="form.post(route('pages.store'))" >
            <div class="bg-white md:flex md:flex-row ">
                <div class="p-4 mt-6 space-y-6 md:basis-3/4">
                    <h2 class="text-lg font-medium text-black-50">Добавление страницы</h2>
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
                                        </div>

                                        <div v-else class="p-3 border-2 bg-lime-200 rounded-md mb-2">
                                            {{item.title}}
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

                    <div class="flex items-center gap-4">
                        <PrimaryButton :disabled="form.processing">Сохранить</PrimaryButton>

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
import Select from '@/Components/Select.vue';
import Draggable from 'vue3-draggable';

import { Link, useForm, usePage, Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";


defineProps({
    status: {
        type: String,
    },
});

const parents = usePage().props.pages;
const blocks = usePage().props.infoblocks;
const infoblocks = usePage().props.all_infoblocks;

const form = useForm({
    title: '',
    content: '',
    slug: '',
    parent_id: '',
    blocks: blocks,
    infoblocks: infoblocks,
});
</script>
