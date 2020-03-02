import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import VmBackTop from 'vue-multiple-back-top'
import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha, { siteKey: '6LfOE90UAAAAAASvHE62wydvYE2JFYl5AQhwHHht' })
import './assets/scss/style.scss'
import i18n from './i18n'
Vue.component('vm-back-top', VmBackTop)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
