<template>
    <AdminLayout>
        <Head title = "Административная панель"></Head>
        <section >
            <div class="p-4 mt-6 space-y-6 ">
                <div class="flex items-center justify-between flex-wrap">
                    <h1 class="text-lg font-medium text-black-50">Инструкторы</h1>

                </div>

                <div class="relative overflow-x-auto rounded">
                    Тут будет управление инсутркторами
                </div>
            </div>

        </section>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';

const pages = usePage().props.pages;

</script>


