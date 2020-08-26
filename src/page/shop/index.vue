<template>
  <div class="container">
    <nav class="text-right"> <a href="/shopRecord.html" target="_blank">交易记录</a></nav>
    <div class="userInfo">
      <img class="avatar" :src="avatar_img" />
      <div class="center">
        <h3 class="name">{{userInfo.nickname}}</h3>
        <p class="mark">这个人很帅，但他从来不说～</p>
      </div>
    </div>
    <p class="font01">免广告卡（手机、ipad通用）</p>
    <div class="goodsPanel">
      <div class="item" :class="{'active':active == item.id}" v-for="(item,index) in goods" :key="index" @click="active = item.id;">
        <div class="text">{{item.text}}</div>
        <div class="price"><span class="per">¥</span>{{item.price}}</div>
        <div class="ori_price">¥{{item.ori_price}}</div>
        <span class="discount">{{item.discount}}折</span>
      </div>
    </div>
    <div class="desrc">
      <p class="font02">到期按一年135元自动续费，可随时取消</p>
      <p class="font02"> 自动续费的服务声明</p>
      <p class="font03">付款：确认购买并付款后记入iTunes账户；</p>
      <p class="font03">取消续订：如需取消续订，请在当前订阅周期到期前24小时以前在iTunes/appID设置管理中关闭自动续费功能，到期前24小时内取消，将会收取订阅费</p>
    </div>
    <button class="btnSubmit" @click="submit">立即以135元开通</button>
    <div class="mt1">
			<label class="protocal">
				<input type="checkbox" v-model="checkd" @change="change" value="1" style="margin-right: 7px;" />
				我已阅读并同意“<a href="#" target="_blank">会员服务协议</a>”、
        “<a href="#" target="_blank">隐私协议</a>”
			</label>
			<div class="error" v-if="error">请勾选我已阅读并同意</div>
		</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo:{
        avatar_img:{
          thumb_uris:{
            '2x':[]
          }      
        }
      },
      active: 1,
      checkd: [],
			error: false,
      goods:[
        {
          id:1,
          text:'连续包年',
          price:'126',
          ori_price:'180',
          discount:'7.0'
        },
        {
          id:2,
          text:'连续包季',
          price:'36',
          ori_price:'45',
          discount:'7.0'
        },
        {
          id:3,
          text:'连续包月',
          price:'12',
          ori_price:'15',
          discount:'7.0'
        }
      ]
    }
  },
  mounted(){
    this.getUserInfo();
  },
  computed:{
    avatar_img(){
      console.log(this.userInfo.avatar_img.thumb_uris)
      return this.userInfo.avatar_img.thumb_uris['2x']['0']
    }
  },
  methods:{
    change() {
			this.error = false;
    },
    submit(){
      if (!this.checkd.length) {
        this.error = true;
      } else {
        window.open('/shopSuccess.html')
      }
    },
    getUserInfo() {
			this.$get(this.API["userInfo"]).then((res) => {
				this.userInfo = res.data.user_info;
			});
    },
    
  }
}
</script>
<style scoped>
.container{
  padding: 10px;
}
.userInfo{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.avatar{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-right: 10px;
}
.name{
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #303133;
}
.mark{
  font-size: 14px;
  line-height: 20px;
  color: #D59F00;
}
.font01{
  font-size: 14px;
  line-height: 20px;
  color: #303133;
}
.font02{
  font-size: 16px;
  line-height: 22px;
  color: #606266;
  margin-top: 6px;
}
.font03{
  font-size: 14px;
  line-height: 20px;
  color: #BFC4CD;
  margin-top: 10px;
}

.goodsPanel{
  display: flex;
  overflow-x: auto;
  padding-top: 20px;
  margin-right: -10px;
  padding-bottom: 10px;
}
.goodsPanel .item{
  border:1px solid rgb(14 94 255 / 0.05);
  border-radius: 8px;
  padding: 12px 25px 30px;
  text-align: center;
  margin-right: 10px;
  position: relative;
  min-width: 85px;
}
.goodsPanel .item.active{
  border:1px solid rgb(14 94 255);
  background:rgb(14 94 255 / 0.05);
}
.goodsPanel .item .text{
  font-size: 14px;
  line-height: 20px;
  color: #303133;
}
.goodsPanel .item .price{
  font-weight: 600;
  font-size: 45px;
  color: #0E5EFF;
}
.goodsPanel .item .price .per{
  line-height: 25px;
  font-size: 18px;
}
.goodsPanel .item .ori_price{
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: line-through;
  color: #909399;
}
.discount{
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  right: 0;
  background: #0E5EFF;
  border-radius: 4px;
  padding: 0 10px ;
  font-size: 12px;
  line-height: 20px;
  color: #FFFFFF;
}
.protocal {
	font-size: 14px;
	line-height: 20px;
	color: #606266;
	display: flex;
  align-items: center;
  padding: 20px ;
  padding-bottom: 0;
}
.protocal a {
	color: #0e5eff;
}
.error {
	color: red;
	margin-top: 5px;
	margin-left: 20px;
}
.text-right{
  text-align: right;
}

</style>