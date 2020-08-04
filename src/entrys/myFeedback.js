import Vue from 'vue'
import App from '../page/myFeedback'

import router from '../router/index'
import '../home.css';
Vue.config.productionTip = false

import API from '../utils/api'
import { post, get } from '../utils/request'

Vue.config.productionTip = false
Vue.prototype.API = API;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')