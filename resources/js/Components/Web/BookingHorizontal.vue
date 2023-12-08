<template>
    <section class="section__services"  v-bind:class="'section__'+properties.color.value">
        <div class="container section__services-container">
            <h2 v-if="!properties?.title_prop?.value" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__services-title">{{ properties?.title_prop?.value }} </h2>

            <div v-if="!properties?.content?.value" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content?.value" class="section__services-text" v-html="properties?.content?.value"></div>
            <div id="WidgetIdBooking"></div>
        </div>
    </section>
</template>

<style>
.BookingSearchForm_control {
    padding: 0 !important;
}
</style>

<script setup>

const props = defineProps({
    title: String,
    properties: Array,
    content: String,
});

(function(k,o,t,e,l){
    l = document.createElement("script");
    l.type = "text/javascript";
    l.src = "https://bookonline24.ru/widget.js";
    l.async = !0;
    l.onload = l.onreadystatechange = function() {
        e = this.readyState;
        !o && (!e || e === "complete") && (o = 1) && k();
    };
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(l, t);
})(function(){
    HotelWidget.init({
        id: "aaba9e02-6081-4a8e-a6b3-baf1e48db86c",
        type: "horizontalBlock",
        form: {
            container: "WidgetIdBooking",
        }
    }, "https://bookonline24.ru/");
});
</script>
