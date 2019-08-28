<template>
	<div class="content">
		<div class="header">
			<p><img class="imgleft" src="../../../static/img/i_back.png" alt="" @click="back"></p>
			<p class="title">开通课程</p>
		</div>

		<div class="classContent">
			<p class="classTitle">课程信息</p>
			<div>
				<img :src="shuju.img_src" alt="">
				<div>
					<p class="className">{{shuju.classTitle}}</p>
					<p class="classPrice">{{shuju.nowPrice}}</p>
				</div>
			</div>

		</div>
		<div class="bangji">
			<p class="classType">选择班型</p>
			<p class="classMoney">VIP课程 <span>￥{{shuju.nowPrice}}</span><span class="del">￥{{shuju.outPrice}}</span><img src="../../../static/img/drawable/checkbox_sel_check.png"
				 alt=""></p>

		</div>
		<div class="footer">
			<div class="yue">
				<p>同学，你的余额：￥ {{this.$store.state.money}}</p>
			</div>
			<div class="buy">
				<p>实付<span>￥{{shuju.nowPrice}}</span></p>
				<button @click="toClass">购买</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'mint-ui';
	export default {
		data() {
			return {
				backPath: null,
				shuju: /* this.$route.query.shuju2 */this.$store.state.classData, /*, this.$route.query.shuju1, */
        plate:this.$route.query.plate,
        classId:this.$route.query.classId,
			}
		},
		methods: {
			back() {
				this.$router.push({
					path: this.backPath
				})
			},
			toClass() {
				if (this.$store.state.money - this.shuju.nowPrice < 0) {
					Toast({
						message: '购买失败',
						iconClass: 'bgimg',
						duration: 1500
					});
					setTimeout(res => {
						this.$router.push({
							path: '/account'
						})
					}, 2000);
				} else {
//        console.log(this.plate)
          this.$store.commit('setPlate',this.plate)
//        console.log(this.classId)
          this.$store.commit('setClassId',this.classId)
					Toast({
						message: '购买成功',
						iconClass: 'bgimg',
						duration: 1500
					});
					this.$store.commit('changeMoney', this.shuju.nowPrice)
					setTimeout(res => {
						this.$router.push({
							path: '/learning/details'
						})
					}, 2000);
				}


			},

		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
//				console.log(from.fullPath);
				vm.backPath = from.fullPath
			})
		}
	}
</script>

<style lang="less" scoped>
	.bgimg {
		background: url(../../../static/img/1.png) no-repeat;
	}

	.content {
		height: 1400/75rem;
		width: 100%;
		background: #efeef4;
	}

	.header {

		z-index: 999;
		width: 100%;
		background: #fff;
		height: 70/75rem;
		// display: flex;
		// align-items: center;
		position: fixed;
		top: 0;
		background-color: #fff;

		img {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

		.imgleft {
			left: 30/75rem;
			width: 15/75rem;
			height: 25/75rem;
		}

		.title {
			font-weight: bold;
			font-size: 30/75rem;
			height: 70/75rem;
			text-align: center;
			line-height: 70/75rem;
		}

	}

	.classContent {
		background: #fff;
		margin-top: 70/75rem;

		.classTitle {
			font-size: 30/75rem;
			height: 60/75rem;
			line-height: 60/75rem;
			padding-left: 20/75rem;
			border-bottom: 1px solid #ccc;

		}

		img {

			width: 128/75rem;
			height: 92/75rem;
		}

		&>div {
			padding: 20/75rem;
			display: flex;

			&>div {
				.className {
					font-size: 28/75rem;
				}

				p {
					margin-left: 20/75rem;
					padding: 6/75rem 0;
				}

				.classPrice {
					font-size: 21/75rem;
					color: #d68593;
				}
			}
		}
	}

	.bangji {
		background: #fff;
		margin-top: 20/75rem;

		.classType {
			padding: 0 24/75rem;
			line-height: 80/75rem;
			border-bottom: 1px solid #ccc;
			font-weight: 500;
			font-size: 31/75rem;
		}

		.classMoney {
			position: relative;
			padding-left: 24/75rem;
			height: 78/75rem;
			line-height: 78/75rem;
			font-size: 27/75rem;

			.del {
				padding-left: 20/75rem;
				text-decoration: line-through;
				color: gray;
			}

			span {
				font-size: 21/75rem;
				color: #ccc;
			}

			img {
				position: absolute;
				top: 50%;
				right: 41/75rem;
				transform: translateY(-50%);
				width: 40/75rem;
				height: 40/75rem;
			}
		}

	}

	.footer {
		width: 100%;
		background: #fff;
		z-index: 999;
		position: fixed;
		bottom: 0;

		.yue {
			padding-left: 20/75rem;
			height: 80/75rem;
			color: skyblue;
			line-height: 80/75rem;
			border-bottom: 1px solid #ccc;
			box-shadow: 0 2px 2px #efeef4;
		}

		.buy {
			position: relative;
			padding-left: 175/75rem;
			height: 80/75rem;
			line-height: 80/75rem;
			display: flex;

			p {
				font-size: 28/75rem;

				span {
					color: #fa4742;
				}
			}

			button {
				position: absolute;
				right: 0;
				border: none;
				color: white;
				background-color: #fa4742;
				width: 250/75rem;
				height: 80/75rem;
			}
		}
	}
</style>
