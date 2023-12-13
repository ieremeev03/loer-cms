<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from "@/Components/Pagination.vue";
import {Head, usePage, Link} from '@inertiajs/vue3';


defineProps({
    skipasses: Object,
});
</script>

<template>
    <AdminLayout title="Ски-пассы">
        <Head title = "Административная панель Ски-пасс"></Head>
        <section >
            <div class="p-4 mt-6 space-y-6 ">
                <div class="flex items-center justify-between flex-wrap">
                    <h1 class="text-lg font-medium text-black-50"> Ски-пассы</h1>
                    <div class="flex flex-row gap-6">

                    </div>

                </div>

                <div class="relative overflow-x-auto rounded">
                    <table class="w-full text-sm text-left text-gray-600">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">ID</th>
                            <th scope="col" class="px-6 py-3">Дата покупки</th>
                            <th scope="col" class="px-6 py-3">Операция</th>
                            <th scope="col" class="px-6 py-3">Ски-пасс</th>
                            <th scope="col" class="px-6 py-3">Дата катания</th>
                            <th scope="col" class="px-6 py-3">Тариф</th>
                            <th scope="col" class="px-6 py-3">Контакты</th>
                            <th scope="col" class="px-6 py-3">Сумма</th>
                            <th scope="col" class="px-6 py-3">Оплата</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="skipass in skipasses.data" class="border-b dark:border-gray-700"
                            :class="{'bg-gray-100': !skipass.payed, 'bg-green-100': skipass.payed}">
                            <td scope="row" class="w-3 px-6 py-4 font-medium whitespace-nowrap ">
                                S-{{ skipass.id }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.created_at }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.operation === 1 ? 'Покупка' : 'Пополнение' }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.skipass }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.date_visit }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.tariff?.title }}
                            </td>
                            <td class="px-6 py-4 text-xs whitespace-nowrap w-full">
                                <div v-if="skipass.name">{{ skipass.name }}</div>
                                <div v-if="skipass.phone">{{ skipass.phone }}</div>
                                <div v-if="skipass.email">{{ skipass.email }}</div>
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.sum }}
                            </td>
                            <td class="px-6 py-4 font-medium whitespace-nowrap w-full">
                                {{ skipass.payed ? '+' : '-' }}
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <Pagination class="mt-6" :links="skipasses.links"/>
            </div>

        </section>

    </AdminLayout>
</template>
