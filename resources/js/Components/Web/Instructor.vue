<template>
    <Reservation
        :instructor="properties.instructor?.model[0]"
    ></Reservation>

    <section class="section__events instructors">
    <div class="container  section__events-container">
        <div  class="section__events-row">
            <a href="" class="section__events-item">
                <div class="section__events-item-img">
                    <picture>
                        <img :src="properties.instructor?.model[0]?.image" alt="">
                    </picture>
                </div>
            </a>
            <div class="section__events-item-text section__white">
                <h2 class="section__services-title">{{properties.instructor?.model[0]?.name}}</h2>
                <div class="section__services-text" v-html="properties.instructor?.model[0]?.description"></div>
            </div>
        </div>
    </div>
    </section>

</template>

<script>


import Reservation from "@/Components/Reservation.vue";

export default {
    components: {Reservation},
    props: [
        'items',
        'properties'
    ],

};


</script>

<style scoped>

</style>
