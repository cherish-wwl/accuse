(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],l=0,A=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&A.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(A.length)A.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={report:0},i={report:0},r=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-345df84a":"c7a8304b","chunk-5feb3530":"cafe24ed","chunk-6214d210":"4c6b0b7c","chunk-43916032":"5d88dbd3","chunk-6b7c7540":"ad7f3183"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-345df84a":1,"chunk-5feb3530":1,"chunk-6214d210":1,"chunk-43916032":1,"chunk-6b7c7540":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-345df84a":"dbdae553","chunk-5feb3530":"46aa853f","chunk-6214d210":"a87c478d","chunk-43916032":"c5ec8a53","chunk-6b7c7540":"459d0d4b"}[t]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var A=document.getElementsByTagName("style");for(c=0;c<A.length;c++){u=A[c],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],f.parentNode.removeChild(f),n(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var A=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;A.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",A.name="ChunkLoadError",A.type=a,A.request=o,n[1](A)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var A=0;A<u.length;A++)e(u[A]);var f=l;r.push([5,"chunk-vendors"]),n()})({"0c3a":function(t,e){t.exports="data:image/png;base64,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"},"0f0c":function(t,e,n){},2979:function(t,e,n){},5:function(t,e,n){t.exports=n("e6aa")},"58dd":function(t,e,n){"use strict";var a=n("2979"),o=n.n(a);o.a},"95b4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},"9e92":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("article",[a("p",{staticClass:"txtP"},[t._v("选择你想投诉的类型")]),a("ul",{staticClass:"listUl"},t._l(t.commonLi,(function(e,n){return a("li",{key:n,staticClass:"commonLi",class:{active:t.commonLiItem.includes(e)},on:{click:function(n){return t.clickCommonLi(e)}}},[t._v(t._s(e))])})),0),a("div",{staticClass:"line"}),t.commonLiItem.length>0?a("section",{staticClass:"noteSec"},[a("div",[a("p",{staticClass:"feed-title"},[t._v("补充说明")]),a("div",{staticClass:"block1"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"text-area",attrs:{row:"3","resize:":"",none:"",placeholder:"请详细填写并提供原内容的链接地址"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("div",{staticClass:"rz-picter"},[a("div",{staticStyle:{display:"flex"}},[t._l(t.fileList,(function(e,o){return a("span",{key:o,staticClass:"img"},[a("img",{staticClass:"img",attrs:{src:e}}),a("img",{staticClass:"deleteIcon",attrs:{src:n("bafe")},on:{click:function(e){return t.deleteImg(o)}}})])})),a("span",{staticClass:"imgBlock",on:{click:t.chooseImage}},[a("img",{staticClass:"img-avatar",attrs:{src:n("0c3a"),alt:""}})])],2),a("input",{ref:"avatarInput",staticStyle:{display:"none"},attrs:{type:"file",name:"avatar",id:"uppic",multiple:"multiple",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(e){return t.changeImage(e)}}})])])])]):t._e(),t._m(0),a("button",{staticClass:"btnSubmit",on:{click:t.submit}},[t._v("提交")])]),t._m(1),t.showDialog?a("pop-up",{attrs:{textMap:t.textMap,time:2}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"remarkP"},[a("img",{attrs:{src:n("e9ea"),alt:""}}),t._v(" 您的举报将在24小时内受理，请尽量提交完整的举报描述及材料，无需重复举报，感谢您的配合 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"standardText"},[t._v("了解速播社区规范 "),n("span",{staticStyle:{color:"#D5DBE6"}},[t._v(" >")])])}],i=(n("c740"),n("caad"),n("d81d"),n("a434"),n("4fad"),n("2532"),n("3835")),r=n("c711"),c={data:function(){return{commonLi:["不适内容","色情低俗","有害信息","攻击谩骂","诈骗信息","政治敏感","内容抄袭","赌博","其他"],commonLiItem:[],fileList:[],text:"",textMap:{text1:"举报成功",text2:"我们会尽快处理哒~"},showDialog:!1}},components:{popUp:r["a"]},methods:{chooseImage:function(){document.getElementById("uppic").click()},changeImage:function(t){var e=this;Object.entries(t.target.files).map((function(t){var n=Object(i["a"])(t,2),a=n[0],o=n[1];console.log(a);var r=new FileReader,c=e;r.readAsDataURL(o),r.onload=function(t){console.log(t),c.fileList.push(this.result)}}))},deleteImg:function(t){this.fileList.splice(t,1)},clickCommonLi:function(t){if(this.commonLiItem.includes(t)){var e=this.commonLiItem.findIndex((function(e){return e===t}));this.commonLiItem.splice(e,1)}else this.commonLiItem.push(t)},submit:function(){console.log(this.commonLiItem),this.showDialog=!0}}},s=c,u=(n("58dd"),n("2877")),l=Object(u["a"])(s,a,o,!1,null,"18321244",null);e["default"]=l.exports},a18c:function(t,e,n){"use strict";var a=n("2b0e"),o=n("8c4f");a["a"].use(o["a"]),e["a"]=new o["a"]({mode:"history",routes:[{path:"/",component:function(t){return n.e("chunk-6b7c7540").then(function(){var e=[n("4f40")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(t){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-43916032")]).then(function(){var e=[n("e969")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(t){return Promise.all([n.e("chunk-6214d210"),n.e("chunk-5e65f662")]).then(function(){var e=[n("9e92")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(t){return n.e("chunk-5feb3530").then(function(){var e=[n("0e46")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(t){return n.e("chunk-345df84a").then(function(){var e=[n("7acb")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},bafe:function(t,e,n){t.exports=n.p+"img/删除.ebb7ac49.svg"},c711:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isshowDialog?n("div",{staticClass:"feed-dialog"},[t._m(0),n("div",{staticClass:"feed-dialog-text"},[t._v(t._s(t.textMap.text1))]),n("div",{staticClass:"feed-dialog-text"},[t._v(t._s(t.textMap.text2))])]):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"5px"}},[a("img",{attrs:{src:n("95b4")}})])}],i=(n("a9e3"),{data:function(){return{isshowDialog:!0}},props:{textMap:{typr:Object},time:{type:Number}},mounted:function(){var t=this;setTimeout((function(){t.isshowDialog=!1}),1e3*this.time)}}),r=i,c=(n("e93f"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"59657c0e",null);e["a"]=s.exports},d34d:function(t,e,n){},e6aa:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("9e92"),i=n("a18c");n("d34d");a["a"].config.productionTip=!1,new a["a"]({router:i["a"],render:function(t){return t(o["default"])}}).$mount("#app")},e93f:function(t,e,n){"use strict";var a=n("0f0c"),o=n.n(a);o.a},e9ea:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVRYR+2Wz0sUYRjHv89s/iIIPHRJCG8GHjoYHSqLohJPBaVQHrrYTtnu7CpaYIWjlFHBuruzTs0uXQI77ApB5MW6iEFkGp1S+gMKxDSEsFz3fWI1Y9edmZ3dAj041/f7fZ7PfN95n3cIm/zQJvfH1gVoaoq76o8teAXQlE5JAhLjY5VaItGcskutUJ9lAkHNiONP84yGCb9XbrYDKNRnChAOR08K4ldmjSSmU4rifm22VozPFCAYNrpBuGv6poybfkXuN1srxmcKENKMHgZUsyYEqD6v3Gu2VoxvG8AqgesM3LfYghs+r/zAYgsK9pkDhPQ6llwTa8c/6xEkUgd9vrYpU4AifJZzIKQZd0DUzcyrGiJiMPf7vPItuzlQqM92FAfCxmmJ6Hy6oWAe7lDkUSd3RyG+rXsXOHnT/6HZTsDiGMbqIKXOgaT3Po/7+b9EHYhEa10sWkDS9MLclyFVVUVmvRyAoP6kBqmVjwDKV4UsXfIrl58WA6Fp2p4USqcB7Fo9ykDOEMsBGIgYrcSI/W1INOX3uA8UAxAajD5kwZ3rXgZG271yg20CIT1WxykxmdVQQr3/mvymEIigrtcg5UpPzJ0ZAL3tXjnrljX/H4gYM2DUrBsJ+Jz8hcOdnfKcE4hA4FGVVCKlf1r2ZeiXkj9FdVfX1VnbBNKLA+HHF4jo2QbhjCC0tHvkD7ajOBI7wxCDYFRl6Zj7/MqVno1eqzlAQS06AnDjxssIwEtASrCEqRIunf3Bi2XloqwaEh8RwEUC9psAvv3+7etRVVVXnAJA1/XK5ZRrHECtk9htNJMi6Wro6GidN9PYTsJ7ul5ZIXYMg/lEMRBEPERiuU1RlEUrf95RnL6ONT3qFozbOftqUZVAE8TcpyjySD7wvADrBQzDKFlaxlkAjSA+BKa9ACrWhhXmQTQN4jEAL/we+V2+xhknzKk0VxeIxysWP+1OqurxnI/LaVXHCTgtWKhu0wF+A8Y2UjC1j0SRAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=report.ff990e60.js.map