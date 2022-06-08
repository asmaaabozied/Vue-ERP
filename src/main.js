import Vue from "vue";
import { store } from "../Store/store";
import App from "./App.vue";
import router from "./router";
import i18n from "../locales/i18n";
import VueDatetimeJs from "vue-datetime-js";

import vWow from "v-wow";
Vue.use(vWow);
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
Vue.component("date-picker", VueDatetimeJs);
export const bus = new Vue();
Vue.prototype.$eventHub = new Vue();
Vue.prototype.$routeLink= router;
Vue.component("pagination", require("laravel-vue-pagination"));
// Vue 3rd party plugins
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/vueUses";

// ----------------------------------------------- Requires Files --------------------------------------------------

require("@/core/plugins/globalFunctions");
require("@/core/plugins/globalComponents");
require("@/core/plugins/axios");
require("@/core/plugins/windowVarabiles");
require("@/core/plugins/languages");

// ----------------------------------------------- Vue Logic --------------------------------------------------
Vue.config.productionTip = false;
new Vue({
  router,
  store: store,
  i18n,

  render: (h) => h(App),
}).$mount("#app");

