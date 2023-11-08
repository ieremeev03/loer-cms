<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    disciplines: Array,
});
</script>

<template>
    <Head title="Бронирование с выбором инструктора" />

    <SkiPass></SkiPass>

    <Reservation
        :disciplines="disciplines"
    ></Reservation>
</template>