(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7820746"],{"1c5f":function(t,s,i){},"2e71":function(t,s,i){t.exports=i.p+"img/coinLeft.d92aa8b1.png"},"4f40":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"task"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"header"},[t._m(0),n("div",{staticClass:"coinImg"},[n("img",{staticClass:"coinLeft",attrs:{src:i("2e71")}}),n("span",{staticClass:"myCoinNum"},[t._v(t._s(t.myCoin))])])])]),n("div",{staticClass:"signBlock"},[n("p",{staticClass:"signText"},[t._v(" "+t._s(t.signNum)+" "),n("span",{staticClass:"signTip1"},[t._v("（连续签到翻倍金币哦）")])]),n("div",{staticClass:"coinItems"},t._l(t.coin,(function(s,i){return n("div",{key:i,staticClass:"coinItem"},[n("span",{staticClass:"coinText1",class:s.is_sign?"coinText2":"coinText1"},[t._v(t._s(s.is_double?"翻倍":s.score))]),s.is_sign?n("i",{staticClass:"check-icon"}):t._e(),(t.coin[i-1]||{}).is_today?n("i",{staticClass:"tips-icon"},[t._v("明日可领")]):t._e(),n("p",{staticClass:"signTip2"},[t._v(t._s(s.is_today?"今日":s.title.slice(-2)))])])})),0),n("div",{staticClass:"signBtn",class:{signed:t.hasSigned},on:{click:t.nowSign}},[t._v(t._s(t.hasSigned?"今日已签到":"立即签到"))])]),n("div",{staticClass:"noviceBlock"},[n("p",{staticClass:"taskTitle"},[t._v("新手任务")]),t._l(t.noviceDataList,(function(s,i){return n("div",{key:i,staticClass:"taskItems"},[n("div",{staticClass:"noviceCol1"},[n("img",{attrs:{height:"32",width:"32",src:s.pic}})]),n("div",{staticClass:"noviceCol2"},[n("p",{staticClass:"col2Title"},[t._v(t._s(s.title)+"("+t._s((s.schedule||{}).achieve)+"/"+t._s((s.schedule||{}).total)+")")]),n("p",{staticClass:"col2text"},[n("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(s.score))]),t._v("金币 ")])]),n("div",{staticClass:"noviceCol3",class:{go:0==s["status"],wait:1==s["status"],complete:2==s["status"]},on:{click:function(i){return t.hanlderClick(s)}}},[t._v(t._s(t._f("swichStatus")(s.status)))])])}))],2),n("div",{staticClass:"everydayBlock"},[n("p",{staticClass:"taskTitle"},[t._v("每日任务")]),t._l(t.everydayDataList,(function(s,i){return n("div",{key:i,staticClass:"taskItems"},[n("div",{staticClass:"noviceCol1"},[n("img",{attrs:{height:"32",width:"32",src:s.pic}})]),n("div",{staticClass:"noviceCol2"},[n("p",{staticClass:"col2Title"},[t._v(t._s(s.title)+"("+t._s((s.schedule||{}).achieve)+"/"+t._s((s.schedule||{}).total)+")")]),n("p",{staticClass:"col2text"},[n("span",{staticClass:"col2CoinNum"},[t._v("+"+t._s(s.score))]),t._v("金币 ")])]),n("div",{staticClass:"noviceCol3",class:{go:0==s["status"],wait:1==s["status"],complete:2==s["status"]},on:{click:function(i){return t.hanlderClick(s)}}},[t._v(t._s(t._f("swichStatus")(s.status)))])])}))],2),n("div",{staticClass:"supplementTip"},[t._v("更多任务正在开启中敬请期待哦～")]),t.isShowSignDialog?n("sign-dialog",{attrs:{is_double:t.is_double},on:{unwanted:t.unwanted}}):t._e()],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"coinDetails"},[i("span",{staticClass:"myCoin"},[t._v("我的金币")]),i("span",{staticClass:"coindetail"},[i("a",{attrs:{href:"coinDetail.html"}},[t._v("金币明细")])])])}],e=(i("7db0"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.isshowDialog?i("div",{staticClass:"feed-dialog"},[i("div",{staticClass:"feed-dialog-text"},[t._v("签到成功获得金币+466(金币数）"),t.is_double?i("span",[t._v("翻倍+466")]):t._e()]),i("div",{staticClass:"feed-dialog-text",staticStyle:{"margin-top":"1px"}},[t._v("看视频翻倍金币哦～")]),i("div",{staticClass:"btn"},[i("span",{staticClass:"btnLeft",on:{click:t.unwanted}},[t._v("不需要")]),i("span",{staticClass:"btnRight",on:{click:t.Doubling}},[t._v("翻倍")])])]):t._e()}),c=[],o={data:function(){return{isshowDialog:!0}},props:{is_double:{type:Boolean}},mounted:function(){},methods:{unwanted:function(){this.$emit("unwanted")},Doubling:function(){}}},r=o,l=(i("e47a"),i("2877")),u=Object(l["a"])(r,e,c,!1,null,"4eef2bb6",null),d=u.exports,f={data:function(){return{hasSigned:!1,coin:[],signNum:0,noviceDataList:[],everydayDataList:[],myCoin:"0",isShowSignDialog:!1,is_double:!1,userInfo:{}}},filters:{swichStatus:function(t){switch(t){case 0:return"去完成";case 1:return"领取";case 2:return"已完成"}}},components:{signDialog:d},mounted:function(){this.getUserInfo(),this.signCalendar(),this.getTaskList()},methods:{getUserInfo:function(){var t=this;this.$get(this.API["userInfo"]).then((function(s){t.userInfo=s.data.user_info,t.myCoin=t.userInfo.score}))},signCalendar:function(){var t=this;this.$get(this.API["signCalendar"]).then((function(s){t.signNum=s.data.aggregate,t.coin=s.data.calendar,t.hasSigned=t.coin.find((function(t){return!!t.is_sign&&!!t.is_today}))}))},getTaskList:function(){var t=this;this.$get(this.API["taskList"]).then((function(s){s.data&&(t.noviceDataList=s.data.noob_task||[],t.everydayDataList=s.data.daily_task||[])}))},nowSign:function(){var t=this;this.$post(this.API["signIn"]).then((function(s){0===s.status&&(t.is_double=1===s.data.is_double,t.isShowSignDialog=!0,t.signCalendar())}))},hanlderClick:function(t){1==t.status&&this.finishTask(t.task_id),t.status},finishTask:function(t){var s=this;this.$post(this.API["finishTask"],{task_id:parseInt(t)}).then((function(){s.getUserInfo(),s.signCalendar(),s.getTaskList()}))},unwanted:function(){this.isShowSignDialog=!1}}},v=f,h=(i("a43a"),i("bbf0"),Object(l["a"])(v,n,a,!1,null,"13c6cfbe",null));s["default"]=h.exports},"65f0":function(t,s,i){var n=i("861d"),a=i("e8b5"),e=i("b622"),c=e("species");t.exports=function(t,s){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?n(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===s?0:s)}},"7db0":function(t,s,i){"use strict";var n=i("23e7"),a=i("b727").find,e=i("44d2"),c=i("ae40"),o="find",r=!0,l=c(o);o in[]&&Array(1)[o]((function(){r=!1})),n({target:"Array",proto:!0,forced:r||!l},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),e(o)},a43a:function(t,s,i){"use strict";var n=i("1c5f"),a=i.n(n);a.a},ae40:function(t,s,i){var n=i("83ab"),a=i("d039"),e=i("5135"),c=Object.defineProperty,o={},r=function(t){throw t};t.exports=function(t,s){if(e(o,t))return o[t];s||(s={});var i=[][t],l=!!e(s,"ACCESSORS")&&s.ACCESSORS,u=e(s,0)?s[0]:r,d=e(s,1)?s[1]:void 0;return o[t]=!!i&&!a((function(){if(l&&!n)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:r}):t[1]=1,i.call(t,u,d)}))}},b727:function(t,s,i){var n=i("0366"),a=i("44ad"),e=i("7b0b"),c=i("50c4"),o=i("65f0"),r=[].push,l=function(t){var s=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(v,h,_,g){for(var C,p,b=e(v),m=a(b),k=n(h,_,3),y=c(m.length),w=0,S=g||o,I=s?S(v,y):i?S(v,0):void 0;y>w;w++)if((f||w in m)&&(C=m[w],p=k(C,w,b),t))if(s)I[w]=p;else if(p)switch(t){case 3:return!0;case 5:return C;case 6:return w;case 2:r.call(I,C)}else if(u)return!1;return d?-1:l||u?u:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bbf0:function(t,s,i){"use strict";var n=i("f3d2"),a=i.n(n);a.a},dbab:function(t,s,i){},e47a:function(t,s,i){"use strict";var n=i("dbab"),a=i.n(n);a.a},e8b5:function(t,s,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f3d2:function(t,s,i){}}]);
//# sourceMappingURL=chunk-a7820746.024d54e4.js.map