<script setup>
import {reactive} from 'vue';
import SkiPassTab from './SkiPassTab.vue';

const data = reactive({
    popup: false,
    tab: 1,
});
</script>

<style>
.popup__body .vs__dropdown-toggle {
    border: 1px solid #6b7280;
    height: 42px;
}

.popup__body .vs__dropdown-menu {
    border: 1px solid #6b7280;
}

.popup__content-tab-content-form-row-input,
.popup__body .vs__dropdown-toggle {
    border-color: #6b7280;
    border-radius: 0;
}
</style>

<template>

    <section class="section__services section__black">
        <div class="container section__services-container">
            <h2 class="section__services-title">Ски-пасс на весь сезон</h2>
            <div class="section__services-text">Если покупать ски-пасс сразу на весь сезон, <br> можно здорово сэкономить!!</div>
            <a href="#" @click="data.popup = true" class="button__more">Купить/Пополнить</a>
        </div>

    </section>


    <div id="popup" class="popup" :class="{'_open': data.popup === true}">
        <div class="popup__body">
            <div class="popup__content section__white">
                <div class="popup__cancel" @click="data.popup = false; data.error = null">
                    <img src="assets/img/cancel.svg" alt="cancel">
                </div>
                <div class="popup__content-tabs">
                    <div @click="data.tab = 1" class="popup__content-tab"
                         :class="{'popup__content-tab-active': data.tab == 1}">Пополнение
                    </div>
                    <div @click="data.tab = 2" class="popup__content-tab"
                         :class="{'popup__content-tab-active': data.tab == 2}">Покупка
                    </div>

                </div>
                <div class="popup__content-tabs-content">
                    <div class="popup__content-tab-content-title">ски-пасса</div>
                    <div v-show="data.tab == 1" class="popup__content-tab-content"
                         :class="{'popup__content-tab-content-active': data.tab == 1}">
                        <SkiPassTab :tab="1" />
                    </div>
                    <div v-show="data.tab == 2" class="popup__content-tab-content"
                         :class="{'popup__content-tab-content-active': data.tab == 2}">
                        <SkiPassTab :tab="2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
