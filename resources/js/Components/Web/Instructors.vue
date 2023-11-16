<template>
    <section class="section__events instructors">
        <div class="container  section__events-container">
            <div v-for="(item, index) in items" class="section__events-row"
                 :class="{'section__events-row-reverse': index % 2}"
            >
                <a href="" class="section__events-item">
                    <div class="section__events-item-img">
                        <picture>
                            <img :src="item.image" alt="">
                        </picture>
                    </div>
                </a>
                <div class="section__events-item-text section__white">
                    <h2 class="section__services-title">{{item.name}}</h2>
                    <div class="section__services-text" v-html="item.description"></div>
                    <a :href="'/instructor/'+item.id" class="button__more">Забронировать</a>
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
