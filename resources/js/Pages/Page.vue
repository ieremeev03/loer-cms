<template>
    <Head :title="page.title">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="shortcut icon" href="assets/img/logo.svg" type="image/x-icon">
        <meta name="description" content="Takman">
        <meta name="keywords" content="Takman">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="#">
        <meta property="og:title" content="Takman">
        <meta property="og:description" content="Takman">
        <meta property="og:image" content="assets/img/logo.svg">
        <meta name="twitter:title" content="Takman">
        <meta name="twitter:description" content="Takman">
        <meta name="twitter:image" content="assets/img/logo.svg">
    </Head>
    <PageLayout>
        <main class="main">
            <template v-for="block in blocks">
               <component
                    :is="block.type"
                    :title="block.title"
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
export default {
    name: "Page",
    props: [
       'page',
       'menus',
       'blocks'
    ],

    components: {
        Reserv,
        SkiPass,
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
    }
}


</script>



<style scoped>

</style>
