<template>
    <section class="section__how-to section__white">
        <div class="section__how-to-container container">
            <h2 v-if="!properties?.title_prop?.value" class="section__how-to-title">{{ title }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__how-to-title">{{ properties?.title_prop?.value }} </h2>

            <div class="section__how-to-items" v-for="item in items">
                <div class="section__how-to-item">
                    <div class="section__how-to-item-left">
                        <h3 class="section__how-to-item-left-title">{{item.fields.title.value}}</h3>
                        <div class="section__how-to-item-icon section__how-to-item-icon-first section__how-to-item-icon-mobile">
                            <img :src="item.fields.photo?.value" alt="">
                        </div>

                        <div class="section__how-to-item-left-text" v-html="item.fields.description?.value">
                        </div>
                        <a v-if="item.fields.link?.value" :href="item.fields.link?.value" class="button__more button__more-mt">{{item.fields.text_button?.value}}</a>
                    </div>
                    <div class="section__how-to-item-icon section__how-to-item-icon-first">
                        <img :src="item.fields.photo?.value" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'content', 'link', 'link_text', 'properties', 'items'],
    name: "TourBlock"
}
</script>

<style scoped>

</style>
