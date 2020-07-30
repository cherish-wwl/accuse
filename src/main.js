import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './home.css';
import API from './utils/api'
import { post, get } from './utils/request'

Vue.config.productionTip = false
Vue.prototype.API = API;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
// (function(doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function() {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       if (clientWidth >= 640) {
//         docEl.style.fontSize = '100px';
//       } else {
//         docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//       }
//     };
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
