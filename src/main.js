import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import '@primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {Button, Menu, SelectButton, Drawer, Avatar, Card, Toolbar, Tooltip, Menubar, Popover} from "primevue";

const primeUiLicenseKey= import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { present: Material }, license: primeUiLicenseKey})
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-drawer', Drawer)
    .component('pv-menu', Menu)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-menubar', Menubar)
    .component('pv-popover', Popover)
    .directive('tooltip', Tooltip)
    .mount('#app')

    .mount('#app')
