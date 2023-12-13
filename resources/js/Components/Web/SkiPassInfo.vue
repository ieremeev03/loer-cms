<script setup>
import { reactive } from 'vue';

const props = defineProps({
    result: String,
    form: String,
});

const data = reactive({
    skipass: '',
    error: {},
    info: [],
    result: false,
});

const getInfo = () => {
    data.info = [];
    data.error = {};
    data.result = false;
    validateForm();
    if (Object.values(data.error).length) {
        return
    }

    axios.post(route('skipass-info'), {
        skipass: data.skipass,
    })
        .then(response => {
            data.info = response.data;
            data.result = true;
        })
        .catch(error => {
            console.log(error);
            data.error = error.response.data.errors;
            data.result = false;
        });
}

const validateForm = () => {
    let reg_skipass = /^([0-9A-Za-z]{4})[- ]?([0-9A-Za-z]{4})$/;
    if (!data.skipass) {
        data.error.skipass = 'Поле является обязательным для заполнения';
    }
    else if (reg_skipass.test(data.skipass) !== true) {
        data.error.skipass = 'Неверный формат скипасса';
    }
}
</script>

<template>
    <div class="popup__content-tab-content-form skipass__info">
        <div class="popup__content-tab-content-form-row gap-x-5 items-start" style="column-gap: 20px;">
            <div class="popup__content-tab-content-form-row-left">Номер карты</div>
            <div class="popup__content-tab-content-form-row-input-inner">


                <div v-if="data.error?.skipass"
                     class="popup__content-tab-content-form-row-input-error popup__content-tab-content-form-row-input-error-mobile popup__content-tab-content-form-row-input-error-active ">
                    {{ data.error.skipass }}
                </div>

                <input v-model="data.skipass" type="text"
                       v-maska data-maska="********"
                       class="popup__content-tab-content-form-row-input"
                       placeholder="XXXXXXXX">
            </div>
            <button @click="getInfo" class="button__more" >Проверить</button>
        </div>

        <div class="min-h-[100px]">
            <template v-if="Object.values(data.error).length">

            </template>
            <template v-else>
                <div v-if="!data.info.length && data.result">Информация не найдена</div>
                <div v-if="data.info.length && data.result" class="scroll__info">
                    <table class="">
                        <thead>
                        <tr>
                            <th class="" style="min-width: 160px;">Информация</th>
                            <th class="">Остаток</th>
                            <th class="">Действует&nbsp;с</th>
                            <th class="">Действует&nbsp;по</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="row in data.info">
                            <td class="py-2 pr-4">{{ row.title }}</td>
                            <td class="py-2 pr-4">{{ row.amount }}</td>
                            <td class="py-2 pr-4">{{ row.from }}</td>
                            <td class="py-2">{{ row.to }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </template>
        </div>
    </div>
</template>
