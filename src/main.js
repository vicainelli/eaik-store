import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import i18n from './i18n'
import { BreadstickBakery } from 'breadstick'

Vue.config.productionTip = false
Vue.use(BreadstickBakery)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
