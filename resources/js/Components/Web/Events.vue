<template>
    <section class="section__services section__afishes"  v-bind:class="'section__'+properties?.color.value">
        <div class="container section__services-container">
            <h2 v-if="!properties?.title_prop?.value" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__services-title">{{ properties?.title_prop?.value }} </h2>

            <div v-if="!properties?.content?.value" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content?.value" class="section__services-text" v-html="properties?.content?.value"></div>
            <a v-if="properties?.link.value" :href="properties?.link.value" class="button__more">{{properties?.link_text.value}}</a>

        </div>

    </section>
    <slider-h-wd :items="items"/>
</template>

<script>

import SliderHWd from "@/Components/Web/Slider-h-wd.vue";

export default {
    components: {SliderHWd},
    props: ['title_block', 'content', 'link', 'link_text', 'color', 'items','properties' ],
    name: "Events"
}
</script>

<style scoped>

</style>
