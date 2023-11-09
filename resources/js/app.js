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

const appName = import.meta.env.VITE_APP_NAME || 'Такман';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('VueDatePicker', VueDatePicker)
            .component('vSelect', vSelect)
            .component('vMaska', vMaska)
            .directive("maska", vMaska)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
