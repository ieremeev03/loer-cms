<script setup>
import { ref, reactive, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import MessageSuccess from "@/Components/Part/MessageSuccess.vue";
import MessageError from "@/Components/Part/MessageError.vue";

const props = defineProps({
    instructor: {
        type: Object,
        default: null
    },
});

const closeModal = () => {
    data.popup = false;
    data.error = null;
    router.get(router.page.url.split('?')[0]);
}

const disciplines = ref([]);
const date = ref();
const result = ref();
const formReq = ref();

const data = reactive({
    error: {},
    selectedDate: null,
    selectedCount: {id: 1, label: "1 человек" },
    selectedDiscpline: disciplines[0],
    selectedInstructor: props.instructor?.id ?? null,
    selectedInstructorName: props.instructor?.name ?? null,
    instructors: null,
    agree: false,
    times: [],
    counts: [
                {id: 1, label: "1 человек" },
                {id: 2, label: "2 человека" },
                {id: 3, label: "3 человека" },
            ],
    price: 0,
    sum: 0,
    popup: (['error', 'success'].includes(result.value) && formReq.value === 'reserv') ? true: false,
    loader: false,
})

const form = reactive({
    'name': null,
    'phone': null,
    'email': null,
})


watch(data, function (val) {
    if (val?.times) {
        calculateSum();
    }
    if (val?.selectedInstructor) {
        data.selectedInstructorName = props.instructor ? props.instructor.name : val.instructors.find((instructor) => instructor.id === val.selectedInstructor)?.name;
    }
});

const clearDate = () => {
    data.selectedDate = null;
    data.instructors = [];
    data.times = [];
    data.sum = 0;
}

const getDisciplines = () => {
    axios.get(route('get-disciplines'), {
    })
        .then(response => {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            disciplines.value = response.data.disciplines;
            result.value = params.get("result");
            formReq.value = params.get("form");

            data.selectedDiscpline = disciplines.value[0]
            data.popup = (['error', 'success'].includes(result.value) && formReq.value === 'reserv')

        })
        .catch(error => {
        });
}

const selectDate = (modelData) => {
    clearDate();
    if (!modelData) {
        return
    }
    let d = modelData.getDate();
    let m = modelData.getMonth() + 1;
    let y = modelData.getFullYear();
    data.selectedDate = y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);

    getInstructors();
};

const calculateSum = () => {
    if (data.price && data.times) {
        let count = data.times.filter((time) => time.selected === true).length;
        data.sum = data.price[data.selectedCount['id']] * count;
    }
}

const selectCount = () => {
    calculateSum();
}

const selectedDiscpline = () => {
    if (!props.instructor) {
        data.sum = 0;
        data.times = [];
        getInstructors();
    }
}

const getInstructors = () => {
    if (props.instructor) {
        getTimes();
    } else {
        data.selectedInstructor = 0;
        axios.post(`/get-instructors`, {
            selected_date: data.selectedDate,
            discpline: data.selectedDiscpline.id,
        })
        .then(response => {
            data.instructors = response.data.instructors;
            data.price = response.data.price;
        })
        .catch(error => {
        });
    }
}

const getTimes = () => {
    axios.post(`/get-times`, {
        selected_date: data.selectedDate,
        instructor_id: data.selectedInstructor,
    })
    .then(response => {
        data.times = response.data.schedule;
        data.price = response.data.price;
    })
    .catch(error => {
    });
}

