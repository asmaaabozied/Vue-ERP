import Vue from "vue";
import ToggleButton from "vue-js-toggle-button";
import VueGoodTablePlugin from "vue-good-table";
import VueLoading from "vue-loading-overlay";
import "vue-good-table/dist/vue-good-table.css";
import "vue-loading-overlay/dist/vue-loading.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import PerfectScrollbar from "perfect-scrollbar";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCollapse from "vue2-collapse";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import Multiselect from "vue-multiselect";
import excel from "vue-excel-export";

import VueTabulator from "vue-tabulator";
Vue.use(VueTabulator, {
  name: "MainTable",
});
Vue.use(excel);
// register globally
Vue.component("multiselect", Multiselect);

// import Select2Component
import Select2 from "v-select2-component";

Vue.component("Select2", Select2);

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ToggleButton);
Vue.use(VueGoodTablePlugin);
Vue.use(VueLoading);
Vue.use(VueSweetalert2);
window.PerfectScrollbar = PerfectScrollbar;
Vue.use(VueAxios, axios);
Vue.use(VueCollapse);
