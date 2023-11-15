<template>
    <section class="section__services" v-bind:class="'section__'+properties.color">
        <div class="container section__services-container content__block">
            <h2 v-if="!properties.title_prop" class="section__services-title">{{ title }} </h2>
            <h2 v-if="properties.title_prop" class="section__services-title">{{ properties.title_prop }} </h2>

            <div v-if="!properties.content" class="section__services-text" v-html="content"></div>
            <div v-if="properties.content" class="section__services-text" v-html="properties.content"></div>
            <a v-if="properties.link" :href="properties.link" class="button__more">{{properties.link_text}}</a>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'content', 'link', 'link_text', 'properties' ],
    name: "ContentBlock"
}
</script>

<style scoped>

</style>
