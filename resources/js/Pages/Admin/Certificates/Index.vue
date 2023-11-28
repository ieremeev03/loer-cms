<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';


defineProps({
    certificates: Array,
});
</script>

<template>
    <AdminLayout title="Серификаты">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Сертификаты
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto">
                <div class="">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">#</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Дата</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">ФИО получателя</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Сумма</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Данные покупателя</th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="certificate in certificates">
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900 sm:pl-0">C-{{ certificate.id }}</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900 sm:pl-0">{{ certificate.created_at }}</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900 sm:pl-0">{{ certificate.recipient }}</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900 sm:pl-0">{{ $filters.format_money(certificate.nominal) }}₽</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div>{{ certificate.buyer }}</div>
                                    <div>{{ certificate.email }}</div>
                                    <div>{{ certificate.phone }}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
