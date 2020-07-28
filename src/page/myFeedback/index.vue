<template>
  <div>
    <div v-if="hasFeed">
      <div v-for="(item, index) in feedbackData" :key="index" class="feed-items">
        <p class="feed-item">
          <span class="feed-title">{{item.title}}</span>
          <span class="feed-date">{{item.date}}</span>
        </p>
        <p class="feed-text">{{item.text}}</p>
        <img class="feed-img" src="" >
      </div>

      <div class="feed-dialog">
        <div style="margin-bottom: 5px;" ><img src="../../assets/Shape.png"></div>
        <div class="feed-dialog-text">感谢您提供的反馈</div>
        <div class="feed-dialog-text">处理完会通知你哟~</div>
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
        {
          title: 'aa',
          text: 'xxxxxx',
          date: '2020-07-23',
          img: ''
        },
        {
          title: 'AA',
          text: 'XXXX',
          date: '2020-07-23',
          img: ''
        },
      ]
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
  }

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