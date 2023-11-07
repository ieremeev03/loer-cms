<template>
    <section class="section__services" v-bind:class="'section__'+properties.color">
        <div class="container section__services-container">
            <h2 class="section__services-title">{{ title }}</h2>
            <div class="section__services-text" v-html="content"></div>
            <a :href="properties.link" class="button__more">{{properties.link_text}}</a>
        </div>
    </section>
    <slider-h-wd :items="items"/>
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
