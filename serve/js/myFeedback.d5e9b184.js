(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={myFeedback:0,"chunk-345df84a":0},c={myFeedback:0,"chunk-345df84a":0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5feb3530":"cafe24ed","chunk-6214d210":"4c6b0b7c","chunk-43916032":"5d88dbd3","chunk-5e65f662":"e36a9736","chunk-6b7c7540":"ad7f3183"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5feb3530":1,"chunk-6214d210":1,"chunk-43916032":1,"chunk-5e65f662":1,"chunk-6b7c7540":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5feb3530":"46aa853f","chunk-6214d210":"a87c478d","chunk-43916032":"c5ec8a53","chunk-5e65f662":"590e4ea0","chunk-6b7c7540":"459d0d4b"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([4,"chunk-vendors"]),n()})({"017f":function(e,t,n){"use strict";var r=n("8fe9"),a=n.n(r);a.a},4:function(e,t,n){e.exports=n("b1bd")},"7acb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hasFeed?n("div",[e._l(e.feedbackData,(function(t,r){return n("div",{key:r,staticClass:"feed-items"},[n("p",{staticClass:"feed-item"},[n("span",{staticClass:"feed-title"},[e._v(e._s(t.title))]),n("span",{staticClass:"feed-date"},[e._v(e._s(t.date))])]),n("p",{staticClass:"feed-text"},[e._v(e._s(t.text))]),n("img",{staticClass:"feed-img",attrs:{src:""}})])})),e._m(0)],2):n("div")])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"feed-dialog"},[r("div",{staticStyle:{"margin-bottom":"5px"}},[r("img",{attrs:{src:n("95b4")}})]),r("div",{staticClass:"feed-dialog-text"},[e._v("感谢您提供的反馈")]),r("div",{staticClass:"feed-dialog-text"},[e._v("处理完会通知你哟~")])])}],c={data:function(){return{hasFeed:!0,feedbackData:[{title:"aa",text:"xxxxxx",date:"2020-07-23",img:""},{title:"AA",text:"XXXX",date:"2020-07-23",img:""}]}}},o=c,i=(n("017f"),n("2877")),u=Object(i["a"])(o,r,a,!1,null,"31aaeec6",null);t["default"]=u.exports},"8fe9":function(e,t,n){},"95b4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},a18c:function(e,t,n){"use strict";var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]),t["a"]=new a["a"]({mode:"history",routes:[{path:"/",component:function(e){return n.e("chunk-6b7c7540").then(function(){var t=[n("4f40")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-43916032")]).then(function(){var t=[n("e969")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-5e65f662")]).then(function(){var t=[n("9e92")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return n.e("chunk-5feb3530").then(function(){var t=[n("0e46")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return n.e("chunk-345df84a").then(function(){var t=[n("7acb")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},b1bd:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("7acb"),c=n("a18c");n("d34d");r["a"].config.productionTip=!1,new r["a"]({router:c["a"],render:function(e){return e(a["default"])}}).$mount("#app")},d34d:function(e,t,n){}});
//# sourceMappingURL=myFeedback.d5e9b184.js.map