<template>
    <div class="section__services-swiper section__afishes">
        <swiper
            :modules="modules"
            :slidesPerView="'auto'"
            :space-between="0"
            :speed="Math.random() * (1100 - 800) + 800"

            :freeMode="true"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :mousewheel="false"
            :grabCursor="false"
            @mouseenter="freezeSlider"
            @mouseleave="unfreezeSlider"
            @init="onSwiper"
            :loop="false"
            class="swiper-wrapper">


            <swiper-slide v-for="item in items"  class="swiper-slide section__services-slide">

                    <div class="section__services-slide-img">
                        <picture>
                            <img :src="item.fields.photo.value" alt="">
                        </picture>
                    </div>

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
import {FreeMode, Navigation} from 'swiper/modules';
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
    methods: {
        onSwiper(sw) {
            this.swiper = sw;
        },
        freezeSlider() {
            if (this.swiper && !this.isFrozen) {
                this.swiper.autoplay.stop();
                this.swiper.params.autoplay.delay = 0;
                this.swiper.params.speed = 0;
                this.isFrozen = true;
            }
        },
        unfreezeSlider() {
            if (this.swiper && this.isFrozen) {
                this.swiper.params.autoplay.delay = Math.random() * (1100 - 800) + 800; // Back to default
                this.swiper.params.speed = Math.random() * (1100 - 800) + 800; // Back to default
                this.swiper.autoplay.start();
                this.isFrozen = false;
            }
        },
    },
    setup() {
        const prev = ref(null);
        const next = ref(null);
        return {
            prev,
            next,
            modules: [FreeMode,Navigation],
        };
    },
};
</script>

<style scoped>

</style>
