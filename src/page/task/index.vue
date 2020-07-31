<template>
  <div class="task">
    <div class="header">
      <div class="coinDetails">
        <span class="myCoin">我的金币</span>
        <span class="coindetail"><router-link to="coinDetail.html" @click="turnToCoinDetail">金币明细</router-link></span>
      </div>
      <div class="coinImg">
          <img class="coinLeft" src="../../assets/coinLeft.png" />
          <span class="myCoinNum">{{myCoin}}</span>
          <img class="coinRight" src="../../assets/coinRight.png" />
      </div>
    </div>
    <div class="signBlock">
      <p class="signText">
        {{signNum}}
        <span class="signTip1">（连续签到翻倍金币哦）</span>
      </p>
      <div class="coinItems">
        <div v-for="(item, index) in coin" :key="index" class="coinItem">
          <!-- <img src="../../assets/coin1.png" style="    position: absolute;"/> -->
          <span class="coinText1" :class="item.is_sign ? 'coinText2' : 'coinText1'">{{item.is_double ? '翻倍' : item.score}}</span>
          <p class="signTip2">{{item.is_today ? '今日' : item.title.slice(-2)}}</p>
        </div>
      </div>
      <div class="signBtn">立即签到</div>
    </div>
    <div class="noviceBlock">
        <p class="taskTitle">新手任务</p>
        <div v-for="(item, index) in noviceDataList" :key="index" class="taskItems">
            <div class="noviceCol1">
                <img style="height: 32px;width: 32px;background-color:#ccc" />
            </div>
            <div class="noviceCol2">
                <p class="col2Title">{{item.title}}({{(item.schedule || {}).achieve}}/{{(item.schedule || {}).total}})</p>
                <p class="col2text"><span class="col2CoinNum">+{{item.score}}</span>金币</p>
            </div>
            <div class="noviceCol3" :class="{opa1: item['status'] == 0, opa1: item['status'] == 1, opa5: item['status'] == 2}">
                {{item.status | swichStatus}}
            </div>
        </div>
    </div>
    <div class="everydayBlock">
        <p class="taskTitle">每日任务</p>
        <div v-for="(item, index) in everydayDataList" :key="index" class="taskItems">
            <div class="noviceCol1">
                <img style="height: 32px;width: 32px;background-color:#ccc" />
            </div>
            <div class="noviceCol2">
                <p class="col2Title">{{item.title}}({{(item.schedule || {}).achieve}}/{{(item.schedule || {}).total}})</p>
                <p class="col2text"><span class="col2CoinNum">+{{item.score}}</span>金币</p>
            </div>
            <div class="noviceCol3" :class="{opa1: item['status'] == 0, opa1: item['status'] == 1, opa5: item['status'] == 2}" @click="completeTask">
                {{item.status | swichStatus}}
            </div>
        </div>
    </div>
    <div class="supplementTip">更多任务正在开启中敬请期待哦～</div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            coin: [
            ],
            signNum: 0,
            noviceDataList: [
            ],
            everydayDataList: [
            ],
            myCoin: '1000',
        }
    },
    filters: {
        swichStatus(val) {
            switch (val) {
                case 0: 
                    return '去完成'
                case 1: 
                    return '领取'
                case 2: 
                    return '已完成'
            }
        }
    },
    mounted() {
        this.signCalendar()
        this.getTaskList()
    },
    methods: {
        turnToCoinDetail() {
            this.$router.push({name: 'coinDetail'})
        },
        signCalendar() {
            this.$get(this.API['signCalendar']).then(res => {
                console.log(res)
                this.signNum = res.data.aggregate
                this.coin = res.data.calendar
            })
        },
        getTaskList() {
            this.$get(this.API['taskList']).then(res => {
                console.log('QQQ', res)
                this.noviceDataList = res.data.noob_task
                this.everydayDataList = res.data.daily_task
                console.log(this.noviceDataList,this.everydayDataList )
            })
        },
        completeTask() {
            console.log('QQQ')
        }
    }
};
</script>

<style scoped>
    .task {
        background: linear-gradient(115.29deg, #2B71FF 1.19%, #807DFF 50.67%);
        padding: 0 10px;
        padding-top: 13rem;
        padding-bottom: 5rem;
    }
    .header {
        position: absolute;
        top: 14px;
        left: 43px;
        width: 80%;
    }
    .coinDetails {
        display: flex;
        justify-content: space-between;
    }
    .coinImg {
        margin-top: 15px;
    }
    .myCoin {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        color: #FFFFFF;
    }
    .coindetail ,.coindetail a{
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #FFFFFF;
    }
    .coinLeft {
        width: 50px;
        margin-bottom: -8px;
            margin-left: -7px;
    }
    .myCoinNum {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        color: #FFFFFF;
    }
    .coinRight {
        width: 100px;
        margin-bottom: -24px;
        margin-left: 60px;
    }
    .signBlock {
        background: #FFFFFF;
        border-radius: 12px;
        padding: 1.5rem;
    }
    .signText {
        font-size: 1.6rem;
        margin-bottom: 1.8rem;
    }
    .signTip1 {
        font-size: 1.2rem;
        color: #a7abb3;
        vertical-align: text-bottom;
    }
    .signTip2 {
        font-size: 1.2rem;
        color: #a7abb3;
        vertical-align: text-bottom;
        /* position: absolute; */
        /* top: 33px; */
        /* width: 3rem; */
    }
    .coinItems {
        display: flex;
        justify-content: space-between;
    }
    .coinItem {
        /* position: relative; */
        text-align: center;

    }
    .coinText1 {
        display: inline-block;
        color: #FBBF64;
        font-weight: normal;
        background: url('../../assets/coin1.png') no-repeat;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
    }
    .coinText2 {
        display: inline-block;
        color: #FFF65F;
        font-weight: 500;
        background: url('../../assets/coin2.png') no-repeat;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
    }
    
    .signBtn {
        background: linear-gradient(90deg, #FF9500 0%, #FFDE6E 100%);
        border-radius: 60px;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 3.6rem;
        color: #FFFFFF;
        width: 15rem;
        height: 3.6rem;
        text-align: center;
        margin: auto;
        margin-top: 2.2rem;
    }

    .noviceBlock {
        background: #FFFFFF;
        border-radius: 12px;
        padding: 1.5rem;
        margin-top: 1.6rem;
    }
    .taskTitle {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
    }
    .taskItems {
        display: flex;
        padding: 1.6rem 0;
    }
    .noviceCol1 {
        width: 12%;
    }
    .noviceCol2 {
        width: 67%;
    }
    .col2Title {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        margin-top: -2px;
    }
    .col2text {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        margin-top: 1px;
    }
    .col2CoinNum {
        color: #2D6DFF;
        margin-right: 2px;
    }
    .noviceCol3 {
        background: #C4C4C4;
        border-radius: 30px;
        width: 6rem;
        height: 2.8rem;
        text-align: center;
        margin: 0;
        margin-left: 1rem;
        line-height: 2.8rem;
    }

    .everydayBlock {
        background: #FFFFFF;
        border-radius: 12px;
        padding: 1.5rem;
        margin-top: 1.6rem;
    }
    .supplementTip {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        margin-top: 3rem;
        color: #fff;
        text-align: center;
        letter-spacing: 1.5px;
        opacity: .9;
    }
    .opa5 {
        opacity: .5;
    }
    .opa1 {
        opacity: 1;
    }
</style>