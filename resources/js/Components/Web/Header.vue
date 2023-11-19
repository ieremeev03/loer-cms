<template>
    <header class="header ">
        <div class="container header__container">
            <div class="header__left">
                <a href="/" class="header__logo">
                    <img src="assets/img/logo.svg" alt="">
                </a>
                <nav class="header__nav">
                    <ul>
                        <li v-for="item in menu.items" :key="item.id">
                            <a :href="item.link"  :class="item.params">{{item.title}}</a>
                        </li>
                    </ul>
                    <div class="header__nav-mobile">
                        <button type="button" id="btn-buy" class="button__buy">Купить онлайн</button>
                        <div class="header__socials">
                            <a href="" class="header__social">
                                <img src="assets/img/vk.svg" alt="">
                            </a>
                            <a href="" class="header__social">
                                <img src="assets/img/wa.svg" alt="">
                            </a>
                            <a href="" class="header__social">
                                <img src="assets/img/inst.svg" alt="">
                            </a>
                        </div>
                    </div>
                </nav>
                <div class="header__socials">
                    <a href="https://vk.com/takman" class="header__social" target="_blank">
                        <img src="assets/img/vk.svg"  alt="">
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79581478338" class="header__social" target="_blank">
                        <img src="assets/img/wa.svg"  alt="">
                    </a>
                    <a href="https://www.instagram.com/takmansnow" target="_blank" class="header__social">
                        <img src="assets/img/inst.svg" alt="">
                    </a>
                </div>
                <button type="button" id="btn-buy" class="button__buy">Купить онлайн</button>

            </div>

                <div class="menu__icon">
                    <span></span>
                </div>

        </div>
    </header>
</template>

<script >
import { usePage } from '@inertiajs/vue3'
const page = usePage()
let showMenu = false;
export default {
    name: "Header",
    props: [
        'menu'
    ],
    mounted() {

        const menuIcon = document.querySelector(".menu__icon");
        const headMenu = document.querySelector(".header__nav");
        const menuItems = document.querySelectorAll(".header__nav ul li a");
        if(menuIcon){
            menuIcon.addEventListener("click", function (e){
                menuIcon.classList.toggle("_active");
                headMenu.classList.toggle("_actived");
                document.body.classList.toggle("_lock");
            });
            menuItems.forEach(function (item) {
                item.addEventListener("click", function (e){
                    menuIcon.classList.remove("_active");
                    headMenu.classList.remove("_actived");
                    document.body.classList.remove("_lock");
                });
            });
            // Добавляем обработчик клика на весь документ
            document.addEventListener("click", function (e) {
                // Проверяем, был ли клик вне меню и иконки
                if (!menuIcon.contains(e.target) && !headMenu.contains(e.target)) {
                    menuIcon.classList.remove("_active");
                    headMenu.classList.remove("_actived");
                }
            });
        }
    }
}


window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    // Проверяем, прокрутилась ли страница более чем на 50px
    if (window.scrollY > 50) {
        header.classList.add("header__active");
    } else {
        header.classList.remove("header__active");
    }
});
</script>

<style scoped>

</style>
