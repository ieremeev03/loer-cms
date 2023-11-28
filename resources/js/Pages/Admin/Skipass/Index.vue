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
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    #
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    Дата покупки
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    Операция
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    Ски-пасс
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Дата
                                    катания
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Тариф
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    Контакты
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Сумма
                                </th>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">
                                    Оплата
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="skipass in skipasses.data"
                                :class="{'bg-gray-100': !skipass.payed, 'bg-green-100': skipass.payed}">
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    S-{{ skipass.id }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.created_at }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.operation === 1 ? 'Покупка' : 'Пополнение' }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.skipass }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.date_visit }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.tariff?.title }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    <div v-if="skipass.name">{{ skipass.name }}</div>
                                    <div v-if="skipass.phone">{{ skipass.phone }}</div>
                                    <div v-if="skipass.email">{{ skipass.email }}</div>
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
                                    {{ skipass.sum }}
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">
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
