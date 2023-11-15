<template>
    <section class="section__top section__live">
        <div class="section__top-bg">
            <picture>
                <img :src="properties.photo.value" alt="">
            </picture>
        </div>
        <div class="container section__top-container">
            <h1 class="section__top-title">{{title}}</h1>
            <div class="section__top-text" v-html="content">
            </div>
            <a v-if="properties.link.value" :href="properties.link.value" class="button__more button__more-mt">{{properties.link_text.value}}</a>
        </div>
    </section>
</template>

<script>
export default {
    name: "LiveBlockTextTop",
    props: ['title', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
