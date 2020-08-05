<template>
	<div class="task">
        <div class="header-container">
            <div class="header">
                <div class="coinDetails">
                    <span class="myCoin">我的金币</span>
                    <span class="coindetail">
                        <router-link to="coinDetail.html" @click="turnToCoinDetail">金币明细</router-link>
                    </span>
                </div>
                <div class="coinImg">
                    <img class="coinLeft" src="../../assets/coinLeft.png" />
                    <span class="myCoinNum">{{myCoin}}</span>
                    <!-- <img class="coinRight" src="../../assets/banner-bg.png" /> -->
                </div>
            </div>
        </div>
		<div class="signBlock">
			<p class="signText">
				{{signNum}}
				<span class="signTip1">（连续签到翻倍金币哦）</span>
			</p>
			<div class="coinItems">
				<div v-for="(item, index) in coin" :key="index" class="coinItem">
					<span
						class="coinText1"
						:class="item.is_sign ? 'coinText2' : 'coinText1'"
					>{{item.is_double ? '翻倍' : item.score}}</span>
                    <i class="check-icon" v-if="item.is_sign "></i>
                    <i class="tips-icon" v-if="(coin[index-1]|| {}).is_today">明日可领</i>
					<p class="signTip2">{{item.is_today ? '今日' : item.title.slice(-2)}}</p>
				</div>
			</div>
			<div class="signBtn" @click="nowSign">立即签到</div>
		</div>
		<div class="noviceBlock">
			<p class="taskTitle">新手任务</p>
			<div v-for="(item, index) in noviceDataList" :key="index" class="taskItems">
				<div class="noviceCol1">
					<img style="height: 32px;width: 32px;background-color:#ccc" />
				</div>
				<div class="noviceCol2">
					<p
						class="col2Title"
					>{{item.title}}({{(item.schedule || {}).achieve}}/{{(item.schedule || {}).total}})</p>
					<p class="col2text">
						<span class="col2CoinNum">+{{item.score}}</span>金币
					</p>
				</div>
				<div
					class="noviceCol3"
					:class="{opa1: item['status'] == 0, opa1: item['status'] == 1, opa5: item['status'] == 2}"
				>{{item.status | swichStatus}}</div>
			</div>
		</div>
		<div class="everydayBlock">
			<p class="taskTitle">每日任务</p>
			<div v-for="(item, index) in everydayDataList" :key="index" class="taskItems">
				<div class="noviceCol1">
					<img style="height: 32px;width: 32px;background-color:#ccc" />
				</div>
				<div class="noviceCol2">
					<p
						class="col2Title"
					>{{item.title}}({{(item.schedule || {}).achieve}}/{{(item.schedule || {}).total}})</p>
					<p class="col2text">
						<span class="col2CoinNum">+{{item.score}}</span>金币
					</p>
				</div>
				<div
					class="noviceCol3"
					:class="{opa1: item['status'] == 0, opa1: item['status'] == 1, opa5: item['status'] == 2}"
					@click="completeTask"
				>{{item.status | swichStatus}}</div>
			</div>
		</div>
		<div class="supplementTip">更多任务正在开启中敬请期待哦～</div>
		<sign-dialog v-if="isShowSignDialog" :is_double="is_double" @unwanted="unwanted"></sign-dialog>
	</div>
