<template>
	<div>
		<header>
			<div class="title">
				<p>技术问答</p>
				<div class="date">
					<p class="month">Jul</p>
					<p class="day">{{day}}</p>
				</div>
			</div>
		</header>
		<article>
			<div class="fenlei">
				<div class="fenlei-top">
					<p>热门分类</p>
					<p>
						<a href="#">更多 <span><img src="../../static/img/ic_arrow_right.png" /></span></a>
					</p>
				</div>
				<div class="fenlei-bottom">
					<ul>
						<li v-for="(item,index) in arr2" @click="tiaozhuan(index)">
							<div>
								<img :src="item.imgsrc" />
							</div>
							<div>
								<p>{{item.title}}</p>
								<p>{{item.main}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div class="content">
				<div class="content-title">
					<ul>
						<li class="click">
							<router-link to="/question/recommend">推荐</router-link>
							<p></p>
						</li>
						<li class="click">
							<!--<a href="#">精华</a>-->
							<router-link to="/question/cream">精华</router-link>
							<p></p>
						</li>
						<li class="click" i>
							<!--<a href="#/">等待回答</a>-->
							<router-link to="/question/wait">等待回答</router-link>
							<p></p>
						</li>
					</ul>
				</div>

				<div class="navshow">
					<router-view></router-view>
				</div>
			</div>

		</article>

	</div>
</template>

<script>
	import Header from '../components/question/Header.vue'
	export default {
		components: {
			Header
		},
		data: function() {
			return {
				arr: [],
				arr2: [],
				day:'',
				arr2title:''
			}
		},
		methods:{
			tiaozhuan:function(index){
				this.arr2title=this.arr2[index].title
				this.$router.push({
					path:'/questionchilden',
					query:{title:this.arr2[index].title}
				})
				console.log(this.arr2title);
			}
		},
		mounted: function() {
				this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/questionsort')
				.then(res => {
					this.arr = res.data.group;
				}),
				this.$axios.get(' https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/question')
				.then(res => {
					this.arr2 = res.data.group;
				})
				this.$router.push({
					path:'/question/recommend'
				})
			setTimeout(() => { //页面加载时要执行的方法
				var date = new Date();
				var day = date.getDate();
				// console.log(day);
				this.day = day;
				//innerhtml会报错
			}, 100);
			
		}

	}
</script>

<style scoped lang="less">
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
	}

	.swiper-slide {
		width: 300/75rem !important;
	}

	.swiper-wrapper {
		width: 300/75rem !important;
	}

	body {
		background: #f6f7f7;
		font-size: 12px;
	}

	article {
		margin-bottom: 114/75rem;
	}

	header {
		height: 168/75rem;
		background: #fefefe;
		margin-bottom: 20/75rem;

		.title {
			position: relative;

			&>p {
				padding-top: 66/75rem;
				font-size: 56/75rem;
				margin-left: 40/75rem;
				font-weight: 700;
				opacity: 0.7;
			}

			.date {
				border-radius: 2px;
				width: 70/75rem;
				height: 70/75rem;
				position: absolute;
				top: 50/75rem;
				text-align: center;
				right: 56/75rem;
				box-shadow: 2px 2px 10px lightblue;

				.month {
					color: white;
					width: 100%;
					height: 25/75rem;
					line-height: 25/75rem;
					background: #3997fe;
					border-top-right-radius: 5/75rem;
					border-top-left-radius: 5/75rem;
					font-size: 16/75rem
				}

				.day {
					font-size: 16/75rem;
					background: #ffffff;
					width: 100%;
					height: 46/75rem;
					line-height: 46/75rem;
					color: #557cd7;
					font-weight: 700;
					border-bottom-left-radius: 5/75rem;
					border-bottom-right-radius: 5/75rem
				}
			}
		}
	}

	article {
		.fenlei {
			background: white;
			height: 240/75rem;

			.fenlei-top {
				padding-top: 44/75rem;
				margin-left: 36/75rem;

				p {
					color: black;
					float: left;
				}

				&>p:first-child {
					font-size: 28/75rem;
					font-weight: 700;
				}

				&>p:last-child {
					a {
						color: black;

						span {
							width: 25/75rem;
							height: 25/75rem;
							display: inline-block;
							background: url('../../static/img/ic_arrow_right.png') no-repeat;
							background-size: 50%;
							background-position: center;
						}
					}

					float: right;
					margin-right: 44/75rem;
				}

				&:after {
					content: "";
					display: block;
					clear: both;
				}
			}

			.fenlei-bottom {
				ul {
					display: flex;
					flex-wrap: nowrap;
					overflow: scroll;
					width: 750/75rem;

					&::after {
						content: "";
						display: block;
						clear: both;
					}
				}

				li {
					float: left;
					margin: 40/75rem 10/75rem;
					font-size: 20/75rem;
					width: 300/75rem;
					height: 110/75rem;
					color: white;
					border-radius: 10/75rem;
					display: flex;
					flex-wrap: nowrap;

					&::after {
						content: "";
						display: block;
						clear: both;
					}

					img {
						margin-left: 10/75rem;
						margin-top: 35/75rem;
						width: 40/75rem;
						height: 40/75rem;
					}

					&>div:last-child {
						width: 130/75rem;
						margin-left: 20/75rem;
						margin-top: 25/75rem;

						p {
							line-height: 30/75rem;
						}
					}
				}

				li:nth-of-type(1) {
					background: #3ac3c8;
				}

				li:nth-of-type(2) {
					background: #4eb119;
				}

				li:nth-of-type(3) {
					background: #2dabb0;
				}

				li:nth-of-type(4) {
					background: #616ab7;
				}

				li:nth-of-type(5) {
					background: #5fc7ec;
				}

				li:nth-of-type(6) {
					background: #f4583f;
				}
			}
		}

		.content {
			.content-title {
				text-align: center;
				height: 120/75rem;

				ul {
					display: flex;

					li {
						overflow: hidden;
						height: 100%;
						padding-top: 66/75rem;
						flex: 1;
						position: relative;

						a {
							display: block;
							width: 100%;
							height: 40/75rem;
							font-size: 24/75rem;
							color: black;

							&:hover {
								font-weight: 700;
								color: blue;
							}
						}

						p {
							position: absolute;
							left: 50%;
							bottom: 0/75rem;
							transform: translateX(-50%);
							width: 20/75rem;
							height: 0/75rem;
							border: 1px solid royalblue;
							background: royalblue;
							display: none;
						}

						&:hover {
							color: royalblue;
						}

						&:hover p {
							display: block !important;
						}
					}
				}
			}

			.content-tuijian,
			.content-jinghua,
			.content-wait {
				.content-talk {
					display: flex;
					border-top: 1px solid #ccc;
					padding: 40/75rem 0 40/75rem 34/75rem;

					.content-talk-left {
						p {
							img {
								height: 58/75rem;
								width: 58/75rem;
								border-radius: 50%;
							}

							&:last-child {
								width: 60/75rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}

					.content-talk-right {
						padding-left: 20/75rem;

						p:nth-of-type(1) {
							color: #ccc;
							font-size: 22/75rem;
							padding-bottom: 15/75rem;
						}

						p:nth-of-type(2) {
							font-size: 30/75rem;
							padding-bottom: 5/75rem;
						}

						p:nth-of-type(3) {
							color: darkgray;
							padding-bottom: 10/75rem;

							button {
								border-color: darkgray;
							}
						}

						p:nth-of-type(4) {
							font-size: 22/75rem;
							padding-bottom: 16/75rem;

							span {
								color: royalblue;
							}
						}

						button {
							font-size: 22/75rem;
							background: #ffffff;
							border: 1px solid black;
							border-radius: 5/75rem;
							padding: 2/75rem;
						}
					}
				}
			}
		}
	}
</style>
