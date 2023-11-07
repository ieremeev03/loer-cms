<style > /* don't add "scoped"; note that this will also globalize the CSS for all editors in your project */
.ck-editor__editable {
    min-height: 200px;
}
</style>

<script setup>

import { ref, watch } from 'vue';
import { component as CKEditor} from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorData = ref(props.modelValue || '')
const editorConfig = ref(
    {
        toolbar: [ 'heading', '|', '|','bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
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
});

const content = ref ()
const emit = defineEmits(['update:modelValue'])

</script>

<template>
    <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig" class="rounded"></CKEditor>
</template>


