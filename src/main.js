import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoWebComponent, HiSolidPlusCircle } from "oh-vue-icons/icons";
import { store } from '@/store';

addIcons(IoLogoWebComponent, HiSolidPlusCircle);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);

app.use(store);

app.mount('#app');
