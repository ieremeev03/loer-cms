<template>
    <section class="section__services" v-bind:class="'section__'+properties.color?.value">
        <div class="container section__services-container content__block">

            <h2 class="section__services-title">{{ properties.title_prop?.value }} </h2>

            <div :class="{ desctop_price: properties.photo?.value }">
                <div v-if="!properties.content?.value" class="section__services-text" v-html="content"></div>
                <div v-if="properties.content?.value" class="section__services-text" v-html="properties.content?.value"></div>
                <a v-if="properties.link?.value" :href="properties.link?.value" class="button__more">{{properties.link_text?.value}}</a>
            </div>

        </div>
    </section>

    <section v-if="properties.photo?.value" class="section__map container mobile_price" >
        <a href="" data-fancybox="" data-caption="" class="section__map-img">
            <picture>
                <source :srcset="properties.photo?.value" type="image/avif">
                <img :src="properties.photo?.value" alt="">
            </picture>
        </a>
    </section>
</template>

<script>
export default {
    props: ['title_block', 'content', 'link', 'link_text', 'properties' ],
    name: "ContentBlock"
}
</script>

<style scoped>

</style>
