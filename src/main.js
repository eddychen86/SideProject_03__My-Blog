import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

import "./plugins/fortawsome";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 讓 Vue 每次換頁都能在最上方的方法
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
