<template>
	<div>
		<h1>请输入验证码</h1>
		<div class="vcode" id="vertifycode">
			<input
				type="tel"
				maxlength="6"
				ref="code"
				class="code"
				id="code"
				@focus="focus=true"
				v-model="code"
				@blur="focus=false"
				:disabled="disabled"
			/>
			<div class="labels">
				<label
					class="label"
					for="code"
					:class="{active: focus===true && index===currentIndex}"
					v-for="(item,index) in length"
					:key="index"
					v-text="arrCode[index]"
				></label>
			</div>
      <p class="text-right">
        <span class="sendCode" @click="sendCode" :class="{'hasSend':count != 0}">发送验证码 {{count != 0?'('+count+'s)':''}}</span>
      </p>
      <button class="btnSubmit mt" @click="next">开始注销</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
      count: 0,
			length: 4,
			code: "",
			focus: false,
      disabled: false,
      interval:null
		};
	},
	computed: {
		arrCode: function () {
			return this.code.split("") || [];
		},
		currentIndex: function () {
			return this.code.length;
		},
	},
	watch: {
		code: function (newV, oldV) {
			var self = this;
			this.code = newV.replace(/[^\d]/g, ""); // 限制非数字
			// console.log(newV);
			if (newV.length >= 4) {
				this.disabled = true;
				this.$refs.code.blur();
        this.next();
			}
    },
    count(val){
        if(val){
          this.interval = setTimeout(()=>{
            this.count --;
            clearTimeout(this.interval);
          },1000)
        }
      },
  },
  mounted(){
    // this.sendCode();
  },
  methods:{
    sendCode(){
      if(this.count <= 0){
        this.$post(this.API["sendCode"]).then((res) => {
          if (res.status === 0) {
             this.count = 60
          }
        });
      }
    },
    startUserOffSubmit(){
			let reasons  = sessionStorage.getItem('reasons')
      let elseR = sessionStorage.getItem('elseReason')
      // console.log()
			this.$post(this.API["userOffSubmit"],{
				type:(reasons || '').split(',').map(e=> parseInt(e)),
        remove_remark:elseR,
        verification_code: this.code
			}).then((res) => {
				if (res.status === 0) {
					this.$emit('next','complete')
				}
			});
		},
    next(){
      console.log('next',this.code)
      if (this.code.length < 4)  return;
      this.startUserOffSubmit()
    }
  }
};
</script>
<style scoped>
@keyframes animate {
	100% {
		opacity: 0;
	}
}
.text-right{
  text-align: right;
}
h1 {
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	color: #303133;
	margin-bottom: 60px;
}
.vcode {
	position: relative;
	/* width: 100%; */
	overflow: hidden;
	padding: 0 20px;
}
.code {
	width: 100%;
	padding: 0;
	height: 40px;
	font-size: 35px;
	overflow: hidden;
	border: none;
	outline: none;
	opacity: 0;
	margin-left: -100%;
	-webkit-tap-highlight-color: transparent;
}
.labels {
	display: flex;
	display: -webkit-flex;
	width: 100%;
	height: 40px;
	justify-content: space-between;
	-webkit-justify-content: space-between;
	margin-top: -40px;
	-webkit-tap-highlight-color: transparent;
}
.label {
	height: 34px;
	width: 12%;
	border-bottom: solid 1px #BFC4CD;
	float: left;
	color: #313131;
	font-size: 35px;
	text-align: center;
	padding-bottom: 4px;
}
.active:after {
	content: " ";
	display: inline-block;
	height: 100%;
	width: 2px;
	background: #313131;
	animation: 0.8s animate infinite;
}

.sendCode{
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #0E5EFF;
  margin-top: 18px;
  display: inline-block;
}
.hasSend{
 color: #BFC4CD;
}
.mt{
  margin-top: 150px;
}
</style>