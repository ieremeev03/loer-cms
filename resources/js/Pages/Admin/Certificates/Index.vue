<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, usePage, Link} from '@inertiajs/vue3';


defineProps({
    certificates: Array,
});
</script>

<template>
    <AdminLayout title="Сертификаты">
        <Head title = "Административная панель Сертификаты"></Head>
        <section >
            <div class="p-4 mt-6 space-y-6 ">
                <div class="flex items-center justify-between flex-wrap">
                    <h1 class="text-lg font-medium text-black-50">Сертификаты</h1>
                    <div class="flex flex-row gap-6">

                    </div>

                </div>

                <div class="relative overflow-x-auto rounded">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">ID</th>
                            <th scope="col" class="px-6 py-3">Дата покупки</th>
                            <th scope="col" class="px-6 py-3 ">ФИО получателя</th>
                            <th scope="col" class="px-6 py-3">Сумма</th>
                            <th scope="col" class="px-6 py-3">Данные покупателя</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="certificate in certificates" class="bg-white border-b dark:bg-white dark:border-gray-700">
                            <td class="w-3 px-6 py-4 font-medium whitespace-nowrap ">C-{{ certificate.id }}</td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-12">{{ certificate.created_at }}</td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-1/2">{{ certificate.recipient }}</td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-12">{{ $filters.format_money(certificate.nominal) }}₽</td>
                            <td class="px-6 py-4 text-xs font-medium whitespace-nowrap w-full">
                                <div>{{ certificate.buyer }}</div>
                                <div>{{ certificate.email }}</div>
                                <div>{{ certificate.phone }}</div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <Pagination class="mt-6" :links="certificates.links"/>
            </div>

        </section>


    </AdminLayout>
</template>
