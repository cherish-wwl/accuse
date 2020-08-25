<template>
	<div>
		<p class="font01">{{passed ? '申请已通过' :'申请未通过'}}</p>
		<div>
			<p class="font02">{{passed ? '点击注销将清空个人信息，且不可恢复 ' :'未通过理由如下'}}</p>
			<ul>
				<li class="font03">·账号无法登录、授权的第三方账号也将无效</li>
				<li class="font03">·账号信息永久删除（关注、粉丝、个人信息）</li>
				<li class="font03">·用户信息清空（手机绑定、实名认证</li>
			</ul>
		</div>
    <div class="tools" v-if="passed" >
      <button class="btn">撤销注销</button>
      <button class="btn">确定注销</button>
    </div>
	</div>
</template>
<script>
export default {
	props: {
		passed: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
<style scoped>
.font01{
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 24px;
  margin-top: 50px;
}
.font02{
  font-size: 16px;
  line-height: 22px;
  color: #303133;
  margin-bottom: 7px;
}
.font03{
  font-size: 14px;
  line-height: 24px;
  color: #909399;
}
.tools{
  margin-top:153px;
  display: flex;
  justify-content: space-around;
}
.btn{
  background: #FFFFFF;
  border: 1px solid #EDEFF2;
  border-radius: 32.5px;
  padding: 20px 45px;
}
</style>