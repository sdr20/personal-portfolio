// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

AOS.init();