
<script setup>
import Header from "@/Components/Web/Header.vue";
import Footer from "@/Components/Web/Footer.vue";
import {ref} from "vue";
const showAnimation = ref(true)

</script>

<style>
section {
    pointer-events: none;
}
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background: #181F26;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

}
</style>

<template>
    <div class="wrapper">
        <Header :menu="$page.props.menus['main']"/>

        <slot/>
        <!--Подвал-->
        <Footer :menu="$page.props.menus['bottom']"/>

    </div>
</template>
