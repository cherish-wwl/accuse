(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4397b906"],{"1c5f":function(s,t,i){},"2e71":function(s,t,i){s.exports=i.p+"img/coinLeft.d92aa8b1.png"},"360a":function(s,t,i){"use strict";var a=i("a5cd"),n=i.n(a);n.a},"4f40":function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"task"},[a("div",{staticClass:"header-container"},[a("div",{staticClass:"header"},[s._m(0),a("div",{staticClass:"coinImg"},[a("img",{staticClass:"coinLeft",attrs:{src:i("2e71")}}),a("span",{staticClass:"myCoinNum"},[s._v(s._s(s.myCoin))])])])]),a("div",{staticClass:"signBlock"},[a("p",{staticClass:"signText"},[s._v(" "+s._s(s.signNum)+" "),a("span",{staticClass:"signTip1"},[s._v("（连续签到翻倍金币哦）")])]),a("div",{staticClass:"coinItems"},s._l(s.coin,(function(t,i){return a("div",{key:i,staticClass:"coinItem"},[a("span",{staticClass:"coinText1",class:t.is_sign?"coinText2":"coinText1"},[s._v(s._s(t.is_double?"翻倍":t.score))]),t.is_sign?a("i",{staticClass:"check-icon"}):s._e(),(s.coin[i-1]||{}).is_today?a("i",{staticClass:"tips-icon"},[s._v("明日可领")]):s._e(),a("p",{staticClass:"signTip2"},[s._v(s._s(t.is_today?"今日":t.title.slice(-2)))])])})),0),a("div",{staticClass:"signBtn",class:{signed:s.hasSigned},on:{click:s.nowSign}},[s._v(s._s(s.hasSigned?"今日已签到":"立即签到"))])]),a("div",{staticClass:"noviceBlock"},[a("p",{staticClass:"taskTitle"},[s._v("新手任务")]),s._l(s.noviceDataList,(function(t,i){return a("div",{key:i,staticClass:"taskItems"},[a("div",{staticClass:"noviceCol1"},[a("img",{attrs:{height:"32",width:"32",src:t.pic}})]),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[s._v(s._s(t.title)+"("+s._s((t.schedule||{}).achieve)+"/"+s._s((t.schedule||{}).total)+")")]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[s._v("+"+s._s(t.score))]),s._v("金币 ")])]),a("div",{staticClass:"noviceCol3",class:{go:0==t["status"],wait:1==t["status"],complete:2==t["status"],process:3==t["status"]},on:{click:function(i){return s.hanlderClick(t)}}},[s._v(s._s(s._f("swichStatus")(t.status)))])])}))],2),a("div",{staticClass:"everydayBlock"},[a("p",{staticClass:"taskTitle"},[s._v("每日任务")]),s._l(s.everydayDataList,(function(t,i){return a("div",{key:i,staticClass:"taskItems"},[a("div",{staticClass:"noviceCol1"},[a("img",{attrs:{height:"32",width:"32",src:t.pic}})]),a("div",{staticClass:"noviceCol2"},[a("p",{staticClass:"col2Title"},[s._v(s._s(t.title)+"("+s._s((t.schedule||{}).achieve)+"/"+s._s((t.schedule||{}).total)+")")]),a("p",{staticClass:"col2text"},[a("span",{staticClass:"col2CoinNum"},[s._v("+"+s._s(t.score))]),s._v("金币 ")])]),a("div",{staticClass:"noviceCol3",class:{go:0==t["status"],wait:1==t["status"],complete:2==t["status"],process:3==t["status"]},on:{click:function(i){return s.hanlderClick(t)}}},[s._v(s._s(s._f("swichStatus")(t.status)))])])}))],2),a("div",{staticClass:"supplementTip"},[s._v("更多任务正在开启中敬请期待哦～")]),a("div",{attrs:{id:"test_label"}}),s.isShowSignDialog?a("sign-dialog",{attrs:{is_double:s.is_double},on:{unwanted:s.unwanted}}):s._e()],1)},n=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"coinDetails"},[i("span",{staticClass:"myCoin"},[s._v("我的金币")]),i("span",{staticClass:"coindetail"},[i("a",{attrs:{href:"coinDetail.html"}},[s._v("金币明细")])])])}],e=(i("7db0"),function(){var s=this,t=s.$createElement,i=s._self._c||t;return s.isshowDialog?i("div",{staticClass:"feed-dialog"},[i("div",{staticClass:"feed-dialog-text"},[s._v("签到成功获得金币+466(金币数）"),s.is_double?i("span",[s._v("翻倍+466")]):s._e()]),i("div",{staticClass:"feed-dialog-text",staticStyle:{"margin-top":"1px"}},[s._v("看视频翻倍金币哦～")]),i("div",{staticClass:"btn"},[i("span",{staticClass:"btnLeft",on:{click:s.unwanted}},[s._v("不需要")]),i("span",{staticClass:"btnRight",on:{click:s.Doubling}},[s._v("翻倍")])])]):s._e()}),c=[],o={data:function(){return{isshowDialog:!0}},props:{is_double:{type:Boolean}},mounted:function(){},methods:{unwanted:function(){this.$emit("unwanted")},Doubling:function(){}}},l=o,u=(i("e47a"),i("2877")),d=Object(u["a"])(l,e,c,!1,null,"4eef2bb6",null),r=d.exports,v=(i("c8a8"),{data:function(){return{hasSigned:!1,coin:[],signNum:0,noviceDataList:[],everydayDataList:[],myCoin:"0",isShowSignDialog:!1,is_double:!1,userInfo:{}}},filters:{swichStatus:function(s){switch(s){case 0:return"去完成";case 1:return"领取";case 2:return"已完成";case 3:return"已领取"}}},components:{signDialog:r},mounted:function(){this.getUserInfo(),this.signCalendar(),this.getTaskList()},methods:{getUserInfo:function(){var s=this;this.$get(this.API["userInfo"]).then((function(t){s.userInfo=t.data.user_info,s.myCoin=s.userInfo.score}))},signCalendar:function(){var s=this;this.$get(this.API["signCalendar"]).then((function(t){s.signNum=t.data.aggregate,s.coin=t.data.calendar,s.hasSigned=s.coin.find((function(s){return!!s.is_sign&&!!s.is_today}))}))},getTaskList:function(){var s=this;this.$get(this.API["taskList"]).then((function(t){t.data&&(s.noviceDataList=t.data.noob_task||[],s.everydayDataList=t.data.daily_task||[])}))},nowSign:function(){var s=this;console.log("nowSign",this.hasSigned),this.hasSigned||this.$post(this.API["signIn"]).then((function(t){0===t.status&&(s.is_double=1===t.data.is_double,s.isShowSignDialog=!0,s.getUserInfo(),s.signCalendar(),s.getTaskList())}))},hanlderClick:function(s){console.log("领取",s),1==s.status&&(this.$set(s,"status",3),this.finishTask(s.task_id)),s.status},finishTask:function(s){var t=this;this.$post(this.API["finishTask"],{task_id:parseInt(s)}).then((function(){t.getUserInfo(),t.signCalendar(),t.getTaskList()}))},unwanted:function(){this.isShowSignDialog=!1}}}),h=v,_=(i("a43a"),i("360a"),Object(u["a"])(h,a,n,!1,null,"1228f641",null));t["default"]=_.exports},"7db0":function(s,t,i){"use strict";var a=i("23e7"),n=i("b727").find,e=i("44d2"),c=i("ae40"),o="find",l=!0,u=c(o);o in[]&&Array(1)[o]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!u},{find:function(s){return n(this,s,arguments.length>1?arguments[1]:void 0)}}),e(o)},a43a:function(s,t,i){"use strict";var a=i("1c5f"),n=i.n(a);n.a},a5cd:function(s,t,i){},dbab:function(s,t,i){},e47a:function(s,t,i){"use strict";var a=i("dbab"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-4397b906.e574e006.js.map