<template>
  <div class="coin-detail mescroll" id="mescroll">
      <div v-for="(item, index) in detailDataList" :key="index" class="detail-item">
          <div class="col1">
              <img class="icon"  src="@/assets/record.png" />
              <p class="col1Title">{{item.title}}</p>
              <p class="col1text">{{item.days}}天</p>
          </div>
          <div class="col2">
              <p>有效期至：{{item.vaildDate}}</p>
              <p>开通时间：{{item.startDate}}</p>
              <p>订单编号：{{item.num}}</p>
          </div>
      </div>
      <div class="line"><span>仅展示近一年的交易记录</span></div>
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
            {
              id:1,
              title:'免广告一个月',
              days:'30',
              vaildDate:'2020.08.04 10:40',
              startDate:'2020.08.04 10:40',
              num:'29357624793769436'
            },
            {
              id:4,
              title:'免广告一个月',
              days:'30',
              vaildDate:'2020.08.04 10:40',
              startDate:'2020.08.04 10:40',
              num:'29357624793769436'
            },
            {
              id:2,
              title:'免广告一个月',
              days:'30',
              vaildDate:'2020.08.04 10:40',
              startDate:'2020.08.04 10:40',
              num:'29357624793769436'
            },{
              id:6,
              title:'免广告一个月',
              days:'30',
              vaildDate:'2020.08.04 10:40',
              startDate:'2020.08.04 10:40',
              num:'29357624793769436'
            }
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
        // this.$get(this.API['record'],this.params).then(res => {
        //   let list = res.data.data || [];
        //   if(this.params.page==1){
        //     this.detailDataList = list;
        //   }else if(list && list.length){
        //     this.detailDataList = [...this.detailDataList, ...list];
        //   }
          // this.mescroll.endSuccess(list.length);
        //   console.log(this.detailDataList)
        // })
        // this.mescroll.endSuccess(1);
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
    background: #FFFFFF;
    border: 1px solid #F5F7FA;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 12px 16px;
    overflow: hidden;
  }
  .icon{
    width: 18px;
    height: 15px;
    margin-right: 10px;
  }
  .col1{
    background: linear-gradient(90deg, #F4F8FF 0%, rgba(255, 255, 255, 0) 100%);
    padding: 10px;
  }
  .col1Title {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #303133;
    display: inline-block;
  }
  .col1text {
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    color: #606266;
    float: right;
  }
  .col2 {
    padding: 10px;
    font-size: 12px;
    line-height: 17px;
    color: #606266;
  }
  .col2 p:not(:last-child){
    margin-bottom: 10px;
  }
  .line{
    font-size: 12px;
    line-height: 17px;
    color: #BFC4CD;
    text-align: center;
    
    position: relative;
    margin: 2rem 1.6rem 0;
  }
  .line span{
    background-color: #fff;
    z-index: 2;
    padding: 0 3px;
  }
  .line::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    border: 0.5px dashed #EDEFF2;
    top: 50%;
    z-index: -1;
  }
</style>