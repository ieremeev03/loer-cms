<template>
    <AdminLayout>
        <Head title = "Административная панель"></Head>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="">
                    <VueDatePicker
                        class="mb-4"
                        format="dd/MM/yyyy"
                        v-model="date"
                        :enable-time-picker="false"
                        position="left"
                        placeholder="Дата"
                        @update:model-value="handleSelectDate"
                        @cleared="clearDate"
                        locale="ru"
                        select-text="Подтвердить"
                        cancel-text="Закрыть"
                    ></VueDatePicker>

                    <div class="inline-block min-w-full  align-middle  border-2">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr class="divide-x divide-gray-200">
                                <th></th>
                                <th v-for="time in tableHeader" scope="col" class="py-3.5 px-4 text-center text-sm font-semibold text-gray-900">{{ time }}</th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="row in tableData" class="divide-x divide-gray-200">
                                <td class="whitespace-nowrap p-4 text-sm font-medium text-gray-900"><a :href="'/admin/instructors/edit/'+row.id">{{ row.name }}</a></td>
                                <td v-for="time in row.times"
                                    :class="{'bg-gray-500': time.active === false, 'bg-green-500': time.active === true, 'bg-red-500': time.selected === true}"
                                    class="relative py-4 text-center text-sm font-medium text-white"
                                >
                                    {{ time.discipline }}
                                    <div v-if="time.order?.payed">
                                        <hr>
                                        <div>Человек: {{ time.order.count }}</div>
                                        <div>{{ time.order.email }} {{ time.order.phone }} {{ time.order.name }}</div>
                                    </div>
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

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
import { ref } from 'vue';

const pages = usePage().props.pages;

const date = ref(new Date());
let selectedDate = ref(null);

const tableHeader = ref([]);
const tableData = ref([]);


const handleSelectDate = (modelData) => {
    if (!modelData) {
        return
    }
    let d = modelData.getDate();
    let m = modelData.getMonth() + 1;
    let y = modelData.getFullYear();
    selectedDate = y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    getTable();
}

const getTable = () => {
    axios.post(route('get-table'), {
        selected_date: selectedDate,
    })
        .then(response => {
            tableData.value = response.data.instructors;
            tableHeader.value = response.data.header;
        })
        .catch(error => {
            console.log(error);
        });
}

computed: {
    handleSelectDate(new Date())
}

onMounted: {
    window.setInterval(() => {
        getTable();
    }, 60000)
}

const clearDate = () => {
    tableData.value = null;
    tableHeader.value = null;
}


</script>


