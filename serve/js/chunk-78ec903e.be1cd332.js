(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ec903e"],{"1c5f":function(t,s,i){},"2e71":function(t,s,i){t.exports=i.p+"img/coinLeft.d92aa8b1.png"},"4f40":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"task"},[a("div",{staticClass:"header-container"},[a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"coinImg"},[a("img",{staticClass:"coinLeft",attrs:{src:i("2e71")}}),a("span",{staticClass:"myCoinNum"},[t._v(t._s(t.myCoin))])])])]),a("div",{staticClass:"signBlock"},[a("p",{staticClass:"signText"},[t._v(" "+t._s(t.signNum)+" "),a("span",{staticClass:"signTip1"},[t._v("（连续签到翻倍金币哦）")])]),a("div",{staticClass:"coinItems"},t._l(t.coin,(function(s,i){return a("div",{key:i,staticClass:"coinItem"},[a("span",{staticClass:"coinText1",class:s.is_sign?"coinText2":"coinText1"},[t._v(t._s(s.is_double?"翻倍":s.score))]),s.is_sign?a("i",{staticClass:"check-icon"}):t._e(),(t.coin[i-1]||{}).is_today?a("i",{staticClass:"tips-icon"},[t._v("明日可领")]):t._e(),a("p",{staticClass:"signTip2"},[t._v(t._s(s.is_today?"今日":s.title.slice(-2)))])])})),0),a("div",{staticClass:"signBtn",class:{signed:t.hasSigned},on:{click:t.nowSign}},[t._v(t._s(t.hasSigned?"今日已签到":"立即签到"))])]),a("div",{staticClass:"noviceBlock"},[a("p",{staticClass:"taskTitle"},[t._v("新手任务")]),t._l(t.noviceDataList,(function(s,i){return a("div",{key:i,staticClass:"taskItems"},[a("div",{staticClass:"noviceCol1"},[a("img",{attrs:{height:"32",width:"32",src:s.pic}})]),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[t._v(t._s(s.title)+"("+t._s((s.schedule||{}).achieve)+"/"+t._s((s.schedule||{}).total)+")")]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(s.score))]),t._v("金币 ")])]),a("div",{staticClass:"noviceCol3",class:{go:0==s["status"],wait:1==s["status"],complete:2==s["status"],process:3==s["status"]},on:{click:function(i){return t.hanlderClick(s)}}},[t._v(t._s(t._f("swichStatus")(s.status)))])])}))],2),a("div",{staticClass:"everydayBlock"},[a("p",{staticClass:"taskTitle"},[t._v("每日任务")]),t._l(t.everydayDataList,(function(s,i){return a("div",{key:i,staticClass:"taskItems"},[a("div",{staticClass:"noviceCol1"},[a("img",{attrs:{height:"32",width:"32",src:s.pic}})]),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[t._v(t._s(s.title)+"("+t._s((s.schedule||{}).achieve)+"/"+t._s((s.schedule||{}).total)+")")]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(s.score))]),t._v("金币 ")])]),a("div",{staticClass:"noviceCol3",class:{go:0==s["status"],wait:1==s["status"],complete:2==s["status"],process:3==s["status"]},on:{click:function(i){return t.hanlderClick(s)}}},[t._v(t._s(t._f("swichStatus")(s.status)))])])}))],2),a("div",{staticClass:"supplementTip"},[t._v("更多任务正在开启中敬请期待哦～")]),t.isShowSignDialog?a("sign-dialog",{attrs:{is_double:t.is_double},on:{unwanted:t.unwanted}}):t._e()],1)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"coinDetails"},[i("span",{staticClass:"myCoin"},[t._v("我的金币")]),i("span",{staticClass:"coindetail"},[i("a",{attrs:{href:"coinDetail.html"}},[t._v("金币明细")])])])}],e=(i("7db0"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.isshowDialog?i("div",{staticClass:"feed-dialog"},[i("div",{staticClass:"feed-dialog-text"},[t._v("签到成功获得金币+466(金币数）"),t.is_double?i("span",[t._v("翻倍+466")]):t._e()]),i("div",{staticClass:"feed-dialog-text",staticStyle:{"margin-top":"1px"}},[t._v("看视频翻倍金币哦～")]),i("div",{staticClass:"btn"},[i("span",{staticClass:"btnLeft",on:{click:t.unwanted}},[t._v("不需要")]),i("span",{staticClass:"btnRight",on:{click:t.Doubling}},[t._v("翻倍")])])]):t._e()}),c=[],o={data:function(){return{isshowDialog:!0}},props:{is_double:{type:Boolean}},mounted:function(){},methods:{unwanted:function(){this.$emit("unwanted")},Doubling:function(){}}},r=o,l=(i("e47a"),i("2877")),u=Object(l["a"])(r,e,c,!1,null,"4eef2bb6",null),d=u.exports,f={data:function(){return{hasSigned:!1,coin:[],signNum:0,noviceDataList:[],everydayDataList:[],myCoin:"0",isShowSignDialog:!1,is_double:!1,userInfo:{}}},filters:{swichStatus:function(t){switch(t){case 0:return"去完成";case 1:return"领取";case 2:return"已完成";case 3:return"已领取"}}},components:{signDialog:d},mounted:function(){this.getUserInfo(),this.signCalendar(),this.getTaskList()},methods:{getUserInfo:function(){var t=this;this.$get(this.API["userInfo"]).then((function(s){t.userInfo=s.data.user_info,t.myCoin=t.userInfo.score}))},signCalendar:function(){var t=this;this.$get(this.API["signCalendar"]).then((function(s){t.signNum=s.data.aggregate,t.coin=s.data.calendar,t.hasSigned=t.coin.find((function(t){return!!t.is_sign&&!!t.is_today}))}))},getTaskList:function(){var t=this;this.$get(this.API["taskList"]).then((function(s){s.data&&(t.noviceDataList=s.data.noob_task||[],t.everydayDataList=s.data.daily_task||[])}))},nowSign:function(){var t=this;this.$post(this.API["signIn"]).then((function(s){0===s.status&&(t.is_double=1===s.data.is_double,t.isShowSignDialog=!0,t.getUserInfo(),t.signCalendar(),t.getTaskList())}))},hanlderClick:function(t){1==t.status&&(this.$set(t,"status",3),this.finishTask(t.task_id)),t.status},finishTask:function(t){var s=this;this.$post(this.API["finishTask"],{task_id:parseInt(t)}).then((function(){s.getUserInfo(),s.signCalendar(),s.getTaskList()}))},unwanted:function(){this.isShowSignDialog=!1}}},v=f,h=(i("a43a"),i("8bc4"),Object(l["a"])(v,a,n,!1,null,"3723c702",null));s["default"]=h.exports},"65f0":function(t,s,i){var a=i("861d"),n=i("e8b5"),e=i("b622"),c=e("species");t.exports=function(t,s){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===s?0:s)}},"6b41":function(t,s,i){},"7db0":function(t,s,i){"use strict";var a=i("23e7"),n=i("b727").find,e=i("44d2"),c=i("ae40"),o="find",r=!0,l=c(o);o in[]&&Array(1)[o]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),e(o)},"8bc4":function(t,s,i){"use strict";var a=i("6b41"),n=i.n(a);n.a},a43a:function(t,s,i){"use strict";var a=i("1c5f"),n=i.n(a);n.a},ae40:function(t,s,i){var a=i("83ab"),n=i("d039"),e=i("5135"),c=Object.defineProperty,o={},r=function(t){throw t};t.exports=function(t,s){if(e(o,t))return o[t];s||(s={});var i=[][t],l=!!e(s,"ACCESSORS")&&s.ACCESSORS,u=e(s,0)?s[0]:r,d=e(s,1)?s[1]:void 0;return o[t]=!!i&&!n((function(){if(l&&!a)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:r}):t[1]=1,i.call(t,u,d)}))}},b727:function(t,s,i){var a=i("0366"),n=i("44ad"),e=i("7b0b"),c=i("50c4"),o=i("65f0"),r=[].push,l=function(t){var s=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(v,h,_,g){for(var C,p,b=e(v),m=n(b),k=a(h,_,3),y=c(m.length),w=0,S=g||o,I=s?S(v,y):i?S(v,0):void 0;y>w;w++)if((f||w in m)&&(C=m[w],p=k(C,w,b),t))if(s)I[w]=p;else if(p)switch(t){case 3:return!0;case 5:return C;case 6:return w;case 2:r.call(I,C)}else if(u)return!1;return d?-1:l||u?u:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},dbab:function(t,s,i){},e47a:function(t,s,i){"use strict";var a=i("dbab"),n=i.n(a);n.a},e8b5:function(t,s,i){var a=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-78ec903e.be1cd332.js.map