<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    disciplines: Array,
    instructor: Object,
});
</script>

<template>
    <Head title="Бронирование без выбором инструктора" />
    <Reservation
        :disciplines="disciplines"
        :instructor="instructor"
    ></Reservation>
</template>