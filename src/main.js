import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import router from './router.js'
import store from './store'

import '@/plugins/vue-fontawesome'
import '@/plugins/btblab-vue-list'

import '@/plugins/btblab-vue-pageLayout'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
