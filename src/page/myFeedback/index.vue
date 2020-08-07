<template>
	<div id="mescroll" class="mescroll">
		<div>
			<div>
				<div v-for="(item, index) in feedbackData" :key="index" class="feed-items">
					<p class="feed-item">
						<span class="feed-title">{{item.type}}</span>
						<span class="feed-date">{{item.date}}</span>
					</p>
					<p class="feed-text">{{item.describe}}</p>
					<img v-for="(file, index) in item.files" :imgurl="file" :key="index" class="feed-img" :src="file" />
				</div>
			</div>
			<div id="empty">
			</div>
		</div>
	</div>
</template>

<script>
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
export default {
	data() {
		return {
			hasFeed: true,
			params: {
				page: 1,
				perPage: 20,
			},
			feedbackData: [],
			mescroll:null
		};
	},
	mounted() {
    this.bindScroll();
	},
	methods: {
    downCallback(){
			this.params.page = 1;
			this.getFeedBack()
    },
    upCallback(){
			this.params.page = this.params.page + 1;
			this.getFeedBack()
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
						tip: "暂时没有反馈内容哦～", //提示
					},
					lazyLoad: {
						use: true, 
						attr: 'imgurl' 
					},
				},
			});
		},
		getFeedBack() {
			this.$get(this.API["feedback"], this.params).then((res) => {
				let list = res.data.data || [];
				if(this.params.page==1){
					this.feedbackData = list;
				}else if(list && list.length){
					this.feedbackData = [...this.feedbackData, ...list];
				}
				this.mescroll.endSuccess(list.length);
				console.log(this.feedbackData)
			});
		},
	},
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