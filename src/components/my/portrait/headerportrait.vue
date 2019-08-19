<template>
	<div class="box">
		<!-- 头像 -->
		<div class="header">
			<div class="top">
				<router-link to='/mine'><img src="../../../../static/img/i_back.png" alt=""></router-link>
				<span>个人信息</span>
			</div>
		</div>
		<div class="portrait" @click="sheetVisibles">
			<span>头像</span>
			<img src="../../../../static/img/avatar_default.png" alt="" class='imgright img'>
			<mt-actionsheet :actions="actions" v-model="sheetVisible">
			</mt-actionsheet>
		</div>
		<div class="content">
			<ul>
				<li @click="name">
					<span>昵称</span><span class="qu">{{this.$store.state.name}}</span>
					<img src="../../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li>
					<span>性别</span><span class="qu">男</span>
					<img src="../../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="signature">
					<span>个性签名</span><span class="qu">{{this.$store.state.signature}}</span>
					<img src="../../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="occupation">
					<span>职业</span><span class="qu">{{this.$store.state.occupation}}</span>
					<img src="../../../../static/img/i_more.png" alt="" class="imgright">
				</li>
			</ul>
		</div>
		<div class="pass" @click="pass">
			修改密码
		</div>

	</div>
</template>

<script>
	import {Popup} from 'mint-ui';
	export default {
		name: '',

		data() {
			return {

				sheetVisible: false,
				actions: [
				{name: "拍照"}, 
				{name: "从相册选择"}
				],

			}
		},
		mounted() {
			console.log("进入加载signature")
			// this.$store.commit("getAccount")
			// this.$store.commit("getsignature")
			// this.setsignature = this.$store.state.signature
			// this.$store.commit("getoccupation")
			// this.setoccupation = this.$store.state.occupation
		},
		methods: {
			name: function() {
				this.$router.push({
					path: '/name'
				})
			},
			signature: function() {
				this.$router.push({
					path: '/signature'
				})
			},
			occupation: function() {
				this.$router.push({
					path: '/occupation'
				})
			},
			pass: function() {
				this.$router.push({
					path: '/pass'
				})
			},
			sheetVisibles: function() {
				this.sheetVisible = true
			},
		}

	}
</script>
<!--@change="onValuesChange"-->
<style lang="less" scoped>
	.header {
		width: 100%;
		height: 130/64rem;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}
	
	.top {
		font-size: 32/64rem;
		display: flex;
		width: 580/64rem;
		height: 130/64rem;
		margin: 0 auto;
		line-height: 160/64rem;
		font-weight: 600;
		img {
			width: 20/64rem;
			height: 30/64rem;
		}
		span {
			flex: 1;
			text-align: center;
		}
		a {
			color: #6392ef;
		}
	}
	
	.portrait {
		position: relative;
		margin-top: 25/64rem;
		height: 135/64rem;
		background: #fff;
		span {
			display: inline-block;
			position: absolute;
			left: 30/64rem;
			top: 50/64rem;
			font-size: 32/64rem;
			color: #666;
		}
		.imgright {
			width: 105/64rem;
			height: 105/64rem;
			position: absolute;
			right: 30/64rem;
			top: 15/64rem;
		}
	}
	
	// .portrait:hover {
	// 	 background: #F2F2F2;
	// }
	.content {
		margin-top: 25/64rem;
		height: 335/64rem;
		color: #666;
		background: #fff;
		li {
			height: 83/64rem;
			line-height: 83/64rem;
			width: 100%;
			font-size: 27/64rem;
			position: relative;
			font-weight: 600;
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
	}
	
	.pass {
		margin-top: 25/64rem;
		height: 83/64rem;
		line-height: 83/64rem;
		font-size: 27/64rem;
		color: #666;
		background: #fff;
		padding-left: 35/64rem;
	}
	
	.box {
		height: 1138/64rem;
		background: #f2f2f2;
	}
	
	.content li:hover {
		background: #F2F2F2;
	}
	
	.actionsheet {
		color: red;
	}
</style>