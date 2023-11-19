<script setup>
import {reactive, onMounted, ref} from 'vue';
import SkiPassTab from './SkiPassTab.vue';

const props = defineProps({
    title_block: String,
    content: String,
    properties: Object
});

const result = ref();
const formReq = ref();
const tab = ref();

onMounted(() => {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    result.value = params.get("result");
    tab.value = params.get("tab");
    formReq.value = params.get("form");
    data.popup = (['error', 'success'].includes(result.value) && formReq.value === 'skipass')
    data.tab = tab.value === 2 ? 2 : 1
    console.log(data)
})

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

    <section class="section__services" v-bind:class="'section__'+properties.color?.value">
        <div class="container section__services-container content__block">
            <h2 v-if="!properties?.title_prop" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop" class="section__services-title">{{ properties?.title_prop }} </h2>

            <div v-if="!properties?.content" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content" class="section__services-text" v-html="properties?.content"></div>
            <a href="#" @click="data.popup = true" class="button__more">{{properties?.link_text.value}}</a>
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
                        <SkiPassTab
                            :tab="1"
                            :result="result"
                            :form="formReq"
                        />

                    </div>
                    <div v-show="data.tab == 2" class="popup__content-tab-content"
                         :class="{'popup__content-tab-content-active': data.tab == 2}">
                        <SkiPassTab
                            :tab="2"
                            :result="result"
                            :form="formReq"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
