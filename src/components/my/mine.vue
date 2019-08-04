<template>
	<div class="mine">
		<div class="login">
			<div class="mylogin">
				<p>
					<router-link to='/login'>登录/注册</router-link>
				</p>
				<p class="color">
					<slot name='imgleft'></slot>
					<router-link to='/login'>成就更好未来</router-link>
				</p>
			</div>
			<router-link to='/login'><slot name='imgright'></slot></router-link>
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
				<li>
					<router-link to='/system'>
						<img src="../../../static/img/ic_my_setting.png" alt="" class="imgleft">
						<span>系统设置</span>
						<img src="../../../static/img/i_more.png" alt="" class="imgright">
					</router-link>
				</li>
				<!--<li>
						<router-link to=''>
							<img src="../../../static/img/ic_my_setting.png" alt="" class="imgleft">
						  <span>我的</span>
							<img src="../../../static/img/i_more.png" alt="" class="imgright">
						</router-link>
					</li>-->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			account: function() {
				console.log('user', this.$store.state.user)
				console.log('pass', this.$store.state.pass)
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/account'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			studycard: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/study'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			openclass: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/openclass'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			questions: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
							path: '/question'
						}) //跳问答
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			orderform: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/orderform'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			browse: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/browse'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			grade: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
							path: '/class'
						}) //跳转班级
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			offline: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/offline'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			},
			news: function() {
				if(localStorage.getItem("user") == this.$store.state.user && localStorage.getItem("pass") == this.$store.state.pass) {
					this.$router.push({
						path: '/news'
					})
				} else {
					this.$router.push({
						path: '/login'
					})
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
		position: relative;
		top: 130/64rem;
		left: 37/64rem
	}

	.login a {
		color: #000;
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

	.content li {
		height: 83/64rem;
		line-height: 83/64rem;
		width: 100%;
		border-bottom: 1px solid #ccc;
		font-size: 27/64rem;
		position: relative;
		font-weight: 600;
		.imgleft {
			width: 67/64rem;
			height: 67/64rem;
			position: relative;
			top: 20/64rem;
			left: 30/64rem;
		}
		.imgright {
			width: 20/64rem;
			height: 20/64rem;
			position: absolute;
			top: 40/64rem;
			right: 30/64rem;
		}
		.qu {
			position: absolute;
			top: 10/64rem;
			right: 70/64rem;
			font-size: 22/64rem;
			color: #ccc;
		}
		span {
			display: inline-block;
			text-indent: 1.7em;
		}
		a {
			color: #000;
			font-weight: 600;
		}
	}

	.content li:hover {
		background: #F2F2F2;
	}
</style>
