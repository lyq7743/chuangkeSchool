<template>
	<div class="content">
		<!-- agoDayHide='1517483961' -->
		<!-- futureDayHide="1526054400" -->
		<Calendar ref="Calendar" :markDateMore="arr" v-on:isToday="clickToday" agoDayHide="1530115221" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
		<br>
		<h5 class="ps">
			<div class="blue"></div>
			<div class="p">错过的课程</div>
			<div class="origin"></div>
			<div class="p">未开始的课程</div>
			<div class="yellow"></div>
			<div class="p">今日日期</div>
	</h5>
		<br />

		<!-- <div class="div" @click="demo">查看(老师名)直播课程</div> -->
		<div class="div" @click="tiaozhuan">查看更多课程</div>

		<!-- <a href="http://localhost:8000/index/">跳转</a> -->
	</div>
</template>

<script>
	// import Calendar from '../vue-calendar-component/index';
	import Calendar from "vue-calendar-component";
	export default {
		data() {
			return {
				origin: [12, 13],
				blue: 4,
				// yellow:24,
				day: '',
				arr2: [{
						date: "2019/9/5",
						className: "mark1"
					},
					{
						date: "2019/9/13",
						className: "mark2"
					}
				],
				// arr2: [
				//   {
				//     date: "2019/9/1",
				//     className: "mark1"
				//   },
				//   {
				//     date: "2019/9/13",
				//     className: "mark2"
				//   }
				// ],
				arr: [{
						date: "2019/9/5",
						className: "mark1"
					},
					{
						date: "2019/9/14",
						className: "mark1"
					},
					{
						date: "2019/8/15",
						className: "mark2"
					}
				]
			};
		},
		components: {
			Calendar
		},
		methods: {
			clickDay(data) {
//				console.log("选中了", data); //选中某天
				this.$toast("选中了" + data);
			},
			clickToday(data) {
//				console.log("跳到了本月今天", data); //跳到了本月
			},
			changeDate(data) {
				this.$toast("切换到的月份为" + data);
//				console.log("左右点击切换月份", data); //左右点击切换月份
			},
			demo() {
				this.$refs.Calendar.ChoseMonth("2019-8-" + this.day); //跳到12月12日选中12月12日
			},
			tiaozhuan: function() {
				this.$router.push({
					path: '/home/freeclass',
					query: {
						status: false
					}
				})
			}
		},
		created() {
			function format(date, index) {
				date = new Date(date);
				return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
			}
			// setTimeout(() => {
			//   this.arr = [
			//     {
			//       date: format(new Date(), this.origin[0]),
			//       className: "mark1"
			//     },
			//     {
			//       date: format(new Date(), this.blue),
			//       className: "mark2"
			//     }
			//   ];
			//   this.arr.push({
			//     date: format((new Date()+1), this.origin[1]),
			//     className: "mark1"
			//   });
			// }, 300);
		},
		mounted() {
			// this.$http.request({
			//     url:'http://localhost:8000/index/',
			//     method:'get'
			// }).then(function(response){
			// 	console.log(123);
			//     console.log(response);
			// })

			// 获取日期
			setTimeout(() => { //页面加载时要执行的方法
				var date = new Date();
				var day = date.getDate();
//				console.log(day);
				this.day = day;
			}, 100);

			// this.$axios.get('../../static/data/question/questIonsort.json')
			// .then(res => {
			// 	this.arr = res.data.group;
			// }),
		}
	};
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
	.ps {
		margin-left: 20%;
	}
	
	.ps div {
		text-align: center;
		float: left;
		margin-left: 5px;
	}
	
	.ps .blue {
		/* position: absolute; */
		top: 0;
		left: 0;
		width: 10px;
		height: 10px;
		background-color: blue;
	}
	
	.ps .origin {
		/* position: absolute; */
		top: 0;
		left: 0;
		width: 10px;
		height: 10px;
		background-color: orange;
	}
	
	.ps .yellow {
		/* position: absolute; */
		top: 0;
		left: 0;
		width: 10px;
		height: 10px;
		background-color: yellow;
	}
	
	h3 {
		text-align: center;
		width: 90%;
		margin: auto;
	}
	
	.div {
		margin: auto;
		width: 220px;
		height: 44px;
		line-height: 44px;
		background: #0fc37c;
		color: #fff;
		font-size: 17px;
		text-align: center;
		margin-top: 20px;
	}
	
	.wh_container .mark1 {
		background-color: orange;
	}
	
	.wh_container .mark2 {
		background-color: blue;
	}
	
	.wh_content_item .wh_isMark {
		background: orange;
	}
	
	.wh_container .wh_content_all {
		/* background-color: #f29543; */
	}
</style>