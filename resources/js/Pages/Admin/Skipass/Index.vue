<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import Pagination from "@/Components/Pagination.vue";


defineProps({
    skipasses: Object,
});
</script>

<template>
    <AdminLayout title="Ски-пассы">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Ски-пассы
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto">
                <div class="">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    #
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Дата покупки
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Операция
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Ски-пасс
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Дата
                                    катания
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Тариф
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Контакты
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Сумма
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Оплата
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="skipass in skipasses.data"
                                :class="{'bg-gray-100': !skipass.payed, 'bg-green-100': skipass.payed}">
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    S-{{ skipass.id }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.created_at }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.operation === 1 ? 'Покупка' : 'Пополнение' }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.skipass }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.date_visit }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.tariff?.title }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div v-if="skipass.name">{{ skipass.name }}</div>
                                    <div v-if="skipass.phone">{{ skipass.phone }}</div>
                                    <div v-if="skipass.email">{{ skipass.email }}</div>
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.sum }}
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ skipass.payed ? '+' : '-' }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <Pagination class="mt-6" :links="skipasses.links"/>

                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