const validateForm = () => {
    let reg_phone = /^\(?[+]?(\d{1})[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;
    if (!form.phone) {
        data.error.phone = 'Поле является обязательным для заполнения';
    }
    else if (reg_phone.test(form.phone) !== true) {
        data.error.phone = 'Неверный формат телефона';
    }


    let reg_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
        data.error.email = 'Поле является обязательным для заполнения';
    }
    else if (reg_email.test(form.email) !== true) {
        data.error.email = 'Неверный формат e-mail';
    }

    if (!form.name) {
        data.error.name = 'Поле является обязательным для заполнения';
    }

    if (!data.agree) {
        data.error.agree = true;
    }
}

const addOrder = () => {
    data.error = {};
    validateForm();
    if (Object.values(data.error).length) {
        return
    }

    data.loader = true;

    let selectedTime = data.times
        .filter((time) => time.selected === true)
        .map(i => i['id']);

    axios.post(`/add-order`, {
        name: form.name,
        phone: form.phone,
        email: form.email,
        date: data.selectedDate,
        discipline_id: data.selectedDiscpline?.id,
        instructor_id: data.selectedInstructor,
        selected_count: data.selectedCount['id'],
        time_ids: selectedTime,
    })
        .then(response => {
            data.error = null;
            if (response.data.success) {
                window.location.href = response.data.url;
            }

        })
        .catch(error => {
            data.loader = false;
            data.error = error.response.data.errors;
            if (data.error.dublicate) {
                let instructor = data.selectedInstructor;
                getInstructors();
                data.selectedInstructor = instructor;
                getTimes();
            }
        });
}



mounted: {
    getDisciplines()
}


</script>

<style scoped>



.vs__selected {
    display: flex;
    align-items: center;
    background-color: var(--vs-selected-bg);
    border: var(--vs-selected-border-width) var(--vs-selected-border-style) var(--vs-selected-border-color);
    border-radius: var(--vs-border-radius);
    color: var(--vs-selected-color);

    margin: 0;
    padding: 0 0.25em;
    z-index: 0;
    font-feature-settings: "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}

.vs__dropdown-menu {

    font-feature-settings: "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}

.section__bron-row-input {
    background-color: transparent;
    color: #FFF;
    border-radius: 2px;
    border: 2px solid #FFF;
    height: 54px;
    outline: 0;
    padding-left: 40px !important;
}

.section__bron-row-input::placeholder {

    font-feature-settings: "liga" off;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: #FFF;
    opacity: 1; /* Firefox */
}

.dp__input_icon {
    color: #FFF;
    opacity: 1; /* Firefox */
}
.popup__cancel {
    z-index: 1;
}
.section__bron .dp__main {
    width: 100%;
    max-width: 180px;
}
.section__bron .v-select {
    width: 100%;
    max-width: 180px;
}
.section__bron .vs--single .vs__selected {
    color: #fff;
    opacity: 1 !important;
}
.vs__selected {
    height: 100% !important;
}
.section__bron .vs__dropdown-toggle {
    line-height: 24px;
    border-radius: 2px;
    width: 100%;
    border: 2px solid #FFF;
    color: #fff;
    height: 54px;
    padding: 0 10px;
}
.section__bron-row .vs__dropdown-menu {
    background: #181F26;
    border: 2px solid #FFF;
    color: #fff;
}
.section__bron-row .vs__dropdown-option--highlight {
    background: #181F26;
}

.dp__active_date {

}

.hidden {
    display: none;
}
</style>

<template>
    <section class="section__services section__bron section__black" >
        <div class="container section__services-container">
            <h2 class="section__services-title">Бронирование <br> инструктора</h2>
            <form action="#" class="section__bron-row">
                <VueDatePicker
                    format="dd/MM/yyyy"
                    v-model="date"
                    :enable-time-picker="false"
                    position="left"
                    placeholder="Дата"
                    input-class-name="section__bron-row-input"
                    @update:model-value="selectDate"
                    @cleared="clearDate"
                    locale="ru"
                    :min-date="new Date()"
                    auto-apply
                >
                </VueDatePicker>

                <v-select v-model="data.selectedCount"
                    :options="data.counts"
                    :clearable="false"
                    selected="index === 0"
                    @option:selected="selectCount"
                    :searchable="false"

                ></v-select>

                <v-select v-model="data.selectedDiscpline"
                    :options="disciplines"
                    selected="index === 0"
                    @option:selected="selectedDiscpline"
                    :clearable="false"
                    :searchable="false"
                ></v-select>
            </form>



            <div v-if="data.instructors && data.instructors.length" class="section__bron-instruktors-block">

                <h3 class="section__bron-instruktors-block-title">Доступные инструкторы</h3>
                <div class="section__bron-instruktors-block-instruktors">
                    <label v-for="instructor in data.instructors"
                        class="section__bron-instruktors-block-instruktor"
                        :class="{'section__bron-instruktors-block-instruktor-active': data.selectedInstructor === instructor.id}"
                    >

                        <input type="radio" @change="getTimes" :value="instructor.id" :checked="instructor.id === data.selectedInstructor" v-model="data.selectedInstructor" class="hidden">
                        <div class="section__bron-instruktors-block-instruktor-img">
                            <img :src="instructor.image" alt="">
                        </div>
                        <div class="section__bron-instruktors-block-instruktor-name">{{ instructor.name }}</div>
                    </label>
                </div>
            </div>

            <div v-if="!props.instructor && data.selectedDate && !data.instructors.length" class="section__bron-instruktors-block">
                <h3 class="section__bron-instruktors-block-title">Нет доступных инструкторов</h3>
            </div>

            <div v-if="props.instructor && data.selectedDate && !data.times.length" class="section__bron-instruktors-block">
                <h3 class="section__bron-instruktors-block-title">Нет доступного времени</h3>
            </div>


            <div v-if="data.times && data.times.length" class="section__bron-instruktors-block">
                <h3 class="section__bron-instruktors-block-title">Выберите время</h3>
                <div class="section__bron-instruktors-block-times">
                    <label v-for="item in data.times" class="section__bron-instruktors-block-time" :class="{'section__bron-instruktors-block-time-active': item.selected}">
                        <input type="checkbox" v-model="item.selected" class="hidden">
                        {{ item.start_time }} - {{ item.end_time }}
                    </label>
                </div>
            </div>
            <div v-if="data.sum" class="section__bron-instruktors-block">
                <h3 class="section__bron-instruktors-block-title">Цена</h3>
                <div class="section__bron-instruktors-block-price"><span>{{ data.sum }}</span> ₽</div>
                <button @click="data.popup = true" class="button__more">Оплатить</button>

            </div>
        </div>
    </section>

    <div id="popup" class="popup" :class="{'_open': data.popup === true}">
        <div class="popup__body">
            <div class="popup__content section__white">
                <div class="popup__cancel" @click="closeModal()">
                    <img src="/assets/img/cancel.svg" alt="cancel">
                </div>
            <div class="popup__content-tabs-content">
                    <div class="popup__content-tab-content-title mb-5">Бронирование инструктора</div>

                <div v-if="result === 'success'">
                    <MessageSuccess />
                </div>
                <div v-else-if="result === 'error'">
                    <MessageError />
                </div>
                <div v-else class="popup__content-tab-content-form">

                <div class="popup__content-tab-content-form-row">
                            <div class="popup__content-tab-content-form-row-left">ФИО</div>
                            <div class="popup__content-tab-content-form-row-input-inner">
                                <div v-if="data.error?.name" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active">{{ data.error.name }}</div>
                                <div v-if="data.error?.name" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active">{{ data.error.name }}</div>
                                <input v-model="form.name" type="text" class="popup__content-tab-content-form-row-input" placeholder="Иванов Иван Иванович">
                            </div>
                        </div>

                        <div class="popup__content-tab-content-form-row">
                            <div class="popup__content-tab-content-form-row-left" >Телефон</div>
                            <div class="popup__content-tab-content-form-row-input-inner popup__content-tab-content-form-row-input-inner-tel">
                                <div v-if="data.error?.phone" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active">{{ data.error.phone }}</div>
                                <div v-if="data.error?.phone" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active">{{ data.error.phone }}</div>
                                <input v-model="form.phone" v-maska data-maska="+7 ### ###-##-##" placeholder="Телефон"  type="text" class="popup__content-tab-content-form-row-input" >
                            </div>
                        </div>

                        <div class="popup__content-tab-content-form-row">
                            <div class="popup__content-tab-content-form-row-left">E-mail</div>
                            <div class="popup__content-tab-content-form-row-input-inner">
                                <div v-if="data.error?.email" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active">{{ data.error.email }}</div>
                                <div v-if="data.error?.email" class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active">{{ data.error.email }}</div>
                                <input v-model="form.email" type="text" class="popup__content-tab-content-form-row-input" placeholder="example@mail.com" >
                            </div>
                        </div>


                        <div class="popup__content-tab-content-form-row">
                            <div class="popup__content-tab-content-form-row-left">Инструктор</div>
                            <div class="popup__content-tab-content-form-row-text">{{ data.selectedInstructorName }}</div>
                        </div>

                        <div class="popup__content-tab-content-form-row">
                            <div class="popup__content-tab-content-form-row-left">Цена</div>
                            <div class="popup__content-tab-content-form-row-text">{{ data.sum }}₽</div>
                        </div>

                        <div class="popup__content-tab-content-form-row-input-inner custom__chexbox-inner">
                            <div class="custom-checkbox">
                                <input v-model="data.agree" type="checkbox" :id="'checkbox'+props.tab"/>
                                <label :for="'checkbox'+props.tab"></label>
                            </div>
                            <div class="custom-checkbox-text">Согласен(а) с <a href="/info" class="underline">правилами</a> пользования услугами курорта
                            </div>
                            <div v-if="data.error?.agree" style="height: 23px"
                                 class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-active ">
                                Необходимо ознакомиться и согласиться с правилами
                            </div>
                            <div v-if="data.error?.agree" style="height: 23px"
                                 class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                                Необходимо ознакомиться и согласиться с правилами
                            </div>
                        </div>

                        <div v-if="data.error?.dublicate" class="popup__content-tab-content-apply">
                            <div class="popup__content-tab-content-apply-icon">
                                <img src="/assets/img/error.svg" alt="">
                            </div>
                            <div class="popup__content-tab-content-apply-text">
                                {{ data.error.dublicate }}
                            </div>
                        </div>

                        <div class="popup__content-tab-content-form-row-last">
                            <button v-if="!data.loader" @click="addOrder" class="button__more" :disabled="!data.sum || data.loader">Оплатить</button>
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
</template>
