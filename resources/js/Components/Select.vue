<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: false,
    },
    parents: {
        type: Object,
        required: true,
    },

});

defineEmits(['update:modelValue']);
const input = ref(null);

defineExpose({ focus: () => input.value.focus() });
</script>


<template>
    <select  class="border-gray-300 rounded-md shadow-sm"
                 :value="modelValue"
                 @input="$emit('update:modelValue', $event.target.value)"
                 ref="input"
        >
        <option value="null" selected>Не указан</option>
        <option v-for="parent in parents" v-bind:value="parent.id">{{ parent.title }}</option>
    </select>
</template>
