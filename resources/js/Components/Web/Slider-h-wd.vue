<template>
    <div class="section__services-swiper">
        <swiper
            :modules="modules"
            :slidesPerView="'auto'"
            :space-between="0"
            :speed="Math.random() * (1500 - 1100) + 1100"
            :autoplay="true"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :mousewheel="false"
            :grabCursor="false"
            :loop="false"
            class="swiper-wrapper">


            <swiper-slide v-for="item in items"  class="swiper-slide section__services-slide">
                <a href="#">
                    <div class="section__services-slide-img">
                        <picture>
                            <img :src="item.fields.photo.value" alt="">
                        </picture>
                    </div>
                </a>
            </swiper-slide>

        </swiper>
        <div class="section__services-swiper-nav">
            <div ref="prev" class="section__services-swiper-nav-prev"></div>
            <div ref="next" class="section__services-swiper-nav-next"></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    props: [
       'items'
    ],
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            prev,
            next,
            modules: [Navigation, Autoplay],
        };
    },
};
</script>

<style scoped>

</style>
