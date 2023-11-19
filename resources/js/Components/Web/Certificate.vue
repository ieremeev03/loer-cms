<script setup>
import {reactive} from 'vue';

const props = defineProps({
    title_block: String,
    content: String,
    properties: Object
});

const data = reactive({
    popup: false,
    agree: false,
    cert: {
        'buyer': null,
        'recipient': null,
        'phone': null,
        'email': null,
        'nominal': 500,
    },
    nominals: [
        500,
        1000,
        1500,
        2000,
        5000
    ],
});

const purchase = () => {
    data.error = {};
    validateForm();
    if (Object.values(data.error).length) {
        return
    }

    axios.post(route('buy-certificate'), {
        buyer: data.cert.buyer,
        recipient: data.cert.recipient,
        phone: data.cert.phone,
        email: data.cert.email,
        nominal: data.cert.nominal,
    })
        .then(response => {
            if (response.data.success) {
                window.location.href = response.data.url;
            }
        })
        .catch(error => {
            data.error = error.response.data.errors;
            console.log(error);
        });
}

const validateForm = () => {
    let reg_phone = /^\(?[+]?(\d{1})[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

    if (reg_phone.test(data.cert.phone) !== true) {
        data.error.phone = 'Поле является обязательным для заполнения';
    }

    let reg_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.cert.email) {
        data.error.email = 'Поле является обязательным для заполнения';
    }
    else if (reg_email.test(data.cert.email) !== true) {
        data.error.email = 'Неверный формат e-mail';
    }

    if (!data.cert.buyer) {
        data.error.buyer = 'Поле является обязательным для заполнения';
    }

    if (!data.cert.recipient) {
        data.error.recipient = 'Поле является обязательным для заполнения';
    }

    if (!data.nominals.includes(data.cert.nominal)) {
        data.error.nominal = 'Выберите номинал';
    }

    if (!data.agree) {
        data.error.agree = true;
    }
}

</script>

<style>
.hidden {
    display: none;
}
</style>

<template>
    <section class="section__services section__black">
        <div class="container section__services-container content__block">
            <h2 v-if="!properties?.title_prop?.value" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__services-title">{{ properties?.title_prop?.value }} </h2>

            <div v-if="!properties?.content?.value" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content?.value" class="section__services-text" v-html="properties?.content?.value"></div>
            <a href="#" @click="data.popup = true"  class="button__more">{{properties?.link_text?.value}}</a>
        </div>

    </section>


    <div id="popup-gift" class="popup" :class="{'_open': data.popup === true}">
        <div class="popup__body">
            <div class="popup__content section__white">
                <div class="popup__cancel" @click="data.popup = false; data.error = null">
                    <img src="assets/img/cancel.svg" alt="cancel">
                </div>
                <div class="popup__content-tabs">
                    <div data-tab="tab1" class="popup__content-tab popup__content-tab-active">Покупка подарочного <br> сертификата</div>
                </div>
                <div class="popup__content-tabs-content">

                    <div id="tab1" class="popup__content-tab-content popup__content-tab-content-active ">

                        <div class="popup__content-tab-content-form">
                            <div class="popup__content-tab-content-form-row">
                                <div class="popup__content-tab-content-form-row-left">Ваши ФИО</div>
                                <div class="popup__content-tab-content-form-row-input-inner">
                                    <div v-if="data.error?.buyer"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.buyer }}
                                    </div>
                                    <div v-if="data.error?.buyer"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.buyer }}
                                    </div>
                                    <input v-model="data.cert.buyer" type="text" class="popup__content-tab-content-form-row-input" placeholder="Иванов Иван Иванович">
                                </div>
                            </div>

                            <div class="popup__content-tab-content-form-row">
                                <div class="popup__content-tab-content-form-row-left">ФИО получателя сертификата</div>
                                <div class="popup__content-tab-content-form-row-input-inner">
                                    <div v-if="data.error?.recipient"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.recipient }}
                                    </div>
                                    <div v-if="data.error?.recipient"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.recipient }}
                                    </div>
                                    <input v-model="data.cert.recipient" type="text" class="popup__content-tab-content-form-row-input" placeholder="Иванов Иван Иванович">
                                </div>
                            </div>

                            <div class="popup__content-tab-content-form-row">
                                <div class="popup__content-tab-content-form-row-left" >Телефон</div>
                                <div class="popup__content-tab-content-form-row-input-inner popup__content-tab-content-form-row-input-inner-tel">
                                    <div class="popup__content-tab-content-form-row-input-error">Поле является <br> обязательным для заполнения</div>
                                    <div class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile">Поле является обязательным для заполнения</div>
                                    <div v-if="data.error?.phone"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.phone }}
                                    </div>
                                    <div v-if="data.error?.phone"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.phone }}
                                    </div>
                                    <input v-model="data.cert.phone"
                                           placeholder="Телефон"
                                           type="text"
                                           class="popup__content-tab-content-form-row-input"
                                           v-maska data-maska="+7 ### ###-##-##" >
                                </div>
                            </div>

                            <div class="popup__content-tab-content-form-row">
                                <div class="popup__content-tab-content-form-row-left">E-mail</div>
                                <div class="popup__content-tab-content-form-row-input-inner">
                                    <div v-if="data.error?.email"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.email }}
                                    </div>
                                    <div v-if="data.error?.email"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.email }}
                                    </div>
                                    <input v-model="data.cert.email" type="text" class="popup__content-tab-content-form-row-input" placeholder="example@mail.com" >
                                </div>
                            </div>

                            <div class="popup__content-tab-content-form-row relative">
                                <div class="popup__content-tab-content-form-row-left">Стоимость сертификата </div>
                                <div class="popup__content-tab-content-form-choose">
                                    <div v-if="data.error?.nominal"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.nominal }}
                                    </div>
                                    <div v-if="data.error?.nominal"
                                         class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                        {{ data.error.nominal }}
                                    </div>
                                    <label v-for="nominal in data.nominals"
                                           class="popup__content-tab-content-form-choose-item"
                                           :class="{'popup__content-tab-content-form-choose-item-active': nominal === data.cert.nominal}">
                                        <input v-model="data.cert.nominal" type="radio" :value="nominal" class="hidden">
                                        {{ $filters.format_money(nominal) }}₽
                                    </label>
                                </div>
                            </div>

                            <div class="popup__content-tab-content-form-row-input-inner custom__chexbox-inner">
                                <div class="custom-checkbox">
                                    <input v-model="data.agree" type="checkbox"  id="checkbox_cert" />
                                    <label for="checkbox_cert"></label>
                                </div>
                                <div class="custom-checkbox-text">Согласен(а) с правилами приобретения и использования сертификата</div>
                                <div v-if="data.error?.agree"
                                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                    Необходимо ознакомиться и согласиться с правилами
                                </div>
                                <div v-if="data.error?.agree"
                                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                    Необходимо ознакомиться и согласиться с правилами
                                </div>
                            </div>
                            <div class="popup__content-tab-content-form-row-last">
                                <button  @click="purchase" class="button__more">Оплатить </button>
                                <div class="popup__content-tab-content-form-row-last-banks">
                                    <div class="popup__content-tab-content-form-row-last-bank">
                                        <img src="/assets/img/sber.png" alt="" height="20">
                                    </div>
                                    <div class="popup__content-tab-content-form-row-last-bank">
                                        <img src="/assets/img/mir.png" alt="" height="20">
                                    </div>
                                    <div class="popup__content-tab-content-form-row-last-bank">
                                        <img src="/assets/img/visa.png" alt="" height="20">
                                    </div>
                                    <div class="popup__content-tab-content-form-row-last-bank">
                                        <img src="/assets/img/mastercard.png" alt="" height="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
