(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={shop:0},o={shop:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-12eca0f6":"2a91c347","chunk-16e56f20":"3c52914e","chunk-381f78a7":"580f523c","chunk-7062d6f1":"5b4c15da","chunk-bf065022":"2a298abe","chunk-1fe2223a":"a3a646a4","chunk-5b15a6dc":"8d03e26b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-16e56f20":1,"chunk-381f78a7":1,"chunk-7062d6f1":1,"chunk-bf065022":1,"chunk-1fe2223a":1,"chunk-5b15a6dc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-12eca0f6":"31d6cfe0","chunk-16e56f20":"653f67c2","chunk-381f78a7":"2e544b03","chunk-7062d6f1":"73a92354","chunk-bf065022":"e3590d1f","chunk-1fe2223a":"4e4d2b1a","chunk-5b15a6dc":"ff21a13a"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([6,"chunk-vendors"]),n()})({"1da4":function(e,t,n){},"2b5d":function(e,t,n){"use strict";var r=n("fe18"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]);var o=new a["a"]({mode:"history",routes:[{path:"/",component:function(e){return n.e("chunk-5b15a6dc").then(function(){var t=[n("4f40")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-16e56f20")]).then(function(){var t=[n("e969")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-bf065022")]).then(function(){var t=[n("9e92")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-381f78a7")]).then(function(){var t=[n("0e46")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-7062d6f1")]).then(function(){var t=[n("7acb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/注销",name:"writeOff",component:function(e){return n.e("chunk-1fe2223a").then(function(){var t=[n("3d3d")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),i=(n("d34d"),{signCalendar:"/user/v2/gold/signCalendar",signIn:"/user/v2/gold/signIn",taskList:"/user/v2/gold/taskList",finishTask:"/user/v2/gold/finishTask",record:"/user/v2/gold/record",feedback:"/user/v2/feedback",userInfo:"/user/v2/getInfo",submitAccuse:"/cmu/v1/accuse",userOffStatus:"/user/v2/close/userStatus",userCancelStatus:"/user/v2/close/cancelStatus",userOffSubmit:"/user/v2/close/submit",userOffCancel:"/user/v2/close/cancel",userOffConfirm:"/user/v2/close/confirm",sendCode:"/user/v2/info/sendCode"}),c=i,s=(n("d3b7"),n("96cf"),n("1da1")),u=n("bc3a"),l=n.n(u),d=n("c8a8");console.log("window",window);var f=l.a.create({baseURL:window.location.origin});function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){f.post(e,t).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}f.interceptors.request.use(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=sessionStorage.getItem("Authorization"),r=sessionStorage.getItem("UA"),n&&r){e.next=21;break}return e.prev=3,e.next=6,Object(d["c"])();case 6:return a=e.sent,e.next=9,Object(d["d"])();case 9:o=e.sent,t.headers["Authorization"]=a,t.headers["User-Agent"]=o,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),console.log(e.t0);case 17:return console.log(t),e.abrupt("return",t);case 21:return t.headers["Authorization"]=n,t.headers["User-Agent"]=r,console.log(t),e.abrupt("return",t);case 25:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}()),f.interceptors.response.use((function(e){return e}));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="?";for(var r in t)t[r]&&(n+=r+"="+t[r]+"&");return n=n.substring(0,n.length-1),e+n};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){f.get(p(e,t)).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}var g=n("2b27"),m=n.n(g),b=n("c711"),A=n("3a34"),w=n.n(A);r["a"].config.productionTip=!1,r["a"].prototype.API=c,r["a"].prototype.$post=h,r["a"].prototype.$get=v,r["a"].use(m.a),r["a"].component("popUp",b["a"]);var k=new w.a;function _(e){new r["a"]({render:function(t){return t(e)},router:o}).$mount("#app")}r["a"].use(k)},6:function(e,t,n){e.exports=n("7ee3")},"79b0":function(e,t,n){"use strict";var r=n("1da4"),a=n.n(r);a.a},"7ee3":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"userInfo"},[n("img",{staticClass:"avatar",attrs:{src:e.avatar_img}}),n("div",{staticClass:"center"},[n("h3",{staticClass:"name"},[e._v(e._s(e.userInfo.nickname))]),n("p",{staticClass:"mark"},[e._v("这个人很帅，但他从来不说～")])])]),n("p",{staticClass:"font01"},[e._v("免广告卡（手机、ipad通用）")]),n("div",{staticClass:"goodsPanel"},e._l(e.goods,(function(t,r){return n("div",{key:r,staticClass:"item",class:{active:e.active==t.id},on:{click:function(n){e.active=t.id}}},[n("div",{staticClass:"text"},[e._v(e._s(t.text))]),n("div",{staticClass:"price"},[n("span",{staticClass:"per"},[e._v("¥")]),e._v(e._s(t.price))]),n("div",{staticClass:"ori_price"},[e._v("¥"+e._s(t.ori_price))]),n("span",{staticClass:"discount"},[e._v(e._s(t.discount)+"折")])])})),0),e._m(1),n("button",{staticClass:"btnSubmit",on:{click:e.submit}},[e._v("立即以135元开通")]),n("div",{staticClass:"mt1"},[n("label",{staticClass:"protocal"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checkd,expression:"checkd"}],staticStyle:{"margin-right":"7px"},attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.checkd)?e._i(e.checkd,"1")>-1:e.checkd},on:{change:[function(t){var n=e.checkd,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o="1",i=e._i(n,o);r.checked?i<0&&(e.checkd=n.concat([o])):i>-1&&(e.checkd=n.slice(0,i).concat(n.slice(i+1)))}else e.checkd=a},e.change]}}),e._v(" 我已阅读并同意“"),n("a",{attrs:{href:"#",target:"_blank"}},[e._v("会员服务协议")]),e._v("”、 “"),n("a",{attrs:{href:"#",target:"_blank"}},[e._v("隐私协议")]),e._v("” ")]),e.error?n("div",{staticClass:"error"},[e._v("请勾选我已阅读并同意")]):e._e()])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"text-right"},[n("a",{attrs:{href:"shopRecord.html",target:"_blank"}},[e._v("交易记录")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"desrc"},[n("p",{staticClass:"font02"},[e._v("到期按一年135元自动续费，可随时取消")]),n("p",{staticClass:"font02"},[e._v(" 自动续费的服务声明")]),n("p",{staticClass:"font03"},[e._v("付款：确认购买并付款后记入iTunes账户；")]),n("p",{staticClass:"font03"},[e._v("取消续订：如需取消续订，请在当前订阅周期到期前24小时以前在iTunes/appID设置管理中关闭自动续费功能，到期前24小时内取消，将会收取订阅费")])])}],o={data:function(){return{userInfo:{avatar_img:{thumb_uris:{"2x":[]}}},active:1,checkd:[],error:!1,goods:[{id:1,text:"连续包年",price:"126",ori_price:"180",discount:"7.0"},{id:2,text:"连续包季",price:"36",ori_price:"45",discount:"7.0"},{id:3,text:"连续包月",price:"12",ori_price:"15",discount:"7.0"}]}},mounted:function(){this.getUserInfo()},computed:{avatar_img:function(){return this.userInfo.avatar_img.thumb_uris["2x"]["0"]}},methods:{change:function(){this.error=!1},submit:function(){this.checkd.length?window.open("shopSuccess.html"):this.error=!0},getUserInfo:function(){var e=this;this.$get(this.API["userInfo"]).then((function(t){e.userInfo=t.data.user_info}))}}},i=o,c=(n("2b5d"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"59a651eb",null),u=s.exports,l=n("56d7");Object(l["a"])(u)},"95b4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},c711:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isshowDialog?n("div",{staticClass:"feed-dialog"},[e._m(0),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text1))]),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text2))])]):e._e()},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-bottom":"5px"}},[r("img",{attrs:{src:n("95b4")}})])}],o=(n("a9e3"),{data:function(){return{isshowDialog:!0}},props:{textMap:{typr:Object},time:{type:Number}},mounted:function(){var e=this;setTimeout((function(){e.isshowDialog=!1,e.$emit("closeCallback")}),1e3*this.time)}}),i=o,c=(n("79b0"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"3c75f608",null);t["a"]=s.exports},c8a8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));n("c975"),n("d3b7"),n("ac1f"),n("466d"),n("5319");var r=navigator.userAgent,a=r.indexOf("Android")>-1||r.indexOf("Adr")>-1,o=!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);function i(e){if(o){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}a&&(window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1))}function c(){return console.log("getJWT start"),new Promise((function(e,t){if(o)i((function(t){t.callHandler("suboNTGetJWT",{source:"我要来获取JWT了，快给我"},(function(t){console.log(t);var n=t.replace("Authorization=","");sessionStorage.setItem("Authorization",n),e(n)}))})),setTimeout((function(){t("isiOS error:cannot get JWT")}),3e3);else if(a&&window.JSBridge){var n=window.JSBridge.getJWT();n?(sessionStorage.setItem("Authorization",n),e("Bearer "+n)):(console.log("error",window.JSBridge),t("isAndroid error:cannot get JWT"))}else t("error")}))}function s(){return console.log("getUA start"),new Promise((function(e,t){if(o)i((function(t){t.callHandler("suboNTGetUA",{},(function(t){var n=t.replace("User-Agent=","");sessionStorage.setItem("UA",n),e(n)}))})),setTimeout((function(){t("isiOS error:cannot get UA")}),3e3);else if(a&&window.JSBridge){var n=window.JSBridge.getUA();n?(sessionStorage.setItem("UA",n),e(n)):(console.log("error",window.JSBridge),t("isAndroid error:cannot get UA"))}else t("error")}))}function u(){o&&i((function(e){e.callHandler("suboNTClose")})),a&&window.JSBridge.finish()}function l(){o&&i((function(e){e.callHandler("suboNTLogout",{},(function(e){}))})),a&&window.JSBridge.exitLogin()}},d34d:function(e,t,n){},fe18:function(e,t,n){}});
//# sourceMappingURL=shop.027c56ca.js.map