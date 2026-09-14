import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import '@primeicons/primeincons.css';
import 'primerflex/primerflex.css';
import {Button, ButtonGroup, Menu, Popover, SelectButton, Toolbar, Tooltip} from "primevue";


createApp(App)
    .use(i18n)
    .use(PrimeVue,  {ripple: true, theme: {preset:Material}, license:primeUiLicenseKey})
    .component( 'pv-button', Button)
    .component( 'pv-select-button', SelectButton )
    .component( 'pv-avatar', Avatar )
    .component( 'pv-drawer', Drawer )
    .component( 'pv-card', Card )
    .component( 'pv-toolbar', Toolbar )
    .component( 'pv-menu', Menu )
    .component( 'pv-menu-bar', Menubar)
    .component ( 'pv-popover', Popover )
    .directive ( 'tooltip', Tooltip )

    .mount('#app')
