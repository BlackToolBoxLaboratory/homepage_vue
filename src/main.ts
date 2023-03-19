import { createApp } from "vue";

import BTBModules from "./modules";

import App from "./App.vue";
import router from "./router";

import FontAwesomeIcon from "@/plugins/vue-fontawesome";
import BtbListComponents from "@/plugins/btblab-vue-list";
import BtbTableComponents from "@/plugins/btblab-vue-table";
import BtbPopoverComponents from "@/plugins/btblab-vue-popover";

import pinia from '@/store';

const app = createApp(App);

app
  .use(pinia)
  .use(router)
  .use(BTBModules)
  .use(BtbListComponents)
  .use(BtbTableComponents)
  .use(BtbPopoverComponents)
  .component("fai", FontAwesomeIcon)
  .mount("#app");
