<template>
    <section class="section__services"  v-bind:class="'section__'+properties?.color">
        <div class="container section__services-container">
            <h2 v-if="!properties?.title_prop" class="section__services-title">{{ title }} </h2>
            <h2 v-if="properties?.title_prop" class="section__services-title">{{ properties?.title_prop }} </h2>

            <div v-if="!properties?.content" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content" class="section__services-text" v-html="properties?.content"></div>
            <a v-if="properties?.link" :href="properties?.link" class="button__more">{{properties?.link_text}}</a>

        </div>
        <slider-h-wd :items="items"/>
    </section>

</template>

<script>

import SliderHWd from "@/Components/Web/Slider-h-wd.vue";

export default {
    components: {SliderHWd},
    props: ['title', 'content', 'link', 'link_text', 'color', 'items','properties' ],
    name: "Events"
}
</script>

<style scoped>

</style>
