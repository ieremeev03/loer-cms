<template>
    <section class="section__map container">
        <a href="" data-fancybox="" data-caption="" class="section__map-img">
            <picture>
                <source :srcset="properties.photo.value" type="image/avif">
                <img :src="properties.photo.value" alt="">
            </picture>
        </a>
    </section>
</template>

<script>
export default {
    name: "Photo",
    props: ['title_block', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
