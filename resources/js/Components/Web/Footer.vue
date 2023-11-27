<template>
    <footer class="footer ">

        <div class="container section__how-container">
            <div class="section__how-block section__black">
                <a href="/" class="footer__logo">

                </a>
                <div class="footer__text">
                    <div class="footer__text-srcs">
                        <a :href="item.link" class="footer__text-src" v-for="item in menu.items" :key="item.id">{{item.title}}</a>
                    </div>
                    <div class="footer__text-text">© ООО «Движение» 2023. Все права защищены. <br>
                        Разработано <a href="https://www.loer.pro" class="loer" target="_blank">LOER</a>
                    </div>

                </div>
            </div>
            <div class="section__how-block section__white ">
                <h2 class="section__services-title">Контакты</h2>
                <div class="section__services-text">
                    <p><a href="https://yandex.ru/maps/?rtext=~58.353239,57.772856">618206, Пермский край, г. Чусовой, ул. Мира, 17, оф. 401</a></p>
                    <p> <a  href="mailto:takman59@mail.ru">takman59@mail.ru</a></p>
                    <p><a href="tel:+7 (342) 256-95-83"></a>+7 (342) 256-95-83</p>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
import LoadScript, {loadScript} from "vue-plugin-load-script";
export default {
    name: "Footer",
    props: [
    'menu'
    ],
}

</script>



<style scoped>
.loer {
    color: #fff;
    text-decoration: underline;
}
</style>
