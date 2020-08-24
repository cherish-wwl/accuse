<template>
	<div>
		<p class="tip">在你提交的注销申请生效前，需要满足以下条件以保证你的账号安以、财产安全</p>
		<div class="content">
			<ul>
        <template v-if="!status">
          <li class="title">
            <span class="circle">1</span>注销行为将清空个人信息，且不可恢复
          </li>

          <li>·账号无法登录、授权的第三方账号也将无效</li>
          <li>·账号信息永久删除（关注、粉丝、个人信息）</li>
          <li>·用户信息清空（手机绑定、实名认证）</li>

          <li class="title mt1">
            <span class="circle">2</span>注销需要满足以下条件
          </li>
          <li>·账号1个月内没有修改密码，改绑等敏感行为</li>
          <li>·帐号无任何纠纷，包括投诉举报或被投诉举报</li>
          <li>·帐号为正常使用中的帐号无任何被限制的记录</li>
          </template>
          <template v-else>
            <li class="title1">{{is_safety}}账号处于安全状态</li>
            <li class="title1">{{is_dispute}}账号无任何纠纷，包括举报和反馈</li>
            <li class="title1">{{is_banned}}账号未被封禁</li>
          </template>
			</ul>
		</div>
		<div class="mt1" v-if="!status">
			<label class="protocal">
				<input type="checkbox" v-model="checkd" @change="change" value="1" style="margin-right: 7px;" />
				我已阅读并同意“
				<a href="/writeOff.html?step=protocal" target="_blank">注销协议</a>”
			</label>
			<div class="error" v-if="error">请勾选我已阅读并同意“注销协议”</div>
		</div>
    <div class="error mt1" v-if="!canNext">该账号目前处于封禁状态，不可注销</div>
		<button class="btnSubmit" v-else @click="next">下一步</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			checkd: [],
      error: false,
      status: '',
      is_safety: 1, //是否处于安全状态
      is_dispute: 1,  //是否账户纠纷
      is_banned: 1  //是否账户封禁
		};
  },
  computed:{
    canNext(){
      return this.is_safety && this.is_dispute && this.is_banned
    }
  },
	methods: {
		change() {
			this.error = false;
		},
		next() {
			if (!this.checkd.length) {
				this.error = true;
			} else {
        if(this.status == 'canOff'){
				  
        }else if(!this.status){
          this.getUserStatus();
        }
			}
    },
    getUserStatus(){
      this.$get(this.API["userCancelStatus"]).then(() => {
				if(res.status === 0){
          this.is_safety = res.data.is_safety
          this.is_dispute = res.data.is_dispute
          this.is_banned = res.data.is_banned
				}
			});
    },
    getUserLoginType(){
      // this.$post(this.API["finishTask"], { task_id: parseInt(id) }).then(() => {
			// 	// if(res.status === 0){
			// 	this.getUserInfo();
			// 	this.signCalendar();
			// 	this.getTaskList();
			// 	// }
			// });
    }
	},
};
</script>
<style scoped>
.tip {
	font-family: PingFang SC;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
	color: #606266;
	margin-bottom: 16px;
}
.content {
	background: #ffffff;
	border-radius: 12px;
	padding: 30px 16px 42px 15px;
}
.content li {
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	color: #909399;
	padding: 0 0 0px 30px;
}
.content .title {
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	color: #303133;
	position: relative;
	margin-bottom: 10px;
}

.content .circle {
	position: absolute;
	left: 0;
	background: #f5f7fa;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	text-align: center;
	font-size: 16px;
	line-height: 24px;
	color: #0e5eff;
}
.protocal {
	font-size: 14px;
	line-height: 20px;
	color: #606266;
	display: flex;
	align-items: center;
}
a {
	color: #0e5eff;
}
.error{
   color: red;
   margin-top: 5px;
   margin-left: 20px;
}
.content li.title1{
  font-size: 16px;
  line-height: 22px;
  color: #303133;
}
.content li.title1:not(:last-child){
  margin-bottom: 25px;
}
.mt1 {
	margin-top: 19px;
}
</style>