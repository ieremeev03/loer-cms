<template>
    <Reservation

    ></Reservation>

</template>

<script setup>

import {ref} from "vue";
import Reservation from "@/Components/Reservation.vue";

const props = defineProps({
    title: String,
    properties: Array,
    content: String,
    items: Array
});

const disciplines = ref([]);


const getDisciplines = () => {
    axios.get(route('get-disciplines'), {
    })
        .then(response => {
            console.log(response.data)
            disciplines.value = response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

computed: {
    //getDisciplines()
}



</script>

<style scoped>

</style>
