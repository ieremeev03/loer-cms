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
                                    <a :href="`/admin/infoblocks/${item.id}/edit`" class="font-medium text-blue-600  hover:underline">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" fill="currentColor"/></svg>
                                    </a>
                                    <a href="#" @click="copy(item.id)" class="font-medium text-blue-600  hover:underline">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="currentColor"/>
                                            <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <a href="#" @click="destroy(item.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                            <path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                    </a>
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
        axios
            .delete(route('infoblocks.destroy', id))
            .then(response => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function copy(id) {
    console.log(id)
    if (confirm('Вы действительно хотите скопировать инфоблок?')) {
        axios
            .get('/InfoBlocks/copy?id='+id)
            .then(response => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>


