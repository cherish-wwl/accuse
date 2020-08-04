import Vue from 'vue'
import App from '../page/coinDetail'

import router from '../router/index'
import '../home.css';

import API from '../utils/api'
import { post, get } from '../utils/request'

Vue.config.productionTip = false
Vue.prototype.API = API;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')