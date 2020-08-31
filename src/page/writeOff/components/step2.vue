<template>
	<div>
		<p class="tip">在你提交的注销申请生效前，需要满足以下条件以保证你的账号安以、财产安全</p>
		<div class="content">
			<ul>
				<template v-if="step == 2">
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
				<template v-if="step == 3 || step == 4">
					<li class="title1">

						<img v-if="is_safety == 1" src="@/assets/checked.png" class="icon"/>
						<img v-else src="@/assets/error.png" class="icon"/>
						账号处于安全状态 
					</li>
					<li class="title1">
						<img v-if="is_dispute == 1" src="@/assets/checked.png" class="icon"/>
						<img v-else src="@/assets/error.png" class="icon"/>
						账号无任何纠纷，包括举报和反馈
					</li>
					<li class="title1">
						<img v-if="is_banned == 1" src="@/assets/checked.png" class="icon"/>
						<img v-else src="@/assets/error.png" class="icon"/>
						账号未被封禁
					</li>
				</template>
			</ul>
		</div>
		<div class="mt1" v-if="step == 2 || step == 4">
			<label class="protocal">
				<input type="checkbox" v-model="checkd" @change="change" value="1" style="margin-right: 7px;" />
				我已阅读并同意“
				<a  @click="jump('?step=protocal')" >注销协议</a>”
			</label>
			<div class="error" v-if="error">请勾选我已阅读并同意“注销协议”</div>
		</div>
		<div class="error mt1" v-if="!canNext && step == 3">该账号目前处于封禁状态，不可注销</div>
		<button class="btnSubmit" v-else-if="step == 4" @click="next">开始注销</button>
		<button class="btnSubmit" v-else @click="next">下一步</button>
	</div>
</template>
<script>
export default {
	props: ["step"],
	data() {
		return {
			checkd: [],
			error: false,
			status: "",
			is_safety: 0, //是否处于安全状态
			is_dispute: 1, //是否账户纠纷
			is_banned: 1, //是否账户封禁
		};
	},
	computed: {
		canNext() {
			return this.is_safety && this.is_dispute && this.is_banned;
		},
	},
	mounted(){
		if(this.step == 3 || this.step == 4){
			this.getUserStatus();
		}
	},
	methods: {
		jump(url){
			// console.log('jump',url)
			// window.open(url)
			window.location.href = window.location.pathname + url
		},
		change() {
			this.error = false;
		},
		next() {
			console.log("this.step", this.step);
			switch (this.step) {
				case "2": // 阅读协议
					if (!this.checkd.length) {
						this.error = true;
					} else {
						this.$emit("next",'3');
					}
					break;
				case "3": //  获取用户的登录方式
					this.getUserLoginType()
					break;
				case "4": //  第三方 开始注销
					console.log('开始注销')
					if (!this.checkd.length) {
						this.error = true;
					} else {
						this.startUserOffSubmit();
					}
					break;
				default:
					break;
			}
		},
		getUserStatus() {
			this.$get(this.API["userCancelStatus"]).then((res) => {
				if (res && res.status === 0) {
					this.status = "canOff";
					this.is_safety = res.data.is_safety;
					this.is_dispute = res.data.is_dispute;
					this.is_banned = res.data.is_banned;
					
				}
			});
		},
		getUserLoginType() {
			this.$get(this.API["userOffStatus"]).then((res) => {
				if (res.status === 0) {
					if(res.data.is_bind_mobile){
						this.$emit('next','verify')
					}else{
						this.$emit('next',4)
					}
				}
			});
		},
		startUserOffSubmit(){
			let reasons  = sessionStorage.getItem('reasons')
      let elseR = sessionStorage.getItem('elseReason')
			this.$post(this.API["userOffSubmit"],{
				type:reasons,
				remove_remark:elseR,
			}).then((res) => {
				if (res.status === 0) {
					this.$emit('next','complete')
				}
			});
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
.error {
	color: red;
	margin-top: 5px;
	margin-left: 20px;
}
.content li.title1 {
	font-size: 16px;
	line-height: 22px;
	color: #303133;
	padding-left: 0;
}
.content li.title1:not(:last-child) {
	margin-bottom: 25px;
}
.mt1 {
	margin-top: 19px;
}
.icon{
	display: inline-block;
	vertical-align: sub;
	width: 18px;
}
</style>