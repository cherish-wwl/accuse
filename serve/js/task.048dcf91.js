(function(t){function e(e){for(var a,i,o=e[0],r=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={task:0,"chunk-6b7c7540":0},c={task:0,"chunk-6b7c7540":0},s=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-345df84a":"c7a8304b","chunk-5feb3530":"cafe24ed","chunk-6214d210":"4c6b0b7c","chunk-43916032":"5d88dbd3","chunk-5e65f662":"e36a9736"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-345df84a":1,"chunk-5feb3530":1,"chunk-6214d210":1,"chunk-43916032":1,"chunk-5e65f662":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-345df84a":"dbdae553","chunk-5feb3530":"46aa853f","chunk-6214d210":"a87c478d","chunk-43916032":"c5ec8a53","chunk-5e65f662":"590e4ea0"}[t]+".css",c=r.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],f.parentNode.removeChild(f),n(s)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("d8d0")},"152c":function(t,e,n){},"2e71":function(t,e,n){t.exports=n.p+"img/coinLeft.d92aa8b1.png"},"4f40":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task"},[a("div",{staticClass:"header"},[a("div",{staticClass:"coinDetails"},[a("span",{staticClass:"myCoin"},[t._v("我的金币")]),a("span",{staticClass:"coindetail"},[a("router-link",{attrs:{to:"coinDetail.html"}},[t._v("金币明细")])],1)]),a("div",{staticClass:"coinImg"},[a("img",{staticClass:"coinLeft",attrs:{src:n("2e71")}}),a("span",{staticClass:"myCoinNum"},[t._v(t._s(t.myCoin))]),a("img",{staticClass:"coinRight",attrs:{src:n("5118")}})])]),a("div",{staticClass:"signBlock"},[a("p",{staticClass:"signText"},[t._v(" 已签到"+t._s(t.signNum)+"天 "),a("span",{staticClass:"signTip1"},[t._v("（连续签到翻倍金币哦）")])]),a("div",{staticClass:"coinItems"},t._l(t.coin,(function(e,n){return a("div",{key:n,staticClass:"coinItem"},[a("span",{staticClass:"coinText1"},[t._v(t._s(e.text1))]),a("p",{staticClass:"signTip2"},[t._v(t._s(e.text2))])])})),0),a("div",{staticClass:"signBtn"},[t._v("立即签到")])]),a("div",{staticClass:"noviceBlock"},[a("p",{staticClass:"taskTitle"},[t._v("新手任务")]),t._l(t.noviceDataList,(function(e,n){return a("div",{key:n,staticClass:"taskItems"},[t._m(0,!0),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[t._v(t._s(e.title))]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(e.coinNum))]),t._v("金币")])]),a("div",{staticClass:"noviceCol3"},[t._v(" "+t._s(e.btnText)+" ")])])}))],2),a("div",{staticClass:"everydayBlock"},[a("p",{staticClass:"taskTitle"},[t._v("新手任务")]),t._l(t.noviceDataList,(function(e,n){return a("div",{key:n,staticClass:"taskItems"},[t._m(1,!0),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[t._v(t._s(e.title))]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(e.coinNum))]),t._v("金币")])]),a("div",{staticClass:"noviceCol3"},[t._v(" "+t._s(e.btnText)+" ")])])}))],2),a("div",{staticClass:"supplementTip"},[t._v("更多任务正在开启中敬请期待哦～")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noviceCol1"},[n("img",{staticStyle:{height:"32px",width:"32px","background-color":"#ccc"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"noviceCol1"},[n("img",{staticStyle:{height:"32px",width:"32px","background-color":"#ccc"}})])}],c={data:function(){return{coin:[{text1:266,text2:"今日"},{text1:366,text2:"2天"},{text1:566,text2:"3天"},{text1:666,text2:"4天"},{text1:766,text2:"5天"},{text1:866,text2:"6天"},{text1:"翻倍",text2:"7天"}],signNum:0,noviceDataList:[{title:"关注你喜欢的话题(0/1)",coinNum:100,btnText:"已完成"},{title:"关注你喜欢的话题(0/1)",coinNum:150,btnText:"去完成"},{title:"关注你喜欢的话题(0/1)",coinNum:200,btnText:"领取"}],everydayDataList:[{title:"关注你喜欢的话题(0/1)",coinNum:100,btnText:"已完成"},{title:"关注你喜欢的话题(0/1)",coinNum:150,btnText:"去完成"},{title:"关注你喜欢的话题(0/1)",coinNum:200,btnText:"领取"}],myCoin:"1000"}}},s=c,o=(n("5713"),n("2877")),r=Object(o["a"])(s,a,i,!1,null,"3b245f9a",null);e["default"]=r.exports},5118:function(t,e,n){t.exports=n.p+"img/coinRight.58f24efb.png"},5713:function(t,e,n){"use strict";var a=n("152c"),i=n.n(a);i.a},a18c:function(t,e,n){"use strict";var a=n("2b0e"),i=n("8c4f");a["a"].use(i["a"]),e["a"]=new i["a"]({mode:"history",routes:[{path:"/",component:function(t){return n.e("chunk-6b7c7540").then(function(){var e=[n("4f40")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(t){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-43916032")]).then(function(){var e=[n("e969")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(t){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-5e65f662")]).then(function(){var e=[n("9e92")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(t){return n.e("chunk-5feb3530").then(function(){var e=[n("0e46")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(t){return n.e("chunk-345df84a").then(function(){var e=[n("7acb")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},d34d:function(t,e,n){},d8d0:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("4f40"),c=n("a18c");n("d34d");a["a"].config.productionTip=!1,new a["a"]({router:c["a"],render:function(t){return t(i["default"])}}).$mount("#app")}});
//# sourceMappingURL=task.048dcf91.js.map