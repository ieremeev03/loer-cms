<template>
    <section class="section__slider container">
        <div class="section__slider-content">
            <h2 v-if="!properties.title_prop" class="section__slider-slide-title">{{title}}</h2>
            <h2 v-if="properties.title_prop" class="section__slider-slide-title">{{ properties.title_prop }}</h2>
            <div  v-if="!properties.content" class="section__slider-slide-descr" v-html="content"></div>
            <div v-if="properties.content" class="section__slider-slide-descr" v-html="properties.content"></div>
        </div>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :speed="1200"
            :autoplay="true"
            navigation
            :pagination="{ clickable: true }"
            :mousewheel="false"
            :grabCursor="false"
            :loop="false"

            class="swiper-wrapper"

        >
            <swiper-slide v-for="item in items" href="#" class="swiper-slide section__slider-slide">

                <a v-if="item.fields.video.value" class="section__slider-slide-img">
                    <video class="section__services-slide-video" autoplay loop muted playsinline>
                        <source :src="item.fields.video.value" type="video/mp4">
                        <!-- Добавьте дополнительные источники видео для поддержки разных браузеров -->
                    </video>
                </a>
                <a v-else class="section__slider-slide-img">
                    <picture>
                        <img :src="item.fields.photo.value" alt="">
                    </picture>
                </a>
            </swiper-slide>

        </swiper>
        <div class="swiper-pagination"></div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Pagination, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    props: ['title', 'content', 'link', 'link_text', 'color', 'items','properties' ],
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style scoped>

</style>
