(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,s=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={coinDetail:0,"chunk-332b84c2":0},c={coinDetail:0,"chunk-332b84c2":0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1441c1a5":"b46b2ffe","chunk-4b28ad92":"ee8a98bd","chunk-74d4e782":"6d8d11f0","chunk-202fdc2f":"be0a0d09","chunk-345df84a":"c7a8304b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4b28ad92":1,"chunk-74d4e782":1,"chunk-202fdc2f":1,"chunk-345df84a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1441c1a5":"31d6cfe0","chunk-4b28ad92":"f29a7211","chunk-74d4e782":"91362eb0","chunk-202fdc2f":"0e210483","chunk-345df84a":"dbdae553"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;o.push([1,"chunk-vendors"]),n()})({"0e46":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coin-detail"},e._l(e.detailDataList,(function(t,r){return n("div",{key:r,staticClass:"detail-item"},[n("div",{staticClass:"col1"},[n("p",{staticClass:"col1Title"},[e._v(e._s(t.text))]),n("p",{staticClass:"col1text"},[e._v(e._s(t.date))])]),n("div",{staticClass:"col2"},[e._v(" +"+e._s(t.coinNum)+"金币 ")])])})),0)},a=[],c={data:function(){return{detailDataList:[{text:"关注话题",date:"2020/7/26",coinNum:100},{text:"关注话题",date:"2020/7/26",coinNum:100},{text:"关注话题",date:"2020/7/26",coinNum:100},{text:"关注话题",date:"2020/7/26",coinNum:100}]}}},o=c,u=(n("855d"),n("2877")),i=Object(u["a"])(o,r,a,!1,null,"6c14ad03",null);t["default"]=i.exports},1:function(e,t,n){e.exports=n("89ef")},"7bb3":function(e,t,n){},"855d":function(e,t,n){"use strict";var r=n("7bb3"),a=n.n(r);a.a},"89ef":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("0e46"),c=n("a18c");n("d34d");r["a"].config.productionTip=!1,new r["a"]({router:c["a"],render:function(e){return e(a["default"])}}).$mount("#app")},a18c:function(e,t,n){"use strict";var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]),t["a"]=new a["a"]({mode:"history",routes:[{path:"/",component:function(e){return n.e("chunk-202fdc2f").then(function(){var t=[n("4f40")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([n.e("chunk-1441c1a5"),n.e("chunk-4b28ad92")]).then(function(){var t=[n("e969")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([n.e("chunk-1441c1a5"),n.e("chunk-74d4e782")]).then(function(){var t=[n("9e92")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return n.e("chunk-332b84c2").then(function(){var t=[n("0e46")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return n.e("chunk-345df84a").then(function(){var t=[n("7acb")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},d34d:function(e,t,n){}});
//# sourceMappingURL=coinDetail.8ba5e464.js.map