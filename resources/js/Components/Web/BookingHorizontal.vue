<template>
    <section class="section__services"  v-bind:class="'section__'+properties.color.value">
        <div class="container section__services-container">
            <h2 v-if="!properties?.title_prop?.value" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__services-title">{{ properties?.title_prop?.value }} </h2>

            <div v-if="!properties?.content?.value" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content?.value" class="section__services-text" v-html="properties?.content?.value"></div>
            <div :id="properties?.id_widget?.value"></div>
        </div>
    </section>
</template>

<style>
.BookingSearchForm_control {
    padding: 0 !important;
}

/*.BookingSearchForm_control.BookingSearchForm_inline .BookingSearchForm_controlsWrapper {
    justify-content: flex-start !important;
}

.WidgetApp_container button {
    background-color: transparent !important;
}*/

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
        id: this.props.properties?.uuid_block.value,
        type: "horizontalBlock",
        form: {
            container: this.props.properties?.id_widget.value,
        }
    }, "https://bookonline24.ru/");
});
</script>
