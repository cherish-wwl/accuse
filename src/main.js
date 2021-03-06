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
import popUp from './components/popUp';
Vue.component('popUp',popUp);

import Vconsole from 'vconsole'
let vConsole = new Vconsole()
Vue.use(vConsole)

function init(Dom) {
  new Vue({
    render: (h) => h(Dom),
    router,
  }).$mount("#app");
}

export { init };
