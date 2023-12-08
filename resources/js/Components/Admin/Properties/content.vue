<script setup>
import { ref, watch } from 'vue';
import { component as CKEditor} from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputLabel from '@/Components/InputLabel.vue';

const editorData = ref(props.modelValue || '')

const editorConfig = ref(
    {
        height: "300px",
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    }
)

watch(editorData, () => {
    emit('update:modelValue', editorData.value)
})



const props = defineProps({
    modelValue: {
        type: String,
    },
    title: {
        type: String,
    }
});

const content = ref ()
const emit = defineEmits(['update:modelValue', 'update:editorData'])

</script>

<template>
    <div>
        <InputLabel for="title" :value="title" />
        <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig" class="rounded"></CKEditor>
        </div>
</template>
