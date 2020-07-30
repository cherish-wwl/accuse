<template>
   <div class="feed-dialog" v-if="isshowDialog">
    <div style="margin-bottom: 5px;" ><img src="../assets/Shape.png"></div>
    <div class="feed-dialog-text">{{textMap.text1}}</div>
    <div class="feed-dialog-text">{{textMap.text2}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshowDialog: true
    }
  },
  props: {
    textMap: {
      typr: Object
    },
    time: {
      type: Number
    }
  },
  mounted() {
    setTimeout(() => {
      this.isshowDialog = false
    }, this.time*1000)
  }
}
</script>
<style scoped>
  .feed-dialog {
    background: #FFFFFF;
    box-shadow: 0px 7px 25px rgba(187, 187, 187, 0.5);
    border-radius: 16px;
    height: 17rem;
    width: 20rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .feed-dialog-text {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #303133;
    margin-top: 5px;
  }
</style>