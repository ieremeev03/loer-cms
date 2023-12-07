<template>
    <div class="section__services-swiper">
        <swiper
            :modules="modules"
            :slidesPerView="'auto'"
            :space-between="0"
            :speed="Math.random() * (1100 - 800) + 800"
            :autoplay="true"
            :freeMode="true"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :mousewheel="false"
            :grabCursor="false"
            :loop="false"
            @mouseenter="freezeSlider"
            @mouseleave="unfreezeSlider"
            @init="onSwiper"
            class="swiper-wrapper">

            <swiper-slide v-for="item in items" @click="goToEvents(item.fields.link?.value)" class="swiper-slide section__services-slide">
                    <div class="section__services-slide-img">
                        <picture>
                            <img :src="item.fields.photo.value" alt="">
                        </picture>
                    </div>
                    <h3 class="section__services-slide-title">{{item.fields.title.value}}</h3>
                    <div class="section__services-slide-text" v-html="item.fields.description.value"></div>
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
import {FreeMode, Navigation, Autoplay} from 'swiper/modules';
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
            modules: [FreeMode,Navigation, Autoplay],
        };
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
        goToEvents: function (link) {
            if(link !== undefined && link!==null) {
                location.href='/'+link
            }
        }
    },
};
</script>

<style scoped>

</style>
