<template>
    <section class="section__how">
        <div class="container section__how-container">
            <div class="section__how-block" v-bind:class="'section__'+properties.left_color">
                <h2 class="section__services-title">{{properties.left_title}}</h2>
                <div class="section__services-text" v-html="properties.left_content"></div>
            </div>
            <div class="section__how-block" v-bind:class="'section__'+properties.right_color">
                <h2 class="section__services-title">{{properties.right_title}}</h2>
                <div class="section__services-text" v-html="properties.right_content"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HowBlock",
    props: ['title', 'content', 'properties' ],
}
</script>

<style scoped>

</style>
