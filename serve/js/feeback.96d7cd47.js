(function(e){function t(t){for(var i,a,r=t[0],c=t[1],u=t[2],l=0,f=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={feeback:0,"chunk-22e1c691":0},o={feeback:0,"chunk-22e1c691":0},s=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2fd4de7f":"96a8546b","chunk-5ce8d756":"f9bae741","chunk-749112fd":"a00b5de4","chunk-4397b906":"e574e006","chunk-5b333a62":"4baf42c3","chunk-674830c8":"9d3a8947"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-2fd4de7f":1,"chunk-5ce8d756":1,"chunk-749112fd":1,"chunk-4397b906":1,"chunk-5b333a62":1,"chunk-674830c8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-2fd4de7f":"7350a756","chunk-5ce8d756":"e182710e","chunk-749112fd":"f81c3023","chunk-4397b906":"ff21a13a","chunk-5b333a62":"a87c478d","chunk-674830c8":"d8547f66"}[e]+".css",o=c.p+i,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===o))return t()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){u=f[r],l=u.getAttribute("data-href");if(l===i||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",f.name="ChunkLoadError",f.type=i,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([2,"chunk-vendors"]),n()})({"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"0c3a":function(e,t){e.exports="data:image/png;base64,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"},"0f0c":function(e,t,n){},"1f53":function(e,t,n){"use strict";var i=n("fc62"),a=n.n(i);a.a},2:function(e,t,n){e.exports=n("b7f6")},"56d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var i=n("2b0e"),a=n("8c4f");i["a"].use(a["a"]);var o=new a["a"]({mode:"history",routes:[{path:"/",component:function(e){return n.e("chunk-4397b906").then(function(){var t=[n("4f40")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(e){return Promise.all([n.e("chunk-5b333a62"),n.e("chunk-22e1c691")]).then(function(){var t=[n("e969")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(e){return Promise.all([n.e("chunk-5b333a62"),n.e("chunk-674830c8")]).then(function(){var t=[n("9e92")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(e){return Promise.all([n.e("chunk-2fd4de7f"),n.e("chunk-5ce8d756")]).then(function(){var t=[n("0e46")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(e){return Promise.all([n.e("chunk-2fd4de7f"),n.e("chunk-749112fd")]).then(function(){var t=[n("7acb")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),s=(n("d34d"),{signCalendar:"/user/v2/gold/signCalendar",signIn:"/user/v2/gold/signIn",taskList:"/user/v2/gold/taskList",finishTask:"/user/v2/gold/finishTask",record:"/user/v2/gold/record",feedback:"/user/v2/feedback",userInfo:"/user/v2/getInfo",submitAccuse:"/cmu/v1/accuse"}),r=s,c=(n("d3b7"),n("96cf"),n("1da1")),u=n("bc3a"),l=n.n(u),f=n("c8a8"),d="";function p(){return h.apply(this,arguments)}function h(){return h=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["a"])();case 3:d=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),h.apply(this,arguments)}p();var m=l.a.create({baseURL:"https://join.dev.fawo.cn",headers:{Authorization:d||"Bearer eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJIUzI1NiJ9.eyJkZXZpY2UiOnsiaGFzaF9pZHMiOiJuOGJscG9iRSIsImRldmljZV9uYW1lIjoid3dsXHVkODNkXHVkZTE4XHVkODNkXHVkZTBmXHUyNjNhXHVmZTBmaVBob25lIiwiZGV2aWNlX3VzaW5nX2lkIjoiMTZGNTM2QjRDRTk2NDFBQkE3Q0VCRDE0REU5QUJFNDMifSwidXNlciI6eyJoYXNoX2lkcyI6ImVyZFg4UWpnR0VnYSIsIm5pY2tuYW1lIjoiXHU3NTI4XHU2MjM3X2FhZ1F5SFFVIn0sImlzcyI6InN1Ym9iYXNlIGRldiIsImlhdCI6MTU5NzI5MDQwMSwiZXhwIjoxNTk3NDYzMjAxfQ==.ea8a4aff8fe50a3f8f9fba18878f51ae"}});function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){m.post(e,t).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){i(e)}))}))}m.interceptors.request.use((function(e){return e})),m.interceptors.response.use((function(e){return e}));var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="?";for(var i in t)t[i]&&(n+=i+"="+t[i]+"&");return n=n.substring(0,n.length-1),e+n};function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,i){m.get(g(e,t)).then((function(e){e.data&&n(e.data)}),(function(e){throw e})).catch((function(e){i(e)}))}))}var b=n("2b27"),k=n.n(b),x=n("3a34"),w=n.n(x);i["a"].config.productionTip=!1,i["a"].prototype.API=r,i["a"].prototype.$post=v,i["a"].prototype.$get=A,i["a"].use(k.a);var y=new w.a;function C(e){new i["a"]({render:function(t){return t(e)},router:o}).$mount("#app")}i["a"].use(y)},"85ec":function(e,t,n){},"95b4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},b7f6:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"App"},s=o,r=(n("034f"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,null,null),u=(c.exports,n("e969")),l=n("56d7");Object(l["a"])(u["default"])},bafe:function(e,t,n){e.exports=n.p+"img/删除.ebb7ac49.svg"},c711:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isshowDialog?n("div",{staticClass:"feed-dialog"},[e._m(0),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text1))]),n("div",{staticClass:"feed-dialog-text"},[e._v(e._s(e.textMap.text2))])]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-bottom":"5px"}},[i("img",{attrs:{src:n("95b4")}})])}],o=(n("a9e3"),{data:function(){return{isshowDialog:!0}},props:{textMap:{typr:Object},time:{type:Number}},mounted:function(){var e=this;setTimeout((function(){e.isshowDialog=!1}),1e3*this.time)}}),s=o,r=(n("e93f"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,"59657c0e",null);t["a"]=c.exports},c8a8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("c975"),n("d3b7"),n("ac1f"),n("466d");var i=navigator.userAgent,a=i.indexOf("Android")>-1||i.indexOf("Adr")>-1,o=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);function s(e){if(o){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}a&&(window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1))}function r(){return new Promise((function(e,t){if(o&&(console.log("IOS JWT"),s((function(t){t.callHandler("suboNTGetJWT",{source:"我要来获取JWT了，快给我"},(function(t){console.log(t),e(t)}))})),setTimeout((function(){t("error:cannot get JWT")}),3e3)),a){console.log("Android JWT");var n=window.JSBridge.getJWT();n?e(window.JSBridge.getJWT()):t("error:cannot get JWT")}}))}},d34d:function(e,t,n){},e07d:function(e,t,n){},e93f:function(e,t,n){"use strict";var i=n("0f0c"),a=n.n(i);a.a},e969:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.showScene?i("problem-scene",{on:{selectProFun:e.selectProFun}}):i("div",[i("div",{staticClass:"select-scene",on:{click:function(t){e.showScene=!0}}},[e._v(e._s(e.text1||"请选择问题场景")+" "),i("span",{staticStyle:{"font-size":"1rem",color:"#909399"}},[e._v(e._s(e.text2))]),i("span",{staticClass:"select-icon"},[e._v(">")])]),i("div",{staticClass:"line"}),i("div",{staticClass:"content"},[i("div",[i("p",{staticClass:"feed-title"},[e._v("反馈内容")]),i("div",{staticClass:"block1"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"text-area",attrs:{row:"3","resize:":"",none:"",placeholder:"请填写6个字以上的问题描述或建议~"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),i("div",{staticClass:"rz-picter"},[e._m(0),i("div",{staticStyle:{display:"flex"}},[e._l(e.fileList,(function(t,a){return i("span",{key:a,staticClass:"img"},[i("img",{staticClass:"img",attrs:{src:t}}),i("img",{staticClass:"deleteIcon",attrs:{src:n("bafe")},on:{click:function(t){return e.deleteImg(a)}}})])})),e.isShowInput?i("span",{staticClass:"imgBlock",on:{click:e.chooseImage}},[i("img",{staticClass:"img-avatar",attrs:{src:n("0c3a"),alt:""}})]):e._e()],2),i("input",{ref:"avatarInput",staticStyle:{display:"none"},attrs:{type:"file",name:"avatar",id:"uppic",multiple:"multiple",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(t){return e.changeImage(t)}}})])])]),i("div",{staticStyle:{"margin-top":"3.2rem"}},[i("p",{staticClass:"feed-title"},[e._v("联系方式")]),i("div",{staticClass:"block1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"input-phone",attrs:{type:"text",placeholder:"请输入联系电话/QQ/微信/邮箱"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),i("div",{staticClass:"submit-btn",class:e.isDisabled?"opa5":"",on:{click:e.submit}},[e._v("提交")])])]),e.showDialog?i("pop-up",{attrs:{textMap:e.textMap,time:2}}):e._e()],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"upload-tip"},[e._v("上传图片最多"),n("i",{staticStyle:{color:"blue"}},[e._v("4")]),e._v("张")])}],o=(n("d81d"),n("a434"),n("4fad"),n("3835")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"problem-scene"},[n("p",{staticClass:"title"},[e._v("请选择问题发生场景")]),n("div",{staticClass:"pro-items"},e._l(e.prolist,(function(t,i){return n("p",{key:i,staticClass:"pro-item",on:{click:function(n){return e.selectPro(t.text1,t.text2,t.type)}}},[e._v(" "+e._s(t.text1)+" "),n("span",{staticClass:"text2"},[e._v(e._s(t.text2))])])})),0)])},r=[],c={data:function(){return{prolist:[{text1:"浏览内容相关",text2:"(如能提供截图能更快的解决问题)",type:1},{text1:"登录/注册相关",text2:"(填写联系方式能更快的解决问题)",type:2},{text1:"无法分享/分享被屏蔽相关",text2:"",type:3},{text1:"消息推送相关",text2:"",type:4},{text1:"卡顿/闪退相关",text2:"",type:5},{text1:"评论/收藏/点赞/关注相关",text2:"",type:6},{text1:"广告相关",text2:"",type:7},{text1:"金币相关",text2:"",type:8},{text1:"其他",text2:"",type:9}]}},methods:{selectPro:function(e,t,n){this.$emit("selectProFun",e,t,n)}}},u=c,l=(n("efd3"),n("2877")),f=Object(l["a"])(u,s,r,!1,null,"be92e36c",null),d=f.exports,p=n("c711"),h={data:function(){return{showScene:!1,phone:"",text:"",text1:"",text2:"",fileList:[],files:[],textMap:{text1:"感谢您提供的反馈",text2:"处理完会通知你哟~"},showDialog:!1,type:0}},components:{problemScene:d,popUp:p["a"]},computed:{isDisabled:function(){return!(this.text1&&(this.text||this.fileList.length>0||this.phone))},isShowInput:function(){return!(this.fileList.length>3)}},watch:{fileList:{handler:function(e){e.length>4&&(this.fileList.splice(4),this.files.splice(4))}}},methods:{chooseImage:function(){document.getElementById("uppic").click()},changeImage:function(e){var t=this;Object.entries(e.target.files).map((function(e){var n=Object(o["a"])(e,2),i=n[0],a=n[1];console.log(i,a);var s=new FileReader,r=t;s.readAsDataURL(a),s.onload=function(e){console.log(e),r.fileList.push(this.result),r.files.push(a)}}))},selectProFun:function(e,t,n){this.showScene=!1,this.text1=e,this.text2=t,this.type=n},deleteImg:function(e){this.fileList.splice(e,1),this.files.splice(e,1)},submit:function(){var e=this;if(!this.isDisabled){console.log("TTT",this.files);var t=new FormData;t.append("type",this.type),t.append("describe",this.text),t.append("contact",this.phone);for(var n=0;n<this.files.length;n++)t.append("file"+n,this.files[n]);this.$post(this.API["feedback"],t).then((function(t){console.log(t.status),0===t.status&&(e.showDialog=!0)}))}}}},m=h,v=(n("1f53"),Object(l["a"])(m,i,a,!1,null,"08433511",null));t["default"]=v.exports},efd3:function(e,t,n){"use strict";var i=n("e07d"),a=n.n(i);a.a},fc62:function(e,t,n){}});
//# sourceMappingURL=feeback.96d7cd47.js.map