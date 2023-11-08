<script setup>
import { onMounted, ref } from 'vue';
import InputLabel from '@/Components/InputLabel.vue';
defineProps({
    modelValue: {
        type: String,
    },
    title: {
        type: String,

    },
    item_id: {
        type: Number,
    },
    field_id: {
        type: String,
    },
    field_value: {
        type: String,
    }
});

const emit = defineEmits(['files-dropped'])

const input = ref(null);

const loading = ref(false)

defineExpose({ focus: () => input.value.focus() });

function removeFile(field_value) {
    emit('update:modelValue', field_value)
}
function onFileChanged($event, item_id, field_id) {
    loading.value = true;
    let files = $event.target.files || $event.dataTransfer.files;
    console.log(files[0]);
    let formData = new FormData();
    formData.append("file", files[0]);
    axios.post('/fileUpload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        console.log(response.data, item_id, field_id)
        emit('files-dropped', [response.data, item_id, field_id])
        loading.value = false;
    })
        .catch(err => {
            console.log(err)
            loading.value = false;
        })



}

</script>

<template>
    <div class="">
        <InputLabel for="title" :value="title" />
        <div class="text-xs text-gray-400">Файл в формате MP4</div>
        {{field_value}}
        <div class="relative w-auto w-[300px] group" v-if="field_value && field_value!==''">
            <div class="absolute bottom-0 right-0 m-2 cursor-pointer ">
                <div class="bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600" @click="field_value=null; removeFile(field_value)">
                       <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                </div>
            </div>
        </div>

        <div class="flex flex-row items-center gap-2">
            <input  class="m-0 text-xs" v-if="field_value === null || field_value==='' "
                    type="file"
                    @change="onFileChanged($event, item_id, field_id)"
            >

            <div class="" v-if="loading">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        </div>



    </div>
</template>
<!--
@change="emit('files-dropped', [$event.target.files, item_id, field_id])"-->
