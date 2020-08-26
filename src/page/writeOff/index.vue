<template>
	<div :class="'container step'+ step">
		<step1 v-if="step==1" @next="next" />
		<step2 v-if="step==2 || step== 3 || step== 4" :step="step" @next="next" />
		<protocal v-if="step == 'protocal'" />
		<verify v-if="step == 'verify'" @next="next" />
		<complete v-if="step == 'complete'" />
		<result v-if="step == 'result'" :passed="passed" :eliminate_id="eliminate_id"/>
	</div>
</template>
<script>
import step1 from "./components/step1";
import step2 from "./components/step2";
import protocal from "./components/protocal";
import complete from "./components/complete";
import result from "./components/result";
import verify from "./components/verify";
export default {
	components: {
		step1,
		step2,
		protocal,
		complete,
		result,
		verify,
	},
	data() {
		return {
      step: 1,
      passed: true,
      eliminate_id: '12'
		};
	},
	mounted() {
		console.log("this.$route", this.$route);
    // this.step = this.$route.query.step || 1;

    if(!this.$route.query.step){
      this.getStatus()
    }else{
      this.step = this.$route.query.step
    }
	},
	methods: {
		next(val) {
			if (val) {
				this.step = val;
			} else {
				this.step++;
			}
			let url = "/writeOff.html?step=" + this.step;
			window.location.href = url;
    },
    getStatus(){
      this.$get(this.API["userOffStatus"]).then((res) => {
				if (res && res.status === 0) {
          switch (res.data.status){
            case 1 :
              this.step = 1;
            break;
            case 2 :
              this.step = 'complete';
            break;
            case 3 :
              this.step = 'result';
              this.passed = true;
              this.eliminate_id = res.data.eliminate_id
            break;
            case 4 :
              this.step = 'result';
              this.passed = false;
            break;
            default:
              this.step = this.$route.query.step || 1;;
            break;
          }
				}
			});
    }
	},
};
</script>
<style scoped>
.container {
	padding: 12px 16px;
}
.container.step2,.container.step3 {
	height: 100%;
	background: #f8f9fa;
}
</style>
<style>
html,
body {
	height: 100%;
}
</style>
