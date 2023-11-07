<template>
    <section class="section__slider container section__slider-no-slide swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div class=" section__slider-slide">
            <a href="" class="section__slider-slide-img">
                <picture>
                    <img :src="properties.photo" alt="">
                </picture>
            </a>

        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></section>
</template>

<script>
export default {
    name: "Photo",
    props: ['title', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
