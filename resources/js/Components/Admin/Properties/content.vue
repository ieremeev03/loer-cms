<script setup>
import { ref, watch } from 'vue';
import { component as CKEditor} from '@ckeditor/ckeditor5-vue';
import InputLabel from '@/Components/InputLabel.vue';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image'
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';


const editorData = ref(props.modelValue || '')

const editorConfig = ref(
    {
        height: '300px',
        plugins: [
            Base64UploadAdapter,
            Essentials,
            Autoformat,
            Bold,
            Italic,
            BlockQuote,
            Heading,
            Link,
            List,
            Paragraph,
            SimpleUploadAdapter,
            ImagePlugin,
            ImageCaptionPlugin,
            ImageToolbarPlugin,
            ImageStylePlugin,
            ImageUploadPlugin,
            SourceEditing,
        ],
        toolbar: [
            'undo',
            'redo',
            'heading',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'imageUpload',
            '|',
            'sourceEditing',
        ],
        link: {
            addTargetToExternalLinks: true
        },
        image: {
            toolbar: [ 'toggleImageCaption', 'imageTextAlternative', 'imageStyle:wrapText', 'imageStyle:breakText'],
            upload: {
                types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg', 'svg+xml']
            },
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        },
        simpleUpload: {
            uploadUrl: route('ckeditor.upload')+'?_token='+ document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
    }
)

watch(() => props.modelValue, (first, second) => {
    editorData.value = first
});

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
        <CKEditor :editor="ClassicEditor"
            v-model="editorData"
            :config="editorConfig"
            class="rounded"
        ></CKEditor>
        </div>
</template>