</template>
<script>
import signDialog from "../../components/signDialog";
export default {
	data() {
		return {

			coin:  [
						{
							title: "\u7b2c1\u5929",
							score: 100,
							day: 1,
							is_double: 0,
							is_today: 1,
							date: "2020-08-06",
							is_sign: 1,
						},
						{
							title: "\u7b2c2\u5929",
							score: 400,
							day: 2,
							is_double: 1,
							is_today: 0,
							date: "2020-08-07",
							is_sign: 0,
						},
						{
							title: "\u7b2c3\u5929",
							score: 300,
							day: 3,
							is_double: 0,
							is_today: 0,
							date: "2020-08-08",
							is_sign: 0,
						},
						{
							title: "\u7b2c4\u5929",
							score: 400,
							day: 4,
							is_double: 0,
							is_today: 0,
							date: "2020-08-09",
							is_sign: 0,
						},
						{
							title: "\u7b2c5\u5929",
							score: 1000,
							day: 5,
							is_double: 1,
							is_today: 0,
							date: "2020-08-10",
							is_sign: 0,
						},
						{
							title: "\u7b2c6\u5929",
							score: 600,
							day: 6,
							is_double: 0,
							is_today: 0,
							date: "2020-08-11",
							is_sign: 0,
						},
					],
			signNum: 0,
			noviceDataList: [],
			everydayDataList: [],
			myCoin: "1000",
			isShowSignDialog: false,
			is_double: false,
		};
	},
	filters: {
		swichStatus(val) {
			switch (val) {
				case 0:
					return "去完成";
				case 1:
					return "领取";
				case 2:
					return "已完成";
			}
		},
	},
	components: {
		signDialog,
	},
	mounted() {
		// this.signCalendar();
		this.getTaskList();
	},
	methods: {
		turnToCoinDetail() {
			this.$router.push({ name: "coinDetail" });
		},
		signCalendar() {
			this.$get(this.API["signCalendar"]).then((res) => {
				console.log(res);
				this.signNum = res.data.aggregate;
				this.coin = res.data.calendar;
			});
		},
		getTaskList() {
			this.$get(this.API["taskList"]).then((res) => {
				console.log("QQQ", res);
				this.noviceDataList = res.data.noob_task;
				this.everydayDataList = res.data.daily_task;
				console.log(this.noviceDataList, this.everydayDataList);
			});
		},
		nowSign() {
			this.$post(this.API["signIn"]).then((res) => {
				if (res.status === 0) {
					this.is_double = res.data.is_double === 1 ? true : false;
					this.isShowSignDialog = true;
				}
			});
		},
		completeTask() {
			console.log("QQQ");
		},
		unwanted() {
			this.isShowSignDialog = false;
		},
	},
};
</script>
<style>
 html{
    height: 100%;
    background: linear-gradient(115.29deg, #2b71ff 1.19%, #807dff 50.67%);
 }
</style>
<style scoped>
.task {
	/* background: linear-gradient(115.29deg, #2b71ff 1.19%, #807dff 50.67%); */
	padding: 0 10px;
	padding-bottom: 5rem;
    overflow: hidden;
}
.header {
    padding: 2rem 3rem;
}
.header-container{
    background: url(../../assets/banner-bg.png) no-repeat;
    background-size: 100%;
    background-position: 0 0.7rem;

}
.coinDetails {
	display: flex;
	justify-content: space-between;
}
.coinImg {
	margin-top: 1.5rem;
    display: flex;
    width: 55%;
}
.myCoin {
	font-family: PingFang SC;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	color: #ffffff;
}
.coindetail,
.coindetail a {
	font-family: PingFang SC;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	color: #ffffff;
}
.coinLeft {
	width: 50px;
    height: 50px;
	margin-bottom: -8px;
	margin-left: -7px;
}
.myCoinNum {
	font-family: PingFang SC;
	font-style: normal;
	font-weight: normal;
	font-size: 40px;
	color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
}
.coinRight {
	width: 100px;
	margin-bottom: -24px;
	margin-left: 60px;
}
.signBlock {
	background: #ffffff;
	border-radius: 12px;
	padding: 1.5rem;
}
.signText {
	font-size: 1.6rem;
	margin-bottom: 2.2rem;
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
	position: relative;
	text-align: center;
}
.coinText1 {
	display: inline-block;
	color: #fbbf64;
	font-weight: normal;
	background: url("../../assets/coin1.png") no-repeat;
	width: 3rem;
	height: 3rem;
	line-height: 3rem;
    position: relative;
    z-index: 2;
    font-size: 1.4rem;
}
.check-icon{
    /* background-color: linear-gradient(151.99deg, #2B71FF 1.19%, #807DFF 50.67%); */
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-image: url('../../assets/check.png');
    background-repeat: no-repeat;
    background-color: #807DFF;
    background-size: .6rem .6rem;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(24%);
    z-index: 4;
}
.tips-icon{
    background-image: url('../../assets/tips.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-83%);
    padding: 0.15rem 0.5rem .5rem;
    z-index: 4;
    color: #fff;
    font-size: .5rem;
    line-height: 1.5;
    white-space: nowrap;
}
.coinText2{
    color: #FFF65F;
    text-shadow: 0px 0px 1px #DF8D00;
}
.coinText2::after {
    content: "";
	display: inline-block;
	background: url("../../assets/coin2.png") no-repeat;
    width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.signBtn {
	background: linear-gradient(90deg, #ff9500 0%, #ffde6e 100%);
	border-radius: 60px;
	font-family: PingFang SC;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 3.6rem;
	color: #ffffff;
	width: 15rem;
	height: 3.6rem;
	text-align: center;
	margin: auto;
	margin-top: 2.2rem;
}

.noviceBlock {
	background: #ffffff;
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
	color: #2d6dff;
	margin-right: 2px;
}
.noviceCol3 {
	background: #c4c4c4;
	border-radius: 30px;
	width: 6rem;
	height: 2.8rem;
	text-align: center;
	margin: 0;
	margin-left: 1rem;
	line-height: 2.8rem;
}

.everydayBlock {
	background: #ffffff;
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
	opacity: 0.9;
}
.opa5 {
	opacity: 0.5;
}
.opa1 {
	opacity: 1;
}

</style>