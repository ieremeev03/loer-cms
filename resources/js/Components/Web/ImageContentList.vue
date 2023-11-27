<template>
    <section class="section__events">
        <div class="container  section__events-container">
            <div v-for="(item, index) in items" class="section__events-row"
                 :class="{'section__events-row-reverse': index % 2}">


                    <div class="section__events-item-img">
                        <picture>
                            <source :srcset="item.fields.photo?.value" type="image/avif">
                            <img :src="item.fields.photo?.value" alt="">
                        </picture>
                    </div>

                <div class="section__events-item-text section__white">
                    <h2 class="section__services-title">{{item.fields.title?.value}}</h2>
                    <div class="section__services-text" v-html="item.fields.description?.value"> </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>


export default {
    props: [
        'items'
    ],

};
</script>

<style scoped>

</style>
