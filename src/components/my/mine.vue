<template>
	<div class="mine">
		<div class="login">
			<div class="mylogin" @click="toLogin">
				<p>
					<!-- <router-link to='/login'>登录/注册</router-link> -->
					<span v-if="myshow">登录/注册</span>
					<span v-else>{{this.$store.state.user|getName}}用户</span>
				</p>
				<p class="color">
					<img src="../../../static/img/pen.png" alt="" class='imgleft img'>
					<span>成就更好未来</span>
				</p>
			</div>
			<span @click="avatar">
					<img src="../../../static/img/avatar_default.png" alt="" class='imgright img'>
			</span>

		</div>

		<div class="topbar">
			<div class="item" @click="grade">
				<img src="../../../static/img/ic_my_class.png" alt="">
				<p>班级</p>
			</div>
			<div class="item" @click="offline">
				<img src="../../../static/img/ic_my_download.png" alt="">
				<p>离线</p>
			</div>
			<div class="item" @click="news">
				<img src="../../../static/img/ic_my_msg.png" alt="">
				<p>消息</p>
			</div>
			<div class="item">
				<img src="../../../static/img/ic_my_wechat.png" alt="">
				<p>微信</p>
			</div>
		</div>
		<div class="bg"></div>
		<div class="content">
			<ul>
				<li @click="account">
					<img src="../../../static/img/user_icon_stycard.png" alt="" class="imgleft">
					<span>账户 &nbsp;(0金币)</span><span class="qu">去充值</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="studycard">
					<img src="../../../static/img/ic_my_studycard.png" alt="" class="imgleft">
					<span>学习卡</span><span class="qu">去激活</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="openclass">
					<img src="../../../static/img/ic_my_live.png" alt="" class="imgleft">
					<span>我的公开课</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="questions">
					<img src="../../../static/img/ic_my_qa.png" alt="" class="imgleft">
					<span>我的问答</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="orderform">
					<img src="../../../static/img/ic_my_order.png" alt="" class="imgleft">
					<span>我的订单</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="browse">
					<img src="../../../static/img/ic_my_history.png" alt="" class="imgleft">
					<span>浏览历史</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="system">
					<!-- <router-link to='/system'> -->
					<img src="../../../static/img/ic_my_setting.png" alt="" class="imgleft">
					<span>系统设置</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
					<!-- </router-link> -->
				</li>
				<li @click="us">
					<img src="../../../static/img/ic_my_wechat.png" alt="" class="imgleft">
					<span>关于我们</span>
					<img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					myshow: "",
					userName: ""
				}
			},
			filters: {
				getName(name) {
					return name.slice(7)
				}
			},
			mounted() {
				// console.log("进入加载")
				// this.$store.commit("getAccount")
				this.userName = this.$store.state.user
				if(this.$store.state.user != "") {
					this.myshow = false
				} else {
					this.myshow = true
				}
			},

			methods: {
				toLogin(){
					// console.log(1)
					if(this.$store.state.user == ""){
						this.$router.push({path:'/login'})
					}
				},
				
				account: function() {
					// this.$store.commit("getAccount")
					if(this.$store.state.user != "") {
						this.$router.push("/account")
					} else {
						this.$router.push("/login")
					}

				},
				studycard: function() {
					if(this.$store.state.user != "") {
						this.$router.push({path:'/study'})
					} else {
						this.$router.push("/login")
					}

				},
				openclass: function() {
					if(this.$store.state.user != "") {
						this.$router.push("/openclass")
					} else {
						this.$router.push("/login")
					}

				},
				questions: function() {
					if(this.$store.state.user != "") {
						this.$router.push("/question")
					} else {
						this.$router.push("/login")
					}

				},
				orderform: function() {
					if(this.$store.state.user != "") {
						this.$router.push("/orderform")
					} else {
						this.$router.push("/login")
					}

				},
				browse: function() {
					if(this.$store.state.user != "") {
						this.$router.push("/browse")
					} else {
						this.$router.push("/login")
					}

				},
				grade: function() {
					if(this.$store.state.user != "") {
						this.$router.push("/grade")
					} else {
						this.$router.push("/login")
					}

				},
				
			
//			grade() {
//				console.log(1)
//				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
//					this.$router.push({
//							path: '/className'
//						}) //跳转班级
//				} else {
//					this.$router.push({
//						path: '/login'
//					})
//				}
//			},
            grade: function() {
				if(this.$store.state.user != "") {
					this.$router.push("/className")
				} else {
					this.$router.push("/login")
				}

			},
			offline: function() {
				if(this.$store.state.user != "") {
					this.$router.push("/offline")
				} else {
					this.$router.push("/login")
				}

			},
			news: function() {
				if(this.$store.state.user != "") {
					this.$router.push("/news")
				} else {
					this.$router.push("/login")
				}

			},
			system: function() {
				if(this.$store.state.user != "") {
					this.$router.push("/system")
				} else {
					this.$router.push("/login")
				}

			},
			us: function() {
				if(this.$store.state.user != "") {
					this.$router.push({path:'/us'})
				} else {
					this.$router.push("/login")
				}

			},
			avatar: function() {
				if(this.$store.state.user != "") {
					this.$router.push("/headerportrait")
				} else {
					this.$router.push("/login")
				}

			}

	}
	}
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.login {
		position: relative;
	}
	
	.mylogin {
		box-sizing: border-box;
		width: 100%;
		position: relative;
		top: 130/64rem;
		text-indent:1rem;
	}
	
	.login p {
		color: #666;
		font-size: 28/64rem;
	}
	
	.login p {
		margin-bottom: 15/64rem;
	}
	
	.login .color a {
		color: #666;
	}
	
	.imgright {
		width: 155/64rem;
		height: 155/64rem;
		position: absolute;
		right: 35/64rem;
		top: 90/64rem;
	}
	
	.imgleft {
		width: 25/64rem;
		height: 25/64rem;
	}
	
	.topbar {
		position: absolute;
		top: 300/64rem;
		display: flex;
		width: 100%;
	}
	
	.topbar .item {
		flex: 1;
		text-align: center;
	}
	
	.topbar .item a {
		color: #000;
		font-size: 25/64rem;
	}
	
	.topbar .item span {
		color: #666;
	}
	
	.topbar .item img {
		width: 65/64rem;
		height: 65/64rem;
	}
	
	.bg {
		background: #f8f9fa;
		width: 100%;
		height: 30/64rem;
		margin-top: 350/64rem;
	}
	
	.content {
		height: 800/64rem;
	}
	
	.content li {
		height: 83/64rem;
		line-height: 83/64rem;
		width: 100%;
		border-bottom: 1px solid #EEE;
		font-size: 27/64rem;
		position: relative;
		font-weight: 600;
		.imgleft {
			width: 40/64rem;
			height: 40/64rem;
			position: relative;
			top: 15/64rem;
			left: 30/64rem;
		}
		.imgright {
			width: 10/64rem;
			height: 20/64rem;
			position: absolute;
			top: 35/64rem;
			right: 30/64rem;
		}
		.qu {
			position: absolute;
			top: 4/64rem;
			right: 70/64rem;
			font-size: 22/64rem;
			color: #ccc;
		}
		span {
			position: absolute;
			top: 4/64rem;
			display: inline-block;
			text-indent: 1.7em;
			font-weight: 100;
			font-size: 25/64rem;
		}
		// 		a {
		// 			color: #000;
		// 			font-weight: 600;
		// 		}
	}
	
	.content li:hover {
		background: #F2F2F2;
	}
</style>