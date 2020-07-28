<template>
  <div class="problem-scene">
    <p class="title">请选择问题发生场景</p>
    <div class="pro-items">
      <p v-for="(item, index) in prolist" :key="index" class="pro-item" @click="selectPro(item.text1, item.text2)">
        {{item.text1}}
        <span class="text2">{{item.text2}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prolist: [
        {
          text1: '浏览内容相关',
          text2: '(如能提供截图能更快的解决问题)'
        },
        {
          text1: '登录/注册相关',
          text2: '(填写联系方式能更快的解决问题)'
        },
        {
          text1: '无法分享/分享被屏蔽相关',
          text2: ''
        },
        {
          text1: '消息推送相关',
          text2: ''
        },
        {
          text1: '卡顿/闪退相关',
          text2: ''
        },
        {
          text1: '评论/收藏/点赞/关注相关',
          text2: ''
        },
        {
          text1: '广告相关',
          text2: ''
        },
        {
          text1: '金币相关',
          text2: ''
        },
        {
          text1: '其他',
          text2: ''
        },
      ]
    }
  },
  methods: {
    selectPro(text1, text2) {
      this.$emit('selectProFun', text1, text2)
    }
  }
}
</script>

<style scoped>
  .problem-scene {
    padding: 16px;
  }
  .title {
    color: #909399;
    font-size: 1.4rem;
    margin-bottom: 2.2rem;
  } 
  .pro-items {
    border: 1px solid #D5DBE6;
    border-radius: 20px;
    padding: 12px 0;
  }
  .pro-item {
    padding: 12px 20px;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    color: #303133;
  }
  .text2 {
    font-size: 1rem;
    color: #909399;
  }
</style>