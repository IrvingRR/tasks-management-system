import './assets/main.css';
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoLogoWebComponent, HiSolidPlusCircle, FaChevronDown, FaCircle, FaTimes, FaChevronLeft } from "oh-vue-icons/icons";
import { store } from '@/store';

addIcons(IoLogoWebComponent, HiSolidPlusCircle, FaChevronDown, FaCircle, FaTimes, FaChevronLeft);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);
app.use(store);
app.mount('#app');
