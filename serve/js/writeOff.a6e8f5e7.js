(function(t){function e(e){for(var s,i,c=e[0],o=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={writeOff:0},a={writeOff:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-12eca0f6":"2a91c347","chunk-16e56f20":"3c52914e","chunk-381f78a7":"580f523c","chunk-7062d6f1":"5b4c15da","chunk-bf065022":"2a298abe","chunk-5b15a6dc":"8d03e26b"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-16e56f20":1,"chunk-381f78a7":1,"chunk-7062d6f1":1,"chunk-bf065022":1,"chunk-5b15a6dc":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var s="css/"+({}[t]||t)+"."+{"chunk-12eca0f6":"31d6cfe0","chunk-16e56f20":"653f67c2","chunk-381f78a7":"2e544b03","chunk-7062d6f1":"73a92354","chunk-bf065022":"e3590d1f","chunk-5b15a6dc":"ff21a13a"}[t]+".css",a=o.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===s||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([5,"chunk-vendors"]),n()})({"0482":function(t,e,n){"use strict";var s=n("d2d5"),i=n.n(s);i.a},"0993":function(t,e){t.exports="data:image/png;base64,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"},"1da4":function(t,e,n){},"1fe8":function(t,e){t.exports="data:image/png;base64,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"},"20d7":function(t,e,n){},"281b":function(t,e,n){"use strict";var s=n("700c"),i=n.n(s);i.a},"3d3d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"container step"+t.step},[1==t.step?n("step1",{on:{next:t.next}}):t._e(),2==t.step||3==t.step||4==t.step?n("step2",{attrs:{step:t.step},on:{next:t.next}}):t._e(),"protocal"==t.step?n("protocal"):t._e(),"verify"==t.step?n("verify",{on:{next:t.next}}):t._e(),"complete"==t.step?n("complete"):t._e(),"result"==t.step?n("result",{attrs:{passed:t.passed,eliminate_id:t.eliminate_id}}):t._e()],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tip"},[t._v("请选择注销账号原因")]),n("div",{staticClass:"reasons"},t._l(t.reasons,(function(e,s){return n("label",{key:s,staticClass:"item",class:{active:t.checked.includes(s)}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{value:s,checked:Array.isArray(t.checked)?t._i(t.checked,s)>-1:t.checked},on:{change:function(e){var n=t.checked,i=e.target,a=!!i.checked;if(Array.isArray(n)){var r=s,c=t._i(n,r);i.checked?c<0&&(t.checked=n.concat([r])):c>-1&&(t.checked=n.slice(0,c).concat(n.slice(c+1)))}else t.checked=a}}}),t._v(" "+t._s(e)+" ")])})),0),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.elseReason,expression:"elseReason"}],staticClass:"area_input",attrs:{placeholder:"请输入其他原因"},domProps:{value:t.elseReason},on:{input:function(e){e.target.composing||(t.elseReason=e.target.value)}}})]),n("button",{staticClass:"btnSubmit",on:{click:t.next}},[t._v("下一步")])])},r=[],c=(n("a15b"),{data:function(){return{reasons:["产品体验不好","不想接受营销信息","推送广告太多","隐私考虑","其他原因"],checked:[],elseReason:""}},methods:{next:function(){sessionStorage.setItem("reasons",this.checked.join(",")),sessionStorage.setItem("elseReason",this.elseReason),this.$emit("next")}}}),o=c,u=(n("98f9"),n("2877")),l=Object(u["a"])(o,a,r,!1,null,"262a36fa",null),d=l.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"tip"},[t._v("在你提交的注销申请生效前，需要满足以下条件以保证你的账号安以、财产安全")]),s("div",{staticClass:"content"},[s("ul",[2==t.step?[t._m(0),s("li",[t._v("·账号无法登录、授权的第三方账号也将无效")]),s("li",[t._v("·账号信息永久删除（关注、粉丝、个人信息）")]),s("li",[t._v("·用户信息清空（手机绑定、实名认证）")]),t._m(1),s("li",[t._v("·账号1个月内没有修改密码，改绑等敏感行为")]),s("li",[t._v("·帐号无任何纠纷，包括投诉举报或被投诉举报")]),s("li",[t._v("·帐号为正常使用中的帐号无任何被限制的记录")])]:t._e(),3==t.step||4==t.step?[s("li",{staticClass:"title1"},[1==t.is_safety?s("img",{staticClass:"icon",attrs:{src:n("0993")}}):s("img",{staticClass:"icon",attrs:{src:n("1fe8")}}),t._v(" 账号处于安全状态 ")]),s("li",{staticClass:"title1"},[1==t.is_dispute?s("img",{staticClass:"icon",attrs:{src:n("0993")}}):s("img",{staticClass:"icon",attrs:{src:n("1fe8")}}),t._v(" 账号无任何纠纷，包括举报和反馈 ")]),s("li",{staticClass:"title1"},[1==t.is_banned?s("img",{staticClass:"icon",attrs:{src:n("0993")}}):s("img",{staticClass:"icon",attrs:{src:n("1fe8")}}),t._v(" 账号未被封禁 ")])]:t._e()],2)]),2==t.step||4==t.step?s("div",{staticClass:"mt1"},[s("label",{staticClass:"protocal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkd,expression:"checkd"}],staticStyle:{"margin-right":"7px"},attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checkd)?t._i(t.checkd,"1")>-1:t.checkd},on:{change:[function(e){var n=t.checkd,s=e.target,i=!!s.checked;if(Array.isArray(n)){var a="1",r=t._i(n,a);s.checked?r<0&&(t.checkd=n.concat([a])):r>-1&&(t.checkd=n.slice(0,r).concat(n.slice(r+1)))}else t.checkd=i},t.change]}}),t._v(" 我已阅读并同意“ "),s("a",{on:{click:function(e){return t.jump("/writeOff.html?step=protocal")}}},[t._v("注销协议")]),t._v("” ")]),t.error?s("div",{staticClass:"error"},[t._v("请勾选我已阅读并同意“注销协议”")]):t._e()]):t._e(),t.canNext||3!=t.step?4==t.step?s("button",{staticClass:"btnSubmit",on:{click:t.next}},[t._v("开始注销")]):s("button",{staticClass:"btnSubmit",on:{click:t.next}},[t._v("下一步")]):s("div",{staticClass:"error mt1"},[t._v("该账号目前处于封禁状态，不可注销")])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"title"},[n("span",{staticClass:"circle"},[t._v("1")]),t._v("注销行为将清空个人信息，且不可恢复 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"title mt1"},[n("span",{staticClass:"circle"},[t._v("2")]),t._v("注销需要满足以下条件 ")])}],h={props:["step"],data:function(){return{checkd:[],error:!1,status:"",is_safety:0,is_dispute:1,is_banned:1}},computed:{canNext:function(){return this.is_safety&&this.is_dispute&&this.is_banned}},mounted:function(){3==this.step&&this.getUserStatus()},methods:{jump:function(t){console.log("jump",t),window.location.href=t},change:function(){this.error=!1},next:function(){switch(console.log("this.step",this.step),this.step){case"2":this.checkd.length?this.$emit("next","3"):this.error=!0;break;case"3":this.getUserLoginType();break;case"4":console.log("开始注销"),this.checkd.length?this.startUserOffSubmit():this.error=!0;break;default:break}},getUserStatus:function(){var t=this;this.$get(this.API["userCancelStatus"]).then((function(e){e&&0===e.status&&(t.status="canOff",t.is_safety=e.data.is_safety,t.is_dispute=e.data.is_dispute,t.is_banned=e.data.is_banned)}))},getUserLoginType:function(){var t=this;this.$get(this.API["userOffStatus"]).then((function(e){0===e.status&&(e.data.is_bind_mobile?t.$emit("next","verify"):t.$emit("next",4))}))},startUserOffSubmit:function(){var t=this,e=sessionStorage.getItem("reasons"),n=sessionStorage.getItem("elseReason");this.$post(this.API["userOffSubmit"],{type:e,remove_remark:n}).then((function(e){0===e.status&&t.$emit("next","complete")}))}}},v=h,m=(n("4645"),Object(u["a"])(v,f,p,!1,null,"4387c6f8",null)),g=m.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("在您注销您的帐号之前，请充分阅读、理解并同意下列事项：")]),n("br"),n("p",[t._v("我们对您注销速播账号的决定深表遗憾。您注销帐号的行为，将导致我们终止对您提供本服务，可能会给您的后续使用带来不便。注销成功后，我们将删除您的个人信息，使其保持不可被检索、访问的状态，或对其进行匿名化处理。请您知晓并理解，根据相关法律规定相关交易记录须保存 1 年甚至更长的时间。")]),n("p",[t._v("如果您仍需要注销帐号，您的帐号需同时满足以下条件：")]),n("p",[t._v("帐号无任何纠纷，包括投诉举报或被投诉举报； 帐号为正常使用中的帐号且无任何帐号被限制的记录；")]),n("p",[t._v("在帐号注销期间，如果您乎帐号涉及争议纠纷，包括但不限于投诉、举报、诉讼、仲裁、国家有权机关调查等，速播有权自行终止本帐号的注销而无需另行得到您的同意。")]),n("br"),n("p",[t._v("请您在提交注销申请前，务必解绑其他相关帐号 帐号一旦被注销将不可恢复，请您在操作之前自行备份帐号相关的所有信息和数据。注销帐号，您将无法再使用本帐号，也将无法找回您帐号中及与帐号相关的任何内容或信息（即使您使用相同的手机号码再次注册并使用速播），")]),n("p",[t._v("包括但不限于：您将无法登录、使用帐号； 帐号的个人资料和历史信息（包括但不限于用户名、昵称、头像、问题、回答、站内信等）都将无法找回；")]),n("p",[t._v("您将无法再登录、使用前述服务，您曾获得的金币、及其他卡券等视为您自行放弃，将无法继续使用。您理解并同意，速播无法协助您重新恢复前述服务。")]),n("br"),n("p",[t._v("帐号注销后您已发布的所有内容将转为匿名发布，如需删除内容，请在申请注销前自行处理。 注销帐号并不代表帐号注销前的帐号行为和相关责任得到豁免或减轻。")])])}],C=(n("d185"),{}),k=Object(u["a"])(C,A,b,!1,null,"0a54138c",null),w=k.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"111px"}},[n("p",{staticClass:"font01"},[t._v("申请已提交")]),n("p",{staticClass:"font01",staticStyle:{"margin-bottom":"18px"}},[t._v("请等待我们工作人员审核")]),n("p",{staticClass:"font02"},[t._v("我们的工作人员会在5-10日内反馈，请回到当前页面查看申请结果，申请通过后需要在当前页面进行最终确认，才能完成注销")])])}],S=(n("281b"),{}),_=Object(u["a"])(S,y,x,!1,null,"4dd9060b",null),O=_.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font01"},[t._v(t._s(t.passed?"申请已通过":"申请未通过"))]),n("div",[n("p",{staticClass:"font02"},[t._v(t._s(t.passed?"点击注销将清空个人信息，且不可恢复 ":"未通过理由如下"))]),t._m(0)]),t.passed?n("div",{staticClass:"tools"},[n("button",{staticClass:"btn",on:{click:t.cancel}},[t._v("撤销注销")]),n("button",{staticClass:"btn",on:{click:t.submit}},[t._v("确定注销")])]):t._e(),t.showDialog?n("pop-up",{attrs:{textMap:t.msg,time:2},on:{closeCallback:t.closeWindow}}):t._e()],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"font03"},[t._v("·账号无法登录、授权的第三方账号也将无效")]),n("li",{staticClass:"font03"},[t._v("·账号信息永久删除（关注、粉丝、个人信息）")]),n("li",{staticClass:"font03"},[t._v("·用户信息清空（手机绑定、实名认证")])])}],I=n("c8a8"),j={props:{passed:{type:Boolean,default:!0},eliminate_id:{type:String,default:"0"}},data:function(){return{showDialog:!1,msg:{text1:"撤销注销成功 ~",text2:""}}},methods:{cancel:function(){var t=this;this.$post(this.API["userOffCancel"],{eliminateId:this.eliminate_id}).then((function(e){0===e.status&&(t.showDialog=!0,t.msg.text1="撤销注销成功 ~")}))},submit:function(){var t=this;this.$post(this.API["userOffConfirm"],{eliminateId:this.eliminate_id}).then((function(e){0===e.status&&(t.showDialog=!0,t.msg.text1="账号注销成功 ~",Object(I["b"])())}))},closeWindow:function(){Object(I["a"])()}}},B=j,D=(n("7b73"),Object(u["a"])(B,E,U,!1,null,"c1fc844c",null)),X=D.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("请输入验证码")]),n("div",{staticClass:"vcode",attrs:{id:"vertifycode"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"code",staticClass:"code",attrs:{type:"tel",maxlength:"6",id:"code",disabled:t.disabled},domProps:{value:t.code},on:{focus:function(e){t.focus=!0},blur:function(e){t.focus=!1},input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("div",{staticClass:"labels"},t._l(t.length,(function(e,s){return n("label",{key:s,staticClass:"label",class:{active:!0===t.focus&&s===t.currentIndex},attrs:{for:"code"},domProps:{textContent:t._s(t.arrCode[s])}})})),0),n("p",{staticClass:"text-right"},[n("span",{staticClass:"sendCode",class:{hasSend:0!=t.count},on:{click:t.sendCode}},[t._v("发送验证码 "+t._s(0!=t.count?"("+t.count+"s)":""))])]),n("button",{staticClass:"btnSubmit mt",on:{click:t.next}},[t._v("开始注销")])])])},P=[],Q=(n("d81d"),n("ac1f"),n("5319"),n("1276"),{data:function(){return{count:0,length:4,code:"",focus:!1,disabled:!1,interval:null}},computed:{arrCode:function(){return this.code.split("")||[]},currentIndex:function(){return this.code.length}},watch:{code:function(t,e){this.code=t.replace(/[^\d]/g,""),t.length>=4&&(this.disabled=!0,this.$refs.code.blur(),this.next())},count:function(t){var e=this;t&&(this.interval=setTimeout((function(){e.count--,clearTimeout(e.interval)}),1e3))}},mounted:function(){},methods:{sendCode:function(){var t=this;this.count<=0&&this.$post(this.API["sendCode"]).then((function(e){0===e.status&&(t.count=60)}))},startUserOffSubmit:function(){var t=this,e=sessionStorage.getItem("reasons"),n=sessionStorage.getItem("elseReason");this.$post(this.API["userOffSubmit"],{type:(e||"").split(",").map((function(t){return parseInt(t)})),remove_remark:n,verification_code:this.code}).then((function(e){0===e.status&&t.$emit("next","complete")}))},next:function(){console.log("next",this.code),this.code.length<4||this.startUserOffSubmit()}}}),R=Q,V=(n("0482"),Object(u["a"])(R,T,P,!1,null,"0f5ab64a",null)),F=V.exports,M={components:{step1:d,step2:g,protocal:w,complete:O,result:X,verify:F},data:function(){return{step:1,passed:!0,eliminate_id:"12"}},mounted:function(){console.log("this.$route",this.$route),this.$route.query.step?this.step=this.$route.query.step:this.getStatus()},methods:{next:function(t){t?this.step=t:this.step++;var e=window.location.pathname+"?step="+this.step;window.location.href=e},getStatus:function(){var t=this;this.$get(this.API["userOffStatus"]).then((function(e){if(e&&0===e.status)switch(e.data.status){case 1:t.step=1;break;case 2:t.step="complete";break;case 3:t.step="result",t.passed=!0,t.eliminate_id=e.data.eliminate_id;break;case 4:t.step="result",t.passed=!1;break;default:t.step=t.$route.query.step||1;break}}))}}},L=M,W=(n("a286"),n("c769"),Object(u["a"])(L,s,i,!1,null,"097aeb1c",null));e["default"]=W.exports},4645:function(t,e,n){"use strict";var s=n("6f5f"),i=n.n(s);i.a},"489d":function(t,e,n){},5:function(t,e,n){t.exports=n("b9bd")},"56d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var s=n("2b0e"),i=n("8c4f");s["a"].use(i["a"]);var a=new i["a"]({mode:"history",routes:[{path:"/",component:function(t){return n.e("chunk-5b15a6dc").then(function(){var e=[n("4f40")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/feedback",name:"feedback",component:function(t){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-16e56f20")]).then(function(){var e=[n("e969")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/report",name:"report",component:function(t){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-bf065022")]).then(function(){var e=[n("9e92")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/coinDetail",name:"coinDetail",component:function(t){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-381f78a7")]).then(function(){var e=[n("0e46")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myFeedback",name:"myFeedback",component:function(t){return Promise.all([n.e("chunk-12eca0f6"),n.e("chunk-7062d6f1")]).then(function(){var e=[n("7acb")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/注销",name:"writeOff",component:function(t){return n.e("chunk-1fe2223a").then(function(){var e=[n("3d3d")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),r=(n("d34d"),{signCalendar:"/user/v2/gold/signCalendar",signIn:"/user/v2/gold/signIn",taskList:"/user/v2/gold/taskList",finishTask:"/user/v2/gold/finishTask",record:"/user/v2/gold/record",feedback:"/user/v2/feedback",userInfo:"/user/v2/getInfo",submitAccuse:"/cmu/v1/accuse",userOffStatus:"/user/v2/close/userStatus",userCancelStatus:"/user/v2/close/cancelStatus",userOffSubmit:"/user/v2/close/submit",userOffCancel:"/user/v2/close/cancel",userOffConfirm:"/user/v2/close/confirm",sendCode:"/user/v2/info/sendCode"}),c=r,o=(n("d3b7"),n("96cf"),n("1da1")),u=n("bc3a"),l=n.n(u),d=n("c8a8");console.log("window",window);var f=l.a.create({baseURL:window.location.origin});function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,s){f.post(t,e).then((function(t){t.data&&n(t.data)}),(function(t){throw t})).catch((function(t){s(t)}))}))}f.interceptors.request.use(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,s,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=sessionStorage.getItem("Authorization"),s=sessionStorage.getItem("UA"),n&&s){t.next=21;break}return t.prev=3,t.next=6,Object(d["c"])();case 6:return i=t.sent,t.next=9,Object(d["d"])();case 9:a=t.sent,e.headers["Authorization"]=i,e.headers["User-Agent"]=a,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](3),console.log(t.t0);case 17:return console.log(e),t.abrupt("return",e);case 21:return e.headers["Authorization"]=n,e.headers["User-Agent"]=s,console.log(e),t.abrupt("return",e);case 25:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}()),f.interceptors.response.use((function(t){return t}));var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="?";for(var s in e)e[s]&&(n+=s+"="+e[s]+"&");return n=n.substring(0,n.length-1),t+n};function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,s){f.get(h(t,e)).then((function(t){t.data&&n(t.data)}),(function(t){throw t})).catch((function(t){s(t)}))}))}var m=n("2b27"),g=n.n(m),A=n("c711"),b=n("3a34"),C=n.n(b);s["a"].config.productionTip=!1,s["a"].prototype.API=c,s["a"].prototype.$post=p,s["a"].prototype.$get=v,s["a"].use(g.a),s["a"].component("popUp",A["a"]);var k=new C.a;function w(t){new s["a"]({render:function(e){return e(t)},router:a}).$mount("#app")}s["a"].use(k)},"6f5f":function(t,e,n){},"700c":function(t,e,n){},"790e":function(t,e,n){},"79b0":function(t,e,n){"use strict";var s=n("1da4"),i=n.n(s);i.a},"7b73":function(t,e,n){"use strict";var s=n("97ad"),i=n.n(s);i.a},"95b4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD0SURBVHgBtdPBDYIwFAbgHw2ehDiCoziCRw+CMAoTMIKoiXc3cAMcxYR4UvJ8rYFoLFCg/S/Ao+nXvLaAxcy3tPJDyr2QyA8oFTUHlsLIjh/Zd42AZAoLUWGVOIHhNGKQ2MVoS9swzqE4OpExUAcTL0ZAXawGFxtaPl2sucf34uRksIRJUGDlDLlwZYWQMRrDAiYyeblIa0wuAZEX0B4WMAkqh3egQzEJUomkDzoGk+Dj7Nx432IddCz2mbKaLKCIv9Rt5IPE/65jsR+wE22ONvYHDkB7YUqwB9obawQ10EFYK9iCDsY6QQU6CtOOQPkOZjCQN3ZUiCusA0zrAAAAAElFTkSuQmCC"},"97ad":function(t,e,n){},"98f9":function(t,e,n){"use strict";var s=n("489d"),i=n.n(s);i.a},a286:function(t,e,n){"use strict";var s=n("f1ff"),i=n.n(s);i.a},b9bd:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("3d3d"),i=n("56d7");Object(i["a"])(s["default"])},c711:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isshowDialog?n("div",{staticClass:"feed-dialog"},[t._m(0),n("div",{staticClass:"feed-dialog-text"},[t._v(t._s(t.textMap.text1))]),n("div",{staticClass:"feed-dialog-text"},[t._v(t._s(t.textMap.text2))])]):t._e()},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"5px"}},[s("img",{attrs:{src:n("95b4")}})])}],a=(n("a9e3"),{data:function(){return{isshowDialog:!0}},props:{textMap:{typr:Object},time:{type:Number}},mounted:function(){var t=this;setTimeout((function(){t.isshowDialog=!1,t.$emit("closeCallback")}),1e3*this.time)}}),r=a,c=(n("79b0"),n("2877")),o=Object(c["a"])(r,s,i,!1,null,"3c75f608",null);e["a"]=o.exports},c769:function(t,e,n){"use strict";var s=n("20d7"),i=n.n(s);i.a},c8a8:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));n("c975"),n("d3b7"),n("ac1f"),n("466d"),n("5319");var s=navigator.userAgent,i=s.indexOf("Android")>-1||s.indexOf("Adr")>-1,a=!!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);function r(t){if(a){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout((function(){document.documentElement.removeChild(e)}),0)}i&&(window.WebViewJavascriptBridge?t(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",(function(){t(WebViewJavascriptBridge)}),!1))}function c(){return console.log("getJWT start"),new Promise((function(t,e){if(a)r((function(e){e.callHandler("suboNTGetJWT",{source:"我要来获取JWT了，快给我"},(function(e){console.log(e);var n=e.replace("Authorization=","");sessionStorage.setItem("Authorization",n),t(n)}))})),setTimeout((function(){e("isiOS error:cannot get JWT")}),3e3);else if(i&&window.JSBridge){var n=window.JSBridge.getJWT();n?(sessionStorage.setItem("Authorization",n),t("Bearer "+n)):(console.log("error",window.JSBridge),e("isAndroid error:cannot get JWT"))}else e("error")}))}function o(){return console.log("getUA start"),new Promise((function(t,e){if(a)r((function(e){e.callHandler("suboNTGetUA",{},(function(e){var n=e.replace("User-Agent=","");sessionStorage.setItem("UA",n),t(n)}))})),setTimeout((function(){e("isiOS error:cannot get UA")}),3e3);else if(i&&window.JSBridge){var n=window.JSBridge.getUA();n?(sessionStorage.setItem("UA",n),t(n)):(console.log("error",window.JSBridge),e("isAndroid error:cannot get UA"))}else e("error")}))}function u(){a&&r((function(t){t.callHandler("suboNTClose")})),i&&window.JSBridge.finish()}function l(){a&&r((function(t){t.callHandler("suboNTLogout",{},(function(t){}))})),i&&window.JSBridge.exitLogin()}},d185:function(t,e,n){"use strict";var s=n("790e"),i=n.n(s);i.a},d2d5:function(t,e,n){},d34d:function(t,e,n){},f1ff:function(t,e,n){}});
//# sourceMappingURL=writeOff.a6e8f5e7.js.map