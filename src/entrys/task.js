import Vue from 'vue'
import App from '../page/task'

import router from '../router/index'
import '../home.css';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')