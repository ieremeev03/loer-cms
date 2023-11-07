<script setup>
import { onMounted, ref } from 'vue';
import InputLabel from '@/Components/InputLabel.vue';
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    list: {
        type: Object,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }

});

defineEmits(['update:modelValue']);
const input = ref(null);

defineExpose({ focus: () => input.value.focus() });
</script>


<template>
    <div>
        <InputLabel for="title" :value="title" />
        <select  class="border-gray-300 rounded-md shadow-sm w-full"
                 :value="modelValue"
                 @input="$emit('update:modelValue', $event.target.value)"
                 ref="input"
        >
            <option  value>Не указан</option>
            <option v-for="(item, index) in list" v-bind:value="index">{{ item }}</option>
        </select>
    </div>

</template>
