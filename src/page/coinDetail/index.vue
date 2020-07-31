<template>
  <div class="coin-detail">
      <div v-for="(item, index) in detailDataList" :key="index" class="detail-item">
          <div class="col1">
              <p class="col1Title">{{item.title}}</p>
              <p class="col1text">{{item.date}}</p>
          </div>
          <div class="col2">
              {{item.describe}}
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
          detailDataList: [
          ]
        }
    },
    mounted() {
      this.getRecord()
    },
    methods: {
      getRecord() {
        this.$get(this.API['record']).then(res => {
          console.log(res)
          this.detailDataList = res.data.data
        })
      }
    }
};
</script>

<style scoped>
  .detail-item {
      display: flex;
      padding: 1.6rem;
      justify-content: space-between;
  }
  .col1Title {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    color: #303133;
    letter-spacing: 1px;
  }
  .col1text {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    color: #606266;
    margin-top: 2px;
  }
  .col2 {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
</style>