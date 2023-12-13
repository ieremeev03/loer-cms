<script setup>
import {ref, reactive} from 'vue';
import MessageSuccess from "@/Components/Part/MessageSuccess.vue";
import MessageError from "@/Components/Part/MessageError.vue";

const props = defineProps({
    tab: Number,
    result: String,
    form: String,
});

const date = ref();

const data = reactive({
    selectedDate: null,
    isChild: {'id': '0', 'label': 'Взрослый'},
    ages: [
        {'id': '0', 'label': 'Взрослый'},
        {'id': '1', 'label': 'Ребенок от 5 до 12 лет включительно'}
    ],
    selectedTariff: null,
    tariffs: [],
    agree: false,
    name: null,
    phone: null,
    email: null,
    skipass: null,
    error: {},
    cardPrice: null,
    loader: false,
});

mounted: {
    axios.post(route('get-card-price'))
    .then(response => {
        data.cardPrice = response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

const selectDate = (modelData) => {
    if (!modelData) {
        return
    }
    let d = modelData.getDate();
    let m = modelData.getMonth() + 1;
    let y = modelData.getFullYear();
    data.selectedDate = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    getTariffs();
};

const getTariffs = () => {
    if (data.selectedDate) {
        axios.post(route('get-tariffs'), {
            selected_date: data.selectedDate,
            is_child: data.isChild.id,
        })
            .then(response => {
                data.selectedTariff = null;
                data.tariffs = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        data.tariffs = [];
    }
}

const clearDate = () => {
    data.selectedDate = null;
}

const validateForm = () => {
    let reg_phone = /^\(?[+]?(\d{1})[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

    if (!data.phone) {
        data.error.phone = 'Поле является обязательным для заполнения';
    }
    else if (reg_phone.test(data.phone) !== true) {
        data.error.phone = 'Неверный формат телефона'
    }


    let reg_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
        data.error.email = 'Поле является обязательным для заполнения';
    }
    else if (reg_email.test(data.email) !== true) {
        data.error.email = 'Неверный формат e-mail';

    }

    if (props.tab == 1) {
        let reg_skipass = /^([0-9A-Za-z]{4})[- ]?([0-9A-Za-z]{4})$/;
        if (!data.skipass) {
            data.error.skipass = 'Поле является обязательным для заполнения';
        }
        else if (reg_skipass.test(data.skipass) !== true) {
            data.error.skipass = 'Неверный формат скипасса';
        }
    }

    if (!data.name && props.tab == 2) {
        data.error.name = 'Поле является обязательным для заполнения';
    }

    if (!data.agree) {
        data.error.agree = 'Необходимо ознакомиться и согласиться с правилами';
    }

    if (!data.selectedDate) {
        data.error.selectedDate = 'Поле является обязательным для заполнения';
    }

    if (!data.selectedTariff) {
        data.error.selectedTariff = 'Поле является обязательным для заполнения';
    }
}

const purchase = () => {
    data.error = {};
    validateForm();
    if (Object.values(data.error).length) {
        return
    }
    data.loader = true;

    if (props.tab == 1) {
        axios.post(route('topup-skipass'), {
            date_visit: data.selectedDate,
            is_child: data.isChild.id,
            phone: data.phone,
            email: data.email,
            skipass: data.skipass,
            tariff_id: data.selectedTariff?.id,
        })
            .then(response => {
                if (response.data.success) {
                    window.location.href = response.data.url;
                }
                //data.loader = false;
            })
            .catch(error => {
                data.loader = false;
                data.error = error.response.data.errors;
                console.log(error);
            });
    }

    if (props.tab == 2) {
        axios.post(route('create-skipass'), {
            date_visit: data.selectedDate,
            is_child: data.isChild.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
            tariff_id: data.selectedTariff?.id,
        })
            .then(response => {
                if (response.data.success) {
                    window.location.href = response.data.url;
                }
                //data.loader = false;
            })
            .catch(error => {
                data.loader = false;
                data.error = error.response.data.errors;
                console.log(error);
            });
    }
}
</script>

<template>
    <div v-if="props.result === 'success'">
        <MessageSuccess />
    </div>
    <div v-else-if="props.result === 'error'">
        <MessageError />
    </div>
    <div v-else class="popup__content-tab-content-form">

    <div class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">Возраст</div>
            <div class="popup__content-tab-content-form-row-input-inner-date">
                <v-select
                    v-model="data.isChild"
                    :options="data.ages"
                    :clearable="false"
                    @option:selected="getTariffs"
                    selected="index === 0"
                    :searchable="false"
                ></v-select>
            </div>
        </div>
        <div class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">Дата катания</div>
            <div class="popup__content-tab-content-form-row-input-inner-date">
                <div v-if="data.error?.selectedDate"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.selectedDate }}
                </div>
                <div v-if="data.error?.selectedDate"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.selectedDate }}
                </div>
                <VueDatePicker
                    format="dd.MM.yyyy"
                    v-model="date"
                    :enable-time-picker="false"
                    position="left"
                    placeholder="Выберите дату"
                    input-class-name="popup__content-tab-content-form-row-input"
                    @update:model-value="selectDate"
                    @cleared="clearDate"
                    locale="ru"
                    auto-apply
                    :min-date="new Date()"
                >
                </VueDatePicker>
            </div>
        </div>
        <div class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">Тариф</div>
            <div class="popup__content-tab-content-form-row-input-inner-date">
                <div v-if="data.error?.selectedTariff"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.selectedTariff }}
                </div>
                <div v-if="data.error?.selectedTariff"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.selectedTariff }}
                </div>
                <v-select
                    v-model="data.selectedTariff"
                    :options="data.tariffs"
                    :clearable="false"
                    selected="index === 0"
                    :searchable="false"
                    placeholder="Выберите тариф"
                    :disabled="data.tariffs.length === 0"
                ></v-select>
            </div>
        </div>
        <div  v-if="props.tab == 2" class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left"></div>
            <div class="popup__content-tab-content-form-row-input-inner-date"><span class="card_price">Стоимость карты</span> <span class="car_sum">(+{{ data.cardPrice?.price }}р)</span></div>
        </div>
        <div v-if="props.tab == 2" class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">ФИО владельца карты</div>
            <div class="popup__content-tab-content-form-row-input-inner">
                <div v-if="data.error?.name"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.name }}
                </div>
                <div v-if="data.error?.name"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.name }}

                </div>
                <input v-model="data.name" type="text" class="popup__content-tab-content-form-row-input"
                        placeholder="Иванов Иван Иванович">
            </div>

        </div>
        <div class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">Телефон</div>
            <div
                class="popup__content-tab-content-form-row-input-inner popup__content-tab-content-form-row-input-inner-tel">
                <div v-if="data.error?.phone"
                        class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.phone }}
                </div>
                <div v-if="data.error?.phone"
                        class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.phone }}
                </div>
                <input v-model="data.phone" v-maska data-maska="+7 ### ###-##-##"
                        placeholder="Телефон" type="text"
                        class="popup__content-tab-content-form-row-input">
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
                <input v-model="data.email" type="text"
                        class="popup__content-tab-content-form-row-input"
                        placeholder="example@mail.com">
            </div>
        </div>
        <div v-if="props.tab == 1" class="popup__content-tab-content-form-row">
            <div class="popup__content-tab-content-form-row-left">Номер карты ски-пасса</div>
            <div class="popup__content-tab-content-form-row-input-inner">
                <div v-if="data.error?.skipass"
                        class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.skipass }}
                </div>
                <div v-if="data.error?.skipass"
                        class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.skipass }}
                </div>
                <input v-model="data.skipass" type="text"
                        v-maska data-maska="********"
                        class="popup__content-tab-content-form-row-input"
                        placeholder="XXXXXXXX">
            </div>
        </div>
        <div class="popup__content-tab-content-form-row-input-inner custom__chexbox-inner">
            <div class="custom-checkbox">
                <input v-model="data.agree" type="checkbox" :id="'checkbox'+props.tab"/>
                <label :for="'checkbox'+props.tab"></label>
            </div>
            <div class="custom-checkbox-text">Согласен(а) с <a href="/info" class="underline">правилами</a> пользования услугами курорта
            </div>
            <div v-if="data.error?.agree"
                    class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                {{ data.error.agree }}
            </div>
            <div v-if="data.error?.agree"
                    class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                {{ data.error.agree }}
            </div>
        </div>
        <div v-if="data.error?.payment" class="popup__content-tab-content-apply">
            <div class="popup__content-tab-content-apply-icon">
                <img src="/assets/img/error.svg" alt="">
            </div>
            <div class="popup__content-tab-content-apply-text">
                {{ data.error.payment }}
            </div>
        </div>

        <div class="popup__content-tab-content-form-row-last">
            <button v-if="!data.loader"  @click="purchase" class="button__more" :disabled="data.loader">Оплатить</button>
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
</template>
