import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoWebComponent, HiSolidPlusCircle, FaChevronDown, FaCircle, FaTimes } from "oh-vue-icons/icons";
import { store } from '@/store';

addIcons(IoLogoWebComponent, HiSolidPlusCircle, FaChevronDown, FaCircle, FaTimes);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);

app.use(store);

app.mount('#app');
