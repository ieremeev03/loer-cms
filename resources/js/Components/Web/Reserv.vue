<template>
    <Reservation

    ></Reservation>

</template>

<script setup>
import Reservation from "../../../../config/boards-main/resources/js/Components/Reservation.vue";
import {ref} from "vue";

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
