import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import { store } from '@/store';

addIcons(FaFlag, RiZhihuFill);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);

app.use(store);

app.mount('#app');
