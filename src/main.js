import './assets/main.css'
import "primeicons/primeicons.css";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from '@primevue/themes/aura';
import router from './router/index'
  
const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false,
        }
    }
});

app.use(router)
app.mount('#app')