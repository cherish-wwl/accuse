<template>
  <div>
    <div v-if="hasFeed">
      <div v-for="(item, index) in feedbackData" :key="index" class="feed-items">
        <p class="feed-item">
          <span class="feed-title">{{item.type}}</span>
          <span class="feed-date">{{item.date}}</span>
        </p>
        <p class="feed-text">{{item.describe}}</p>
        <img v-for="(file, index) in item.files" :key="index" class="feed-img" :src="file" >
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasFeed: true,
      feedbackData: [
      ]
    }
  },
  mounted() {
    this.getFeedBack()
  },
  methods: {
    getFeedBack() {
      this.$get(this.API['feedback']).then(res => {
        console.log(res)
        this.feedbackData = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .feed-items {
    padding: 12px 16px;
    margin-top: 10px;
  }
  .feed-item {
    display: flex;
    justify-content: space-between;
  }
  .feed-title {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    color: #303133;
  }
  .feed-date {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #909399;
  }
  .feed-text {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #909399;
    margin-top: 8px;
  }
  .feed-img {
    margin-top: 5px;
    width: 78px;
    /* height: 77px; */
  }
</style>