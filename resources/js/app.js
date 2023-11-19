import './bootstrap';


import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-select/dist/vue-select.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import VueDatePicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select';
import { vMaska } from "maska"
import Certificate from "./Components/Web/Certificate.vue";

const appName = import.meta.env.VITE_APP_NAME || 'Такман';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('VueDatePicker', VueDatePicker)
            .component('vSelect', vSelect)
            .component('vMaska', vMaska)
            .mixin({ components: {  Certificate } })
            .directive("maska", vMaska)

        app.config.globalProperties.$filters = {
            format_money: val => parseFloat(val).toLocaleString(),
        }

        app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

