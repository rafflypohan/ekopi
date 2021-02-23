import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

import store from './store'

import './assets/js/tailwind.js'

Vue.config.productionTip = false

window.axios = require('axios')

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('token')

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
