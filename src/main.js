import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'bootstrap'
import VmBackTop from 'vue-multiple-back-top'
import './assets/scss/style.scss'
import i18n from './i18n'
Vue.component('vm-back-top', VmBackTop)
Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const API_URL = process.env.API_URL || 'https://ikleenik.com/api'
// const API_URL = process.env.API_URL || '//localhost/api'

Vue.prototype.$http.defaults.baseURL = API_URL
Vue.prototype.$http.defaults.headers.post['Accept'] = 'application/json';
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
