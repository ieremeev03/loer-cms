<template>
    <Head :title="page.title">
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
         <link rel="stylesheet" href="assets/css/style.css">

    </Head>
    <PageLayout>
        <div v-if="show" class="preloader" >
            <img src="assets/img/logo.svg" alt="">
        </div>
        <main class="main">
            <template v-for="block in blocks">
               <component
                    :is="block.type"
                    :title_block="block.title"
                    :properties="block.properties"
                    :content="block.content"
                    :items="block.items"
                >
                </component>
            </template>
        </main>
    </PageLayout>

</template>

<script>
import {Link, Head} from '@inertiajs/vue3'
import PageLayout from "@/Layouts/PageLayout.vue";
import SliderTop from "@/Components/Web/Slider-top.vue";
import SliderText from "@/Components/Web/Slider-text.vue";
import Hotels from "@/Components/Web/Hotels.vue";
import SliderH from "@/Components/Web/Slider-h.vue";
import ContentBlock from "@/Components/Web/ContentBlock.vue";
import MapBlock from "@/Components/Web/MapBlock.vue";
import HowBlock from "@/Components/Web/HowBlock.vue";
import LiveBlockTextTop from "@/Components/Web/LiveBlock-TextTop.vue";
import LiveBlockTextBottom from "@/Components/Web/LiveBlock-TextBottom.vue";
import Photo from "@/Components/Web/Photo.vue";
import Poster from "@/Components/Web/Poster.vue";
import Events from "@/Components/Web/Events.vue";
import Reserv from "@/Components/Web/Reserv.vue";
import SkiPass from "@/Components/Web/SkiPass.vue";
import Instructors from "@/Components/Web/Instructors.vue";
import Instructor from "@/Components/Web/Instructor.vue";
import TourBlock from "@/Components/Web/TourBlock.vue";
import ImageContentList from "@/Components/Web/ImageContentList.vue";
import FileListContent from "@/Components/Web/FileListContent.vue";
import Certificate from "@/Components/Web/Certificate.vue";
import BookingHorizontal from "@/Components/Web/BookingHorizontal.vue";

export default {
    name: "Page",
    props: [
       'page',
       'menus',
       'blocks'
    ],
    components: {
        BookingHorizontal,
        ImageContentList,
        Certificate,
        Reserv,
        SkiPass,
        FileListContent,
        Instructors,
        TourBlock,
        Instructor,
        Poster,
        Events,
        Photo,
        LiveBlockTextTop,
        LiveBlockTextBottom,
        Hotels,
        HowBlock,
        MapBlock,
        ContentBlock,
        SliderH,
        SliderTop,
        SliderText,
        PageLayout,
        Link,
        Head
    },
    data() {
        return {
            show: true,
        }
    },

    mounted(){
        setTimeout(() => {
            this.show = false
        }, 700)
    },
    methods: {
        showToggle(){

        }
    },

}

</script>



<style scoped>

</style>
