<template>
    <AdminLayout>
        <Head title = "Административная панель"></Head>
        <div class="py-12 ">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <h2 class="text-lg font-medium text-black-50">Редактирвоание инструктора</h2>
                <div class="">
                    <div v-if="instructor.error" class="rounded-md bg-red-50 p-4 mb-2">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-red-800">{{ instructor.error }}</h3>
                            </div>
                        </div>
                    </div>
                    <div v-if="instructor.success" class="rounded-md bg-green-50 p-4 mb-3">
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
                    <div class="mb-2">


                        <InputLabel for="name" value="Имя" />
                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="instructor.name"
                            autofocus
                            autocomplete="name"
                        />

                    </div>
                    <div class="mb-2">

                        <InputLabel  value="Дисциплины" />
                        <div v-for="discipline in disciplines">
                            <label><input  type="checkbox" v-model="discipline.selected" class="mr-2">{{ discipline.name }}</label>
                        </div>
                    </div>



                    <PrimaryButton @click="save" >Сохранить</PrimaryButton>

                    <div v-if="instructor.id" class="mt-4">
                        <VueDatePicker
                            format="dd/MM/yyyy"
                            v-model="date"
                            :enable-time-picker="false"
                            position="left"
                            placeholder="Дата"
                            locale="ru"
                            @update:model-value="handleSelectDate"
                            @cleared="clearDate"
                            select-text="Подтвердить"
                            cancel-text="Закрыть"
                        ></VueDatePicker>
                    </div>

                    <div v-if="instructor.times" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-2">
                        <table class="min-w-full divide-y divide-gray-300">
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="item in instructor.times">
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">{{ item.start }} - {{ item.end }}</td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    <input type="checkbox" v-model="item.active" :disabled="item.selected === true">
                                </td>
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                    <span v-if="item.discipline">Забронировано: {{ item.discipline }}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-if="instructor.error" class="rounded-md bg-red-50 p-4 mb-2">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-sm font-medium text-red-800">{{ instructor.error }}</h3>
                            </div>
                        </div>
                    </div>
                    <div v-if="instructor.success" class="rounded-md bg-green-50 p-4 mb-3">
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

                    <div v-if="instructor.times" class="mt-2 space-x-6">
                        <PrimaryButton @click="save" >Сохранить</PrimaryButton>

                        <a :href="route('instructors')"
                           class="text-sm font-semibold text-gray-900"
                        >Отмена</a>
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
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
const props = defineProps({
    instructor: Object,
    disciplines: Object,
});

const date = ref(null);

let selectedDate = null;

const handleSelectDate = (modelData) => {
    if (!modelData) {
        return
    }
    let d = modelData.getDate();
    let m = modelData.getMonth() + 1;
    let y = modelData.getFullYear();
    selectedDate = y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    let instructor_id = props.instructor.id

    axios.post(route('instructor.schedule'), {
        selected_date: selectedDate,
        instructor_id: instructor_id
    })
        .then(response => {
            props.instructor.times = response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

const clearDate = () => {
    selectedDate = null;
    props.instructor.times = null;
}

const save = () => {
    props.instructor.error = null;
    let active_times = null;
    if (props.instructor?.times) {
        active_times = props.instructor.times.filter((item) => item.active === true);
    }
    axios.post(route('instructor.save'), {
        selected_date: selectedDate,
        active_times: active_times,
        instructor_id: props.instructor.id,
        instructor_name: props.instructor.name,
        disciplines: props.disciplines,
    })
        .then(response => {
            if (!props.instructor.id && response.data.id) {
                window.location.replace(route('instructor.edit', response.data.id));
            }
            props.instructor.success = true;
        })
        .catch(error => {
            props.instructor.error = error.response.data.message;
        });
}



</script>


