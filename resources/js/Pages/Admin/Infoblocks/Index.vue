<template>
    <AdminLayout>
        <Head title = "Административная панель"></Head>
        <section >
            <div class="p-4 mt-6 space-y-6 ">
                <div class="flex items-center justify-between flex-wrap">
                    <h1 class="text-lg font-medium text-black-50">Инфоблоки</h1>
                    <a :href="route('infoblocks.create')" class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Добавить
                    </a>
                </div>

                <div class="relative overflow-x-auto rounded">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Название
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Действия
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <template  v-for="item in items">
                            <tr class="bg-white border-b dark:bg-white dark:border-gray-700">
                                <th scope="row" class="w-3 px-6 py-4 font-medium whitespace-nowrap ">
                                    {{item.id}}
                                </th>
                                <td class="px-6 py-4 w-full">
                                    {{item.title}}
                                </td>
                                <td class="flex items-center px-6 py-4 space-x-3">
                                    <a :href="`/admin/infoblocks/${item.id}/edit`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Редактировать</a>
                                    <a href="#" @click="destroy(item.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Удалить</a>
                                </td>
                            </tr>
                        </template>

                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, router, usePage} from '@inertiajs/vue3';

const items = usePage().props.infoblocks;

function destroy(id) {
    console.log(id)
    if (confirm('Вы действительно хотите удалить инфоблок?')) {
        router.delete(route('infoblocks.destroy', id))
    }
}
</script>


