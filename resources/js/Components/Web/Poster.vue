<template>
    <section class="section__services" style="height: 100vh" v-bind:class="'section__'+properties.color">
        <div class="container section__services-container">
            <h2 v-if="!properties?.title_prop" class="section__services-title">{{ title }} </h2>
            <h2 v-if="properties?.title_prop" class="section__services-title">{{ properties?.title_prop }} </h2>

            <div v-if="!properties?.content" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content" class="section__services-text" v-html="properties?.content"></div>
            <a v-if="properties?.link" :href="properties?.link" class="button__more">{{properties?.link_text}}</a>
        </div>
        <slider-h :items="items"/>
    </section>

</template>

<script>
import SliderH from "@/Components/Web/Slider-h.vue";

export default {
    components: {SliderH},
    props: ['title', 'content', 'link', 'link_text', 'color', 'items','properties' ],
    name: "Poster"
}
</script>

<style scoped>

</style>
