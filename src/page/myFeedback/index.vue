<template>
	<div id="mescroll" class="mescroll">
		<div>
			<div v-if="hasFeed">
				<div v-for="(item, index) in feedbackData" :key="index" class="feed-items">
					<p class="feed-item">
						<span class="feed-title">{{item.type}}</span>
						<span class="feed-date">{{item.date}}</span>
					</p>
					<p class="feed-text">{{item.describe}}</p>
					<img v-for="(file, index) in item.files" :key="index" class="feed-img" :src="file" />
				</div>
			</div>
			<div v-else></div>
		</div>
	</div>
</template>

<script>
import MeScroll from 'mescroll.js'
export default {
	data() {
		return {
			hasFeed: true,
			params: {
				page: 1,
				perPage: 10,
			},
			feedbackData: [
				{
					type: "浏览内容相关", //类型（title）
					describe: "测试反馈信息", //叙述
					date: "2020-07-20", //日期
					files: [
						//文件
						"http://img.dev.fawo.cn/img/i/E0qPQ6qgg0E0/original/b71f1c.webp",
					],
				},
				{
					type: "浏览内容相关", //类型（title）
					describe: "测试反馈信息", //叙述
					date: "2020-07-20", //日期
					files: [
						//文件
						"http://img.dev.fawo.cn/img/i/E0qPQ6qgg0E0/original/b71f1c.webp",
					],
				},
				{
					type: "浏览内容相关", //类型（title）
					describe: "测试反馈信息", //叙述
					date: "2020-07-20", //日期
					files: [
						//文件
						"http://img.dev.fawo.cn/img/i/E0qPQ6qgg0E0/original/b71f1c.webp",
					],
				},
				{
					type: "浏览内容相关", //类型（title）
					describe: "测试反馈信息", //叙述
					date: "2020-07-20", //日期
					files: [
						//文件
						"http://img.dev.fawo.cn/img/i/E0qPQ6qgg0E0/original/b71f1c.webp",
					],
				},
			],
		};
	},
	mounted() {
    this.getFeedBack();
    this.bindScroll();
	},
	methods: {
    downCallback(){
      console.log('downCallback')
    },
    upCallback(){
      console.log('upCallback')
    },
		bindScroll() {
			new MeScroll("mescroll", {
				//第一个参数"mescroll"对应上面布局结构div的id (1.3.5版本支持传入dom对象)
				//如果您的下拉刷新是重置列表数据,那么down完全可以不用配置,具体用法参考第一个基础案例
				//解析: down.callback默认调用mescroll.resetUpScroll(),而resetUpScroll会将page.num=1,再触发up.callback
				down: {
					callback: this.downCallback, //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
				},
				up: {
					callback: this.upCallback, //上拉加载的回调
					//以下是一些常用的配置,当然不写也可以的.
					page: {
						num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
						size: 10, //每页数据条数,默认10
					},
					htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
					// 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
					// 这就是为什么无更多数据有时候不显示的原因.
					toTop: {
						//回到顶部按钮
						// src: "../img/mescroll-totop.png", //图片路径,默认null,支持网络图
						offset: 1000, //列表滚动1000px才显示回到顶部按钮
					},
					empty: {
						//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
						// warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
						// icon: "../img/mescroll-empty.png", //图标,默认null,支持网络图
						// tip: "暂无相关数据~", //提示
					},
					lazyLoad: {
						// use: true, // 是否开启懒加载,默认false
						// attr: 'imgurl' // 标签中网络图的属性名 : <img imgurl='网络图  src='占位图''/>
					},
				},
			});
		},
		getFeedBack() {
			this.$get(this.API["feedback"], this.params).then((res) => {
				console.log(res);
				this.feedbackData = [...this.feedbackData, res.data];
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