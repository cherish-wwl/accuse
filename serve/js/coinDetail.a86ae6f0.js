(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={coinDetail:0},o={coinDetail:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-12eca0f6":"2a91c347","chunk-16e56f20":"3c52914e","chunk-7062d6f1":"5b4c15da","chunk-bf065022":"2a298abe","chunk-1fe2223a":"a3a646a4","chunk-5b15a6dc":"8d03e26b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-16e56f20":1,"chunk-7062d6f1":1,"chunk-bf065022":1,"chunk-1fe2223a":1,"chunk-5b15a6dc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-12eca0f6":"31d6cfe0","chunk-16e56f20":"653f67c2","chunk-7062d6f1":"73a92354","chunk-bf065022":"e3590d1f","chunk-1fe2223a":"4e4d2b1a","chunk-5b15a6dc":"ff21a13a"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([1,"chunk-vendors"]),n()})({"0e46":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coin-detail mescroll",attrs:{id:"mescroll"}},[e._l(e.detailDataList,(function(t,r){return n("div",{key:r,staticClass:"detail-item"},[n("div",{staticClass:"col1"},[n("p",{staticClass:"col1Title"},[e._v(e._s(t.title))]),n("p",{staticClass:"col1text"},[e._v(e._s(t.date))])]),n("div",{staticClass:"col2"},[e._v(" "+e._s(t.describe)+" ")])])})),n("div",{attrs:{id:"empty"}})],2)},a=[],o=(n("99af"),n("2909")),i=n("f868"),c=n.n(i),s=(n("f2fd"),{data:function(){return{detailDataList:[],params:{page:1,perPage:20}}},mounted:function(){this.bindScroll()},methods:{downCallback:function(){this.params.page=1,this.getRecord()},upCallback:function(){this.params.page=this.params.page+1,this.getRecord()},bindScroll:function(){this.mescroll=new c.a("mescroll",{down:{auto:!0,callback:this.downCallback},up:{auto:!1,callback:this.upCallback,page:{num:1,size:20},htmlNodata:'<p class="upwarp-nodata">没有了哦～</p>',noMoreSize:5,empty:{warpId:"empty",tip:"暂时没有内容哦～"},lazyLoad:{use:!0,attr:"imgurl"}}})},getRecord:function(){var e=this;this.$get(this.API["record"],this.params).then((function(t){var n=t.data.data||[];1==e.params.page?e.detailDataList=n:n&&n.length&&(e.detailDataList=[].concat(Object(o["a"])(e.detailDataList),Object(o["a"])(n))),e.mescroll.endSuccess(n.length),console.log(e.detailDataList)}))}}}),u=s,l=(n("3a4f"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"3646d7ca",null);t["default"]=d.exports},1:function(e,t,n){e.exports=n("89ef")},"1da4":function(e,t,n){},"3a4f":function(e,t,n){"use strict";var r=n("cf22"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]);var o=new a["a"]({mode:"history",routes:[{path:"/",component:function(e){return n.e("chunk-5b15a6dc").then(function(){var t=[n("4f40")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-16e56f20")]).then(function(){var t=[n("e969")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-bf065022")]).then(function(){var t=[n("9e92")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-381f78a7")]).then(function(){var t=[n("0e46")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-7062d6f1")]).then(function(){var t=[n("7acb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/注销",name:"writeOff",component:function(e){return n.e("chunk-1fe2223a").then(function(){var t=[n("3d3d")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),i=(n("d34d"),{signCalendar:"/user/v2/gold/signCalendar",signIn:"/user/v2/gold/signIn",taskList:"/user/v2/gold/taskList",finishTask:"/user/v2/gold/finishTask",record:"/user/v2/gold/record",feedback:"/user/v2/feedback",userInfo:"/user/v2/getInfo",submitAccuse:"/cmu/v1/accuse",userOffStatus:"/user/v2/close/userStatus",userCancelStatus:"/user/v2/close/cancelStatus",userOffSubmit:"/user/v2/close/submit",userOffCancel:"/user/v2/close/cancel",userOffConfirm:"/user/v2/close/confirm",sendCode:"/user/v2/info/sendCode"}),c=i,s=(n("d3b7"),n("96cf"),n("1da1")),u=n("bc3a"),l=n.n(u),d=n("c8a8");console.log("window",window);var f=l.a.create({baseURL:window.location.origin});function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){f.post(e,t).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}f.interceptors.request.use(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=sessionStorage.getItem("Authorization"),r=sessionStorage.getItem("UA"),n&&r){e.next=21;break}return e.prev=3,e.next=6,Object(d["c"])();case 6:return a=e.sent,e.next=9,Object(d["d"])();case 9:o=e.sent,t.headers["Authorization"]=a,t.headers["User-Agent"]=o,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),console.log(e.t0);case 17:return console.log(t),e.abrupt("return",t);case 21:return t.headers["Authorization"]=n,t.headers["User-Agent"]=r,console.log(t),e.abrupt("return",t);case 25:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}()),f.interceptors.response.use((function(e){return e}));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="?";for(var r in t)t[r]&&(n+=r+"="+t[r]+"&");return n=n.substring(0,n.length-1),e+n};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){f.get(h(e,t)).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}var m=n("2b27"),v=n.n(m),b=n("c711"),A=n("3a34"),w=n.n(A);r["a"].config.productionTip=!1,r["a"].prototype.API=c,r["a"].prototype.$post=p,r["a"].prototype.$get=g,r["a"].use(v.a),r["a"].component("popUp",b["a"]);var k=new w.a;function y(e){new r["a"]({render:function(t){return t(e)},router:o}).$mount("#app")}r["a"].use(k)},"79b0":function(e,t,n){"use strict";var r=n("1da4"),a=n.n(r);a.a},"89ef":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("0e46"),a=n("56d7");Object(a["a"])(r["default"])},"95b4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},c711:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isshowDialog?n("div",{staticClass:"feed-dialog"},[e._m(0),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text1))]),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text2))])]):e._e()},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-bottom":"5px"}},[r("img",{attrs:{src:n("95b4")}})])}],o=(n("a9e3"),{data:function(){return{isshowDialog:!0}},props:{textMap:{typr:Object},time:{type:Number}},mounted:function(){var e=this;setTimeout((function(){e.isshowDialog=!1,e.$emit("closeCallback")}),1e3*this.time)}}),i=o,c=(n("79b0"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"3c75f608",null);t["a"]=s.exports},c8a8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));n("c975"),n("d3b7"),n("ac1f"),n("466d"),n("5319");var r=navigator.userAgent,a=r.indexOf("Android")>-1||r.indexOf("Adr")>-1,o=!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);function i(e){if(o){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}a&&(window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1))}function c(){return console.log("getJWT start"),new Promise((function(e,t){if(o)i((function(t){t.callHandler("suboNTGetJWT",{source:"我要来获取JWT了，快给我"},(function(t){console.log(t);var n=t.replace("Authorization=","");sessionStorage.setItem("Authorization",n),e(n)}))})),setTimeout((function(){t("isiOS error:cannot get JWT")}),3e3);else if(a&&window.JSBridge){var n=window.JSBridge.getJWT();n?(sessionStorage.setItem("Authorization",n),e("Bearer "+n)):(console.log("error",window.JSBridge),t("isAndroid error:cannot get JWT"))}else t("error")}))}function s(){return console.log("getUA start"),new Promise((function(e,t){if(o)i((function(t){t.callHandler("suboNTGetUA",{},(function(t){var n=t.replace("User-Agent=","");sessionStorage.setItem("UA",n),e(n)}))})),setTimeout((function(){t("isiOS error:cannot get UA")}),3e3);else if(a&&window.JSBridge){var n=window.JSBridge.getUA();n?(sessionStorage.setItem("UA",n),e(n)):(console.log("error",window.JSBridge),t("isAndroid error:cannot get UA"))}else t("error")}))}function u(){o&&i((function(e){e.callHandler("suboNTClose")})),a&&window.JSBridge.finish()}function l(){o&&i((function(e){e.callHandler("suboNTLogout",{},(function(e){}))})),a&&window.JSBridge.exitLogin()}},cf22:function(e,t,n){},d34d:function(e,t,n){}});
//# sourceMappingURL=coinDetail.a86ae6f0.js.map