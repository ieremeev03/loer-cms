<template>
    <section class="section__slider container section__slider-no-slide">

        <div class=" section__slider-slide">
            <a href="" class="section__slider-slide-img">
                <picture>
                    <img :src="properties.photo.value" alt="">
                </picture>
            </a>
            <div class="section__slider-slide-text">
                <h2 class="section__slider-slide-title">{{title}}</h2>
                <div class="section__slider-slide-descr">{{content}}</div>

                <a v-if="properties.link.value" :href="properties.link.value" class="button__more">{{properties.link_text.value}}</a>
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: "ImageContentBlock",
    props: ['title', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
