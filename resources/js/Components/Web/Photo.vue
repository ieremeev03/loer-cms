<template>
    <section class="section__map container">
        <a href="" data-fancybox="" data-caption="" class="section__map-img">
            <picture>
                <source :srcset="properties.photo1?.value" media="(min-width: 320px) and (max-width: 480px)">
                <source :srcset="properties.photo2?.value" media="(min-width: 481px) and (max-width: 767px)">
                <source :srcset="properties.photo3?.value" media="(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)">
                <source :srcset="properties.photo4?.value" media="(min-width: 768px) and (max-width: 1024px)">
                <source :srcset="properties.photo5?.value" media="(min-width: 1025px) and (max-width: 1280px)">
                <source :srcset="properties.photo?.value" media="(min-width: 1281px)">
                <img loading="lazy" :src="properties.photo?.value" alt="">
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
