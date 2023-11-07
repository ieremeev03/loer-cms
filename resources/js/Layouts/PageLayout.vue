<template>
    <div class="wrapper">
        <Header :menu="$page.props.menus['main']"/>
        <slot/>
        <!--Подвал-->
        <Footer :menu="$page.props.menus['bottom']"/>
        <VuePreloader
            background-color="#091a28"
            color="#ffffff"
            transition-type="fade-up"
            :loading-speed="25"
            :transition-speed="1400"

        ></VuePreloader>
    </div>
</template>

<script>
import Header from "@/Components/Web/Header.vue";
import Footer from "@/Components/Web/Footer.vue";
import {VuePreloader} from "vue-preloader";

export default {
    name: "PageLayout.vue",
    components: {Footer, Header, VuePreloader}
}
</script>

<style scoped>

</style>
