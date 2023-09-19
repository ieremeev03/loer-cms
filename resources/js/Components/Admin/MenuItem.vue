<template>

    <li>
        <Link :href="`/pages/${id}/edit`" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{title}}

        </Link>

        <ul v-if="children.length" id="dropdown-example" class="text-xs" >
            <li v-for="child in children">
                <Link :href="`/pages/${child.id}/edit`" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >- {{child.title}}</Link>
            </li>
        </ul>
    </li>


</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    title: {
        type: String,
    },
    id: {
        type: Number,
    },
    children: {
        type: Object,
    },

});

</script>

<style scoped>

</style>
