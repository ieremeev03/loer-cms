<template>
    <section v-for="item in items" class="section__slider container section__slider-no-slide section__slider-no-slide-acom swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div class=" section__slider-slide">
            <a href="" class="section__slider-slide-img">
                <picture>
                    <img src="assets/img/acom2.webp" alt="">
                </picture>
            </a>
            <div class="section__slider-slide-text">
                <h2 class="section__slider-slide-title">Сова</h2>
                <div class="section__slider-slide-descr">6 мест, от 2300₽ за сутки</div>
                <a href="" class="button__more">Подробнее</a>
            </div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </section>
</template>

<script>
export default {
    name: "Hotels",
    props: ['items' ],
}
</script>

<style scoped>

</style>
