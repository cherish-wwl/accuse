import Vue from "vue";
import router from "./router/index";
import "./home.css";
import API from "./utils/api";
import { post, get } from "./utils/request";

Vue.config.productionTip = false;
Vue.prototype.API = API;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

import VueCookies from "vue-cookies";
Vue.use(VueCookies);

import VConsole from "vconsole";
let vConsole = new VConsole();
Vue.use(vConsole);


function init(Dom) {
  new Vue({
    render: (h) => h(Dom),
    router,
  }).$mount("#app");
}

export { init };
