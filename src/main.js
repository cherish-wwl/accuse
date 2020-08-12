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
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import {	setupWebViewJavascriptBridge } from './utils/webViewJavascriptBridge';
setupWebViewJavascriptBridge(bridge=>{
  console.log('bridge',bridge)
  // window.Bridge = client;
  
  bridge.callHandler('getJWT',function(response) {
    //response：回调
    console.log('getJWT response',response)
});
})
import VConsole from 'vconsole';

let vConsole = new VConsole();
Vue.use(vConsole)
new Vue({
  render: h => h(App),
  router,
  mounted() {
    console.log('$cookies.get(Authorization)',this.$cookies.get('Authorization'))
  },
}).$mount('#app')
