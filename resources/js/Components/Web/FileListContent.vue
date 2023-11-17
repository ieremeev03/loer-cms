<template>

    <section class="section__services section__white">
        <div class="container section__services-container">
            <h2 v-if="!properties.title_prop.value" class="section__services-title">{{ title }} </h2>
            <h2 v-if="properties.title_prop.value" class="section__services-title">{{ properties.title_prop.value }} </h2>
            <div class="section__rules-rules">
                <a v-for="item in items" :href="item.fields.file?.value" class="section__rules-rule rule-pdf">{{item.fields.title?.value}}
                </a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: [
        'properties', 'items'
    ],
    name: "FileList"

};
</script>

<style scoped>

</style>
