<template>
  <div class="coin-detail mescroll" id="mescroll">
      <div v-for="(item, index) in detailDataList" :key="index" class="detail-item">
          <div class="col1">
              <p class="col1Title">{{item.title}}</p>
              <p class="col1text">{{item.date}}</p>
          </div>
          <div class="col2">
              {{item.describe}}
          </div>
      </div>
      <div id="empty"></div>
  </div>
</template>
<script>
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
export default {
    data() {
        return {
          detailDataList: [
          ],
          params: {
            page: 1,
            perPage: 20,
          },
        }
    },
    mounted() {
      this.bindScroll()
    },
    methods: {
      downCallback(){
        this.params.page = 1;
        this.getRecord()
      },
      upCallback(){
        this.params.page = this.params.page + 1;
        this.getRecord()
      },
      bindScroll() {
        this.mescroll =new MeScroll("mescroll", {
          down: {
            auto: true,
            callback: this.downCallback,
          },
          up: {
            auto:false,
            callback: this.upCallback, 
            page: {
              num: 1, 
              size: 20, 
            },
            htmlNodata: '<p class="upwarp-nodata">没有了哦～</p>',
            noMoreSize: 5, 
            empty: {
              warpId:'empty',
              tip: "暂时没有内容哦～", //提示
            },
            lazyLoad: {
              use: true, 
              attr: 'imgurl' 
            },
          },
        });
      },
      getRecord() {
        this.$get(this.API['record'],this.params).then(res => {
          let list = res.data.data || [];
          if(this.params.page==1){
            this.detailDataList = list;
          }else if(list && list.length){
            this.detailDataList = [...this.detailDataList, ...list];
          }
          this.mescroll.endSuccess(list.length);
          console.log(this.detailDataList)
        })
      }
    }
};
</script>

<style scoped>
  .mescroll {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
  }
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