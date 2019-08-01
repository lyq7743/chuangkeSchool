<template>
	<div class="HeaderWarp">
		<div class="header">
			<div class="headerleft">
				<router-link to="/question">
					<img class="leftimg" src="../../../../static/img/polyv_btn_back.png" />
				</router-link>
			</div>
			<div class="headertitle">
				{{title}}
			</div>
			<div class="headerright">
				+ 关注
			</div>
		</div>
		<div class="content">
				<div class="content-title">
					<ul>
						<li class="click">
							<router-link to="/questionchilden/crecommend">推荐</router-link>
							<p></p>
						</li>
						<li class="click">
							<router-link to="/questionchilden/ccream">最新</router-link>
							<p></p>
						</li>
						<li class="click" i>
							<router-link to="/questionchilden/cwait">等待回答</router-link>
							<p></p>
						</li>
					</ul>
				</div>

				<div class="navshow">
					<router-view></router-view>
				</div>
			</div>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				arr: [],
				title:''
			}
		},
		mounted: function() {
			this.title=this.$route.query.title
			this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/questionsort')
				.then(res => {
					this.arr = res.data.group;
				})
				this.$router.push({
					path:'/questionchilden/crecommend'
				})
		}
	}
</script>

<style lang="less" scoped>
	.header {
		line-height: 1rem;
		text-align: center;
		position: relative;
		.headerleft{
			position: absolute;
			left: 0.1rem;
			top: 0;
			.leftimg{
				width: 0.8rem;
			}
		}
		.headertitle{
			font-size: 16px;
		}
		.headerright{
			position: absolute;
			right: 0.2rem;
			top: 0;
			font-size: 14px;
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
</style>
