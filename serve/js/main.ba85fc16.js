(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={main:0},c={main:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-17db7add":"6bb1d5d2","chunk-68e8cb62":"732d050b","chunk-22e1c691":"12927177","chunk-5e65f662":"2794aae5","chunk-845a223c":"4938d6d7","chunk-9dc6f8c0":"3bffe441"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-17db7add":1,"chunk-68e8cb62":1,"chunk-22e1c691":1,"chunk-5e65f662":1,"chunk-845a223c":1,"chunk-9dc6f8c0":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-17db7add":"67ce643b","chunk-68e8cb62":"a87c478d","chunk-22e1c691":"653f67c2","chunk-5e65f662":"590e4ea0","chunk-845a223c":"165fb33d","chunk-9dc6f8c0":"0d69d266"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),t(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a={name:"App"},u=a,i=(t("034f"),t("2877")),s=Object(i["a"])(u,o,c,!1,null,null,null),l=s.exports,d=t("a18c"),f=(t("d34d"),t("7c15")),h=t("b775");r["a"].config.productionTip=!1,r["a"].prototype.API=f["a"],r["a"].prototype.$post=h["b"],r["a"].prototype.$get=h["a"],new r["a"]({render:function(e){return e(l)},router:d["a"]}).$mount("#app")},"7c15":function(e,n,t){"use strict";var r={signCalendar:"/user/v2/gold/signCalendar",signIn:"/user/v2/gold/signIn",taskList:"/user/v2/gold/taskList",finishTask:"/user/v2/gold/finishTask",record:"/user/v2/gold/record",feedback:"/user/v2/feedback"};n["a"]=r},"85ec":function(e,n,t){},a18c:function(e,n,t){"use strict";var r=t("2b0e"),o=t("8c4f");r["a"].use(o["a"]),n["a"]=new o["a"]({mode:"history",routes:[{path:"/",component:function(e){return t.e("chunk-9dc6f8c0").then(function(){var n=[t("4f40")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([t.e("chunk-68e8cb62"),t.e("chunk-22e1c691")]).then(function(){var n=[t("e969")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([t.e("chunk-68e8cb62"),t.e("chunk-5e65f662")]).then(function(){var n=[t("9e92")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return t.e("chunk-17db7add").then(function(){var n=[t("0e46")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return t.e("chunk-845a223c").then(function(){var n=[t("7acb")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]})},b775:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));t("d3b7");var r=t("bc3a"),o=t.n(r);console.log(Object({NODE_ENV:"production",BASE_URL:""}));var c=o.a.create({baseURL:"https://join.dev.fawo.cn",headers:{Authorization:"Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJIUzI1NiJ9.eyJkZXZpY2UiOnsiaGFzaF9pZHMiOiJ3TUttQUsxeCIsImRldmljZV9uYW1lIjoieWlfbWFyayIsImRldmljZV91c2luZ19pZCI6IjExNzc0NzMwNjFDNzQxNDVCOTQzNjYwMzMzNTg2RUYwIn0sInVzZXIiOnsiaGFzaF9pZHMiOiJ5SmVBODZ3YiIsIm5pY2tuYW1lIjoiXHU1ZTA1XHU2YzE0XHU1MzQxXHU4ZGIzIn0sImlzcyI6InN1Ym9iYXNlIGRldiIsImlhdCI6MTU5NjA5MTQyNCwiZXhwIjoxNTk2MjY0MjI0fQ==.e78ee09ebca97ac7fdccbd81b4e493c3"}});function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log(n),new Promise((function(t,r){c.post(e,n).then((function(e){e.data&&t(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}c.interceptors.request.use((function(e){return e})),c.interceptors.response.use((function(e){return e}));var u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t="?";for(var r in n)n[r]&&(t+=r+"="+n[r]+"&");return t=t.substring(0,t.length-1),e+t};function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log(n),new Promise((function(t,r){c.get(u(e,n)).then((function(e){e.data&&t(e.data)}),(function(e){throw e})).catch((function(e){r(e)}))}))}},d34d:function(e,n,t){}});
//# sourceMappingURL=main.ba85fc16.js.map