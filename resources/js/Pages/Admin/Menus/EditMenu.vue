<template>
    <Head :title="'Редактирование меню - '+menu.title"/>
    <AdminLayout>
    <section>
        <form @submit.prevent="form.patch(route('menus.update', menu))" >
        <div class="bg-white md:flex md:flex-row ">
            <div class="p-4 mt-6 space-y-6 md:basis-3/4">
                <h2 class="text-lg font-medium text-black-50">Редактирование меню</h2>
                    <div >
                        <InputLabel for="title" value="Название меню" />
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

                <div class="space-y-6">
                    <template v-for="(item, index) in form.items"  :key="index">
                        <div class="flex flex-row items-center gap-4 rounded-lg bg-gray-50 p-2">
                            <TextInput
                                :id="item.title"
                                :name="'title-' + index"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="item.title"
                                autofocus
                                autocomplete="title"
                            />

                            <svg class="cursor-pointer" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 8.24994C10.31 8.24994 10.12 8.17994 9.97 8.02994L8 6.05994L6.03 8.02994C5.74 8.31994 5.26 8.31994 4.97 8.02994C4.68 7.73994 4.68 7.25994 4.97 6.96994L7.47 4.46994C7.76 4.17994 8.24 4.17994 8.53 4.46994L11.03 6.96994C11.32 7.25994 11.32 7.73994 11.03 8.02994C10.88 8.17994 10.69 8.24994 10.5 8.24994Z" fill="#000000"/>
                                <path d="M8 19.75C7.59 19.75 7.25 19.41 7.25 19V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V19C8.75 19.41 8.41 19.75 8 19.75Z" fill="#000000"/>
                                <path d="M16 19.7499C15.81 19.7499 15.62 19.6799 15.47 19.5299L12.97 17.0299C12.68 16.7399 12.68 16.2599 12.97 15.9699C13.26 15.6799 13.74 15.6799 14.03 15.9699L16 17.9399L17.97 15.9699C18.26 15.6799 18.74 15.6799 19.03 15.9699C19.32 16.2599 19.32 16.7399 19.03 17.0299L16.53 19.5299C16.38 19.6799 16.19 19.7499 16 19.7499Z" fill="#000000"/>
                                <path d="M16 19.75C15.59 19.75 15.25 19.41 15.25 19V5C15.25 4.59 15.59 4.25 16 4.25C16.41 4.25 16.75 4.59 16.75 5V19C16.75 19.41 16.41 19.75 16 19.75Z" fill="#000000"/>
                            </svg>

                            <TextInput
                                :id="'link-' + index"
                                :name="'link-' + index"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="item.link"
                                autofocus
                                autocomplete="link"
                            />
                        </div>
                    </template>
                </div>
            </div>
            <div class="p-4 md:mt-6 space-y-6 md:basis-1/4">
                <h2 class="text-lg font-medium text-black-50">Свойства</h2>
                <div >
                    <InputLabel for="title" value="Символьный код" />
                    <TextInput
                        id="name"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.name"
                        autofocus
                        autocomplete="name"
                    />

                    <InputError class="mt-2" :message="form.errors.name" />
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
import SecondaryButton
    from "../../../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/SecondaryButton.vue";

defineProps({
    status: {
        type: String,
    },
});

const menu = usePage().props.menu;


const form = useForm({
    title: menu.title,
    name: menu.name,
    items: menu.items
});

const formDelete = useForm({
    id: menu.id,
});

function destroy() {
console.log(menu)
    if (confirm('Вы действительно хотите удалить страницу?')) {
        router.delete(route('menus.destroy', menu.id))
    }
}
</script>
