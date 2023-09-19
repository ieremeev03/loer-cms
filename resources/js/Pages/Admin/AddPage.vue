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

                    <div>
                        <InputLabel for="content" value="Содержимое страницы" class="mb-1"/>
                        <TextArea v-model="form.content" class="mt-1 block w-full"/>
                        <InputError class="mt-2" :message="form.errors.title" />
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


defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    title: '',
    content: '',
});
</script>
