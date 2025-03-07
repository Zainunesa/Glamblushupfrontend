
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'vue-toastification/dist/index.css'; 
import Toast, { POSITION } from 'vue-toastification'; 

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, {
    position: POSITION.TOP_RIGHT,  
    timeout: 5000, 
  })
  .mount('#app');
