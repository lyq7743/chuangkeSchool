<template>
	<div>
		<header class="classes-header">
			<!--顶部标题-->
			<div class="top">
				<div class="main">
					<p>我的班级</p>
					<span>登录</span>
				</div>
			</div>
			<div class="main">
				<div class="banner">
					<img src="../../static/img/un_buy_class.jpg" />
				</div>
				<!--购买课程-->
				<div class="course">
					<div class="left">
						<div class="icon">
							<img src="../../static/img/ic_class_people_m.png" />
						</div>
						<div class="button">
							<router-link to="/home/livebroadcastClass/end">
								<span @click="tiaozhuan">试听公开课</span>
							</router-link>
							<img src="../../static/img/a7.png" />
						</div>
					</div>
					<div class="aa"></div>
					<div class="right">
						<div class="icon">
							<img src="../../static/img/ic_class_people_w.png" />
						</div>
						<div class="button">
							<span>购课咨询</span>
							<img src="../../static/img/a7.png" />
						</div>
					</div>
				</div>
			</div>
		</header>

		<section class="classes-section">

			<div class="main">
				<div class="title">
					<div>
						<!-- 背景图片（小圆） -->
						<div class="back">
							<img src="../../static/img/a5.png" />
						</div>
						<p>&nbsp;&nbsp;购买<span>职业课程</span></p>
						<p>享专属学习服务</p>
					</div>
				</div>
				<div class="title title3">
					<div>
						<!-- 背景图片（小圆） -->
						<div class="back2">
							<img src="../../static/img/a6.png" />
						</div>
					</div>
				</div>
				<!-- 学前测试 -->
				<div class="test" v-for="(item,index) in arr">
					<div>
						<div class="icon">
							<img :src="item.imgsrc" />
						</div>
						<div class="main">
							<div class="title">
								<p>{{item.title}}</p>
								<span>{{item.main}}</span>
							</div>
						</div>
					</div>
				</div>

				<div class="title title2">
					<div>
						<!-- 背景图片（小圆） -->
						<div class="back">
							<img src="../../static/img/a5.png" />
						</div>
					</div>
				</div>

			</div>
			<!-- 查询 -->
			<div class="query">
				<a href="#">课程查询</a>
			</div>

		</section>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				arr: []
			}
		},
		methods:{
			tiaozhuan:function(){
				this.$router.push({
					path:'/home',
					query:{status: false}
				})
			}
		},
		mounted() {
			this.$axios.get('../../static/data/classData/class.json')
			.then(res => {
				this.arr = res.data.group;
			})
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.classes-header {
		width: 100%;

		.top {
			z-index: 2;
			width: 100%;
			position: fixed;
			background-color: white;

			.main {
				width: 100%;
				height: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				font-weight: bold;
				font-size: 0.35rem;

				span {
					font-weight: normal;
					position: absolute;
					right: 10px;
				}
			}
		}

		.main {
			width: 100%;
			position: relative;

			.banner {
				img {
					width: 100%;
				}
			}

			.course {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				background-color: white;
				top: 5rem;
				width: 75%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border: 1px solid black;
				border-radius: 10px;
				box-sizing: border-box;
				padding: 0 0.2rem;

				.aa {
					width: 1px;
					height: 3rem;
					border-left: 1px solid black;
				}

				.button {
					text-align: center;
					position: relative;

					span {
						width: 80%;
						position: absolute;
						top: 0.2rem;
						font-size: 0.35rem;
						color: gray;
					}

					img {
						width: 80%;
					}
				}

				>div {
					margin-top: 0.5rem;
					margin-bottom: 0.5rem;

					.icon {
						text-align: center;

						img {
							width: 1.3rem;
						}
					}
				}
			}
		}
	}

	.classes-section {
		width: 100%;

		>.main {
			margin-top: 1.5rem;

			.back {
				position: absolute;
				left: 0;

				img {
					z-index: 1;
					width: 0.5rem;
				}
			}

			.back2 {
				position: absolute;
				right: 0;

				img {
					z-index: 1;
					width: 0.5rem;
				}
			}

			>div {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					margin-top: 0.45rem;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						width: 1.5rem;
					}
				}

				.title {
					margin-top: 0.5rem;
					font-size: 0.35rem;
					text-align: center;
					width: 5.5rem;

					span {
						text-align: left;
						margin-top: 0.3rem;
						display: inline-block;
						line-height: 18px;
						font-size: 0.28rem;
						color: gray
					}
				}
			}

			.title {
				font-size: 0.5rem;

				>div {
					p {
						width: 100%;

						span {
							color: #238ffe;
						}
					}
				}
			}

			.title2 {
				position: absolute;
				top: 23rem;
			}

			.title3 {
				position: absolute;
				top: 16rem;
			}
		}

		.query {
			margin-top: 1rem;
			display: flex;
			justify-content: center;
			margin-bottom: 2rem;

			a {
				font-size: 0.3rem;
				padding: 0.3rem 1.5rem;
				border-radius: 30px;
				text-decoration: none;
				color: white;
				background-color: #448df6;
			}
		}
	}

	.classes-footer {
		width: 100%;
		height: 2rem;
		border-top: 1px solid gray;

		.footerul {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			li {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				text-align: center;
				list-style: none;

				a {
					text-decoration: none;
				}

				img {
					width: 0.75rem;
				}

				span {
					color: gray;
					font-size: 0.4rem;
					margin-top: 10px;
				}

				.xz {
					color: #448df6;
				}
			}
		}
	}
</style>
