<template>
    <section class="section__slider container section__slider-no-slide swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div class=" section__slider-slide">
            <a href="" class="section__slider-slide-img">
                <picture>
                    <img :src="properties.photo" alt="">
                </picture>
            </a>
            <div class="section__slider-slide-text">
                <h2 v-if="!properties.title_prop" class="section__slider-slide-title">{{ title }} </h2>
                <h2 v-if="properties.title_prop" class="section__slider-slide-title">{{ properties.title_prop }} </h2>

                <div v-if="!properties.content" class="section__slider-slide-descr" v-html="content"></div>
                <div v-if="properties.content" class="section__slider-slide-descr" v-html="properties.content"></div>

                <a v-if="properties.link" :href="properties.link" class="button__more">{{properties.link_text}}</a>
            </div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></section>
</template>

<script>
export default {
    name: "LiveBlockTextBottom",
    props: ['title', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
