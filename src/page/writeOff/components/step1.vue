<template>
  <div>
    <p class="tip">请选择注销账号原因</p>
    <div class="reasons">
      
      <label class="item" v-for="(item,index) in reasons" :key="index" :class="{'active': checked.includes(index)}" >
        <input  type="checkbox" class="input" :value="index" v-model="checked" />
        {{item}}
      </label>
    </div>
    <div>
      <textarea class="area_input" v-model="elseReason" placeholder="请输入其他原因"></textarea>
    </div>
    <button class="btnSubmit" @click="next">下一步</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      reasons:[
        '产品体验不好',
        '不想接受营销信息',
        '推送广告太多',
        '隐私考虑',
        '其他原因'
      ],
      checked:[],
      elseReason:''
    }
  },
  methods:{
    next(){
      // let arr = this.checked.map(e=>{
      //   return this.reasons[e]
      // })
      // console.log(arr,this.elseReason)
      localStorage.setItem('reasons', this.checked.join(','))
      localStorage.setItem('elseReason', this.elseReason)
      this.$emit('next')
    }
  }
}
</script>
<style scoped>

.tip {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #909399;
  margin-bottom: 9px;
}
.reasons .item {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #303133;
  padding: 10px 15px;
  display: block;
}
.reasons .item.active::after {
  content: "";
  display: inline-block;
  float: right;
  width: 6px;
  height: 14px;
  border-color: #0d5eff;
  border-style: solid;
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
}
.reasons .item .input{
  display: none;
}
.area_input {
  border: 1px solid #edeff2;
  box-sizing: border-box;
  border-radius: 16px;
  height: 170px;
  width: 100%;
  margin-top: 7px;
  padding: 15px 15px;
}
</style>
