<template>
   <div class="feed-dialog" v-if="isshowDialog">
    <!-- <div style="margin-bottom: 5px;" ><img src="../assets/Shape.png"></div> -->
    <div class="feed-dialog-text">签到成功获得金币+466(金币数）<span v-if="is_double">翻倍+466</span></div>
    <div class="feed-dialog-text" style="margin-top: 1px;">看视频翻倍金币哦～</div>
    <div class="btn">
      <span class="btnLeft" @click="unwanted">不需要</span>
      <span class="btnRight" @click="Doubling">翻倍</span>
    </div>
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
    is_double: {
      type: Boolean
    }
  },
  mounted() {
  },
  methods: {
    unwanted() {
      this.$emit('unwanted')
    },
    Doubling() {

    }
  }
}
</script>
<style scoped>
  .feed-dialog {
    background: #FFFFFF;
    box-shadow: 0px 7px 25px rgba(187, 187, 187, 0.5);
    border-radius: 16px;
    height: 23rem;
    width: 30rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  .feed-dialog-text {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #303133;
    margin-top: 56px;
    padding: 0 32px;
  }
  .btn {
    text-align: center;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    margin-top: 53px;
  }
  .btnLeft {
    background: #F5F7FA;
    border-radius: 28px;
    width: 118px;
    height: 56px;
    line-height: 56px;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
  }
  .btnRight {
    background: #D9D9D9;
    border-radius: 28px;
    width: 118px;
    height: 56px;
    line-height: 56px;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
  }
</style>