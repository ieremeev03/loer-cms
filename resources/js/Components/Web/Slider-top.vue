<template>
    <section class="section__slider container">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :speed="1200"
            navigation
            :autoplay="true"
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

                <div class="section__slider-slide-text">
                    <h1 class="section__slider-slide-title">{{item.fields.title.value}}</h1>
                    <div class="section__top-text" v-html="item.fields.description.value">

                    </div>
                    <a v-if="item.fields.text_button.value" :href="item.fields.link.value" class="button__more">{{item.fields.text_button.value}}</a>
                </div>
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
    props: [
        'items'
    ],
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination,Autoplay],
        };
    },
};
</script>

<style scoped>

</style>
