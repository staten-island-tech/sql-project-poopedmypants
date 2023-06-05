import "./assets/main.css"

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { supabase } from './supabase.js';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$supabase = supabase;
app.mount('#app');
