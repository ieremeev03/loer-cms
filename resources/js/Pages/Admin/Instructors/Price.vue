<template>
    <AdminLayout>
        <Head title = "Административная панель"></Head>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h2 class="text-lg font-medium text-black-50">Цены</h2>

                <div class="">
                    <div class="inline-block min-w-full py-2 align-middle ">
                        <div v-if="data.error" class="rounded-md bg-red-50 p-4 mb-2">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h3 class="text-sm font-medium text-red-800">{{ data.error }}</h3>
                                </div>
                            </div>
                        </div>
                        <div v-if="data.success" class="rounded-md bg-green-50 p-4 mb-3">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <h3 class="text-sm font-medium text-green-800">Сохранено</h3>
                                </div>
                            </div>
                        </div>
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Инструктор</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Индивидуальное занятие (1 чел, 1 час)</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Групповое занятие (2 чел, 1 час)</th>
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900  ">Групповое занятие (3 чел, 1 час)</th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="day in [0,1]">
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  ">{{ day ? 'Выходные' : 'Будни' }}</td>
                                <template v-for="item in price">
                                    <td v-if="item.is_weekend === day"
                                        class="whitespace-nowrap p-4 text-sm font-medium text-gray-900  "
                                    >

                                        <TextInput

                                            type="number"
                                            class="mt-1 block w-full"
                                            v-model="item.price"
                                            autofocus
                                            required

                                        />


                                    </td>
                                </template>
                            </tr>
                            </tbody>
                        </table>
                        <PrimaryButton @click="save"

                        >Сохранить</PrimaryButton>
                    </div>

                </div>
            </div>
        </div>


    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, usePage, Link} from '@inertiajs/vue3';
import { reactive } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    price: Array,
});

const data = reactive({
    success: null,
    error: null,
});

const save = () => {
    data.success = null;
    data.error = null;

    axios.post(route('price.save'), {
        price: props.price,
    })
        .then(response => {
            data.success = true;
        })
        .catch(error => {
            data.error = error.response.data.message;
        });
}


</script>


