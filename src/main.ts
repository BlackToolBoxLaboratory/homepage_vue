import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import BTBModules from './modules';

import App from "./App.vue";
import router from "./router";

import FontAwesomeIcon from '@/plugins/vue-fontawesome';
import BtbListComponents from '@/plugins/btblab-vue-list';
// import '@/plugins/btblab-vue-table'

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
  .use(router)
  .use(BTBModules)
  .use(BtbListComponents)
  .component('fai', FontAwesomeIcon)
  .mount("#app");
