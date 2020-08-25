<template>
  <div :class="'container step'+ step">
    <step1 v-if="step==1" @next="next"/>
    <step2 v-if="step==2 || step== 3 || step== 4" :step="step" @next="next"/>
    <protocal v-if="step == 'protocal'" />
    <verify v-if="step == 'verify'" />
    <complete v-if="step == 'complete'" />
    <result v-if="step == 'result'" />
  </div>
</template>
<script>
import step1 from './components/step1';
import step2 from './components/step2';
import protocal from './components/protocal';
import complete from './components/complete';
import result from './components/result';
import verify from './components/verify';
export default {
  components:{
    step1,
    step2,
    protocal,
    complete,
    result,
    verify
  },
  data(){
    return{
      step:1
    }
  },
  mounted(){
    console.log('this.$route', this.$route)
    this.step = this.$route.query.step || 1;
  },
  methods:{
   next(val){
     if(val){
       this.step  = val
     }else{
        this.step ++;
     }
     let url = '/writeOff.html?step='+this.step
     window.location.href= url
   }
  }
}
</script>
<style scoped>
.container {
  padding: 12px 16px;
}
.container.step2{
  height: 100%;
  background: #f8f9fa;
}

</style>
<style>
html,body{
  height: 100%;
}
</style>
