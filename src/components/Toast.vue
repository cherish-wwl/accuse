<template>
  <div class="toast-container">
    <div class="inner">
      {{msg}}
      <div class="tools">
        <button class="btn" @click="submit">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['msg'],
  methods:{
    submit(){
      console.log('submit')
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.toast-container{
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(4 4 4 / 27%);
  right: 0;
  box-shadow: 0px 7px 25px rgba(187, 187, 187, 0.5);
}
.inner{
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 5px;
    text-align: center;
}
.tools{
  margin-top: 10px;
}
</style>