(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-674830c8"],{2532:function(t,e,i){"use strict";var n=i("23e7"),a=i("5a34"),s=i("1d80"),c=i("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(s(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,i){var n=i("861d"),a=i("c6b6"),s=i("b622"),c=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"5a34":function(t,e,i){var n=i("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"9e92":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("article",[n("p",{staticClass:"txtP"},[t._v("选择你想投诉的类型")]),n("ul",{staticClass:"listUl"},t._l(t.commonLi,(function(e,i){return n("li",{key:i,staticClass:"commonLi",class:{active:t.commonLiItem.includes(e)},on:{click:function(i){return t.clickCommonLi(e)}}},[t._v(t._s(e))])})),0),n("div",{staticClass:"line"}),t.commonLiItem.length>0?n("section",{staticClass:"noteSec"},[n("div",[n("p",{staticClass:"feed-title"},[t._v("补充说明")]),n("div",{staticClass:"block1"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"text-area",attrs:{row:"3","resize:":"",none:"",placeholder:"请详细填写并提供原内容的链接地址"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("div",{staticClass:"rz-picter"},[n("div",{staticStyle:{display:"flex"}},[t._l(t.fileList,(function(e,a){return n("span",{key:a,staticClass:"img"},[n("img",{staticClass:"img",attrs:{src:e}}),n("img",{staticClass:"deleteIcon",attrs:{src:i("bafe")},on:{click:function(e){return t.deleteImg(a)}}})])})),n("span",{staticClass:"imgBlock",on:{click:t.chooseImage}},[n("img",{staticClass:"img-avatar",attrs:{src:i("0c3a"),alt:""}})])],2),n("input",{ref:"avatarInput",staticStyle:{display:"none"},attrs:{type:"file",name:"avatar",id:"uppic",multiple:"multiple",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(e){return t.changeImage(e)}}})])])])]):t._e(),t._m(0),0==t.commonLiItem.length?n("button",{staticClass:"opa5 btnSubmit"},[t._v("提交")]):n("button",{staticClass:"btnSubmit",on:{click:t.submit}},[t._v("提交")])]),t._m(1),t.showDialog?n("pop-up",{attrs:{textMap:t.textMap,time:2}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"remarkP"},[n("img",{attrs:{src:i("e9ea"),alt:""}}),t._v(" 您的举报将在24小时内受理，请尽量提交完整的举报描述及材料，无需重复举报，感谢您的配合 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"standardText"},[t._v("了解速播社区规范 "),i("span",{staticStyle:{color:"#D5DBE6"}},[t._v(" >")])])}],s=(i("c740"),i("caad"),i("a15b"),i("d81d"),i("a434"),i("4fad"),i("2532"),i("3835")),c=i("c711"),o={data:function(){return{commonLi:["不适内容","色情低俗","有害信息","攻击谩骂","诈骗信息","政治敏感","内容抄袭","赌博","其他"],commonLiItem:[],fileList:[],text:"",textMap:{text1:"举报成功",text2:"我们会尽快处理哒~"},showDialog:!1,item_hash_id:"",item_type:"",files:[]}},components:{popUp:c["a"]},mounted:function(){console.log(this.$route),this.item_hash_id=this.$route.query.item_hash_id||"",this.item_type=this.$route.query.item_type||""},methods:{chooseImage:function(){document.getElementById("uppic").click()},changeImage:function(t){var e=this;Object.entries(t.target.files).map((function(t){var i=Object(s["a"])(t,2),n=(i[0],i[1]),a=new FileReader,c=e;a.readAsDataURL(n),a.onload=function(t){c.fileList.push(this.result),c.files.push(n)}}))},deleteImg:function(t){this.fileList.splice(t,1),this.files.splice(t,1)},clickCommonLi:function(t){if(this.commonLiItem.includes(t)){var e=this.commonLiItem.findIndex((function(e){return e===t}));this.commonLiItem.splice(e,1)}else this.commonLiItem.push(t)},submit:function(){var t=this,e=new FormData;e.append("item_type",this.item_type),e.append("item_hash_id",this.item_hash_id),e.append("report_reason",this.commonLiItem.join(",")),e.append("reason_supplement",this.text),this.files.map((function(t,i){0==i?e.append("images",t):e.append("images_"+(i+1),t)})),this.$post(this.API["submitAccuse"],e).then((function(e){0===e.status&&(t.showDialog=!0)}))}}},r=o,l=(i("ef12"),i("2877")),u=Object(l["a"])(r,n,a,!1,null,"3803ef9f",null);e["default"]=u.exports},a02a:function(t,e,i){},a15b:function(t,e,i){"use strict";var n=i("23e7"),a=i("44ad"),s=i("fc6a"),c=i("a640"),o=[].join,r=a!=Object,l=c("join",",");n({target:"Array",proto:!0,forced:r||!l},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},ab13:function(t,e,i){var n=i("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},c740:function(t,e,i){"use strict";var n=i("23e7"),a=i("b727").findIndex,s=i("44d2"),c=i("ae40"),o="findIndex",r=!0,l=c(o);o in[]&&Array(1)[o]((function(){r=!1})),n({target:"Array",proto:!0,forced:r||!l},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},caad:function(t,e,i){"use strict";var n=i("23e7"),a=i("4d64").includes,s=i("44d2"),c=i("ae40"),o=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e9ea:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVRYR+2Wz0sUYRjHv89s/iIIPHRJCG8GHjoYHSqLohJPBaVQHrrYTtnu7CpaYIWjlFHBuruzTs0uXQI77ApB5MW6iEFkGp1S+gMKxDSEsFz3fWI1Y9edmZ3dAj041/f7fZ7PfN95n3cIm/zQJvfH1gVoaoq76o8teAXQlE5JAhLjY5VaItGcskutUJ9lAkHNiONP84yGCb9XbrYDKNRnChAOR08K4ldmjSSmU4rifm22VozPFCAYNrpBuGv6poybfkXuN1srxmcKENKMHgZUsyYEqD6v3Gu2VoxvG8AqgesM3LfYghs+r/zAYgsK9pkDhPQ6llwTa8c/6xEkUgd9vrYpU4AifJZzIKQZd0DUzcyrGiJiMPf7vPItuzlQqM92FAfCxmmJ6Hy6oWAe7lDkUSd3RyG+rXsXOHnT/6HZTsDiGMbqIKXOgaT3Po/7+b9EHYhEa10sWkDS9MLclyFVVUVmvRyAoP6kBqmVjwDKV4UsXfIrl58WA6Fp2p4USqcB7Fo9ykDOEMsBGIgYrcSI/W1INOX3uA8UAxAajD5kwZ3rXgZG271yg20CIT1WxykxmdVQQr3/mvymEIigrtcg5UpPzJ0ZAL3tXjnrljX/H4gYM2DUrBsJ+Jz8hcOdnfKcE4hA4FGVVCKlf1r2ZeiXkj9FdVfX1VnbBNKLA+HHF4jo2QbhjCC0tHvkD7ajOBI7wxCDYFRl6Zj7/MqVno1eqzlAQS06AnDjxssIwEtASrCEqRIunf3Bi2XloqwaEh8RwEUC9psAvv3+7etRVVVXnAJA1/XK5ZRrHECtk9htNJMi6Wro6GidN9PYTsJ7ul5ZIXYMg/lEMRBEPERiuU1RlEUrf95RnL6ONT3qFozbOftqUZVAE8TcpyjySD7wvADrBQzDKFlaxlkAjSA+BKa9ACrWhhXmQTQN4jEAL/we+V2+xhknzKk0VxeIxysWP+1OqurxnI/LaVXHCTgtWKhu0wF+A8Y2UjC1j0SRAAAAAElFTkSuQmCC"},ef12:function(t,e,i){"use strict";var n=i("a02a"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-674830c8.9d3a8947.js.map