<script setup>
import {reactive, ref, onMounted} from 'vue';
import MessageSuccess from "@/Components/Part/MessageSuccess.vue";
import MessageError from "@/Components/Part/MessageError.vue";


const props = defineProps({
    title_block: String,
    content: String,
    properties: Object
});

const result = ref();
const formReq = ref();

onMounted(() => {
   let uri = window.location.search.substring(1);
   let params = new URLSearchParams(uri);
   result.value = params.get("result");
    formReq.value = params.get("form");
    data.popup = (['error', 'success'].includes(result.value) && formReq.value === 'cert')
    console.log(data)
})

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
    loader: false,
});

const purchase = () => {
    data.error = {};
    validateForm();
    if (Object.values(data.error).length) {
        return
    }
    data.loader = true;

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
            data.loader = false;
            data.error = error.response.data.errors;
            console.log(error);
        });
}

const validateForm = () => {
    let reg_phone = /^\(?[+]?(\d{1})[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

    if (!data.cert.phone) {
        data.error.phone = 'Поле является обязательным для заполнения';
    }
    else if (reg_phone.test(data.cert.phone) !== true) {
        data.error.phone = 'Неверный формат телефона'
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

function closeModal() {
    if(result.value === 'success' || result.value === 'error') {
        window.location.href = window.location.pathname;
    }
    data.popup = false;
    data.error = null
}

</script>

<style>
.hidden {
    display: none;
}
</style>

<template>
    <section class="section__services" v-bind:class="'section__'+properties.color?.value">
        <div class="container section__services-container content__block">
            <h2 v-if="!properties?.title_prop?.value" class="section__services-title">{{ title_block }} </h2>
            <h2 v-if="properties?.title_prop?.value" class="section__services-title">{{ properties?.title_prop?.value }} </h2>

            <div v-if="!properties?.content?.value" class="section__services-text" v-html="content"></div>
            <div v-if="properties?.content?.value" class="section__services-text" v-html="properties?.content?.value"></div>
            <a href="#" @click="data.popup = true; data.loader = false;"  class="button__more">{{properties?.link_text?.value}}</a>
        </div>

    </section>


    <div id="popup-gift" class="popup" :class="{'_open': data.popup === true}" >
        <div class="popup__body" v-click-outside="closeModal">
            <div class="popup__content section__white">
                <div class="popup__cancel" @click="closeModal">
                    <img src="assets/img/cancel.svg" alt="cancel">
                </div>
                <div class="popup__content-tabs">
                    <div data-tab="tab1" class="popup__content-tab popup__content-tab-active">Покупка подарочного <br> сертификата</div>
                </div>
                <div class="popup__content-tabs-content">

                    <div id="tab1" class="popup__content-tab-content popup__content-tab-content-active ">

                        <div v-if="result === 'success'">
                            <MessageSuccess />
                        </div>
                        <div v-else-if="result === 'error'">
                            <MessageError />
                        </div>
                        <div v-else class="popup__content-tab-content-form">

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
                                <div class="popup__content-tab-content-form-row-left" >Ваш телефон</div>
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
                                <div class="popup__content-tab-content-form-row-left">Ваш E-mail</div>
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

                            <div class="popup__content-tab-content-form-row-input-inner custom__chexbox-inner">
                                <div class="custom-checkbox">
                                    <input v-model="data.agree" type="checkbox"  id="checkbox_cert" />
                                    <label for="checkbox_cert"></label>
                                </div>
                                <div class="custom-checkbox-text">Согласен(а) с <a href="/info" class="underline">правилами</a> пользования услугами курорта</div>
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
                                <button v-if="!data.loader"  @click="purchase" class="button__more" :disabled="data.loader">Оплатить </button>
                                <span v-if="data.loader" class="button__more">Ждите...</span>
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
