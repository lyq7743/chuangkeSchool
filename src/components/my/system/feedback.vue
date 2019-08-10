<template>
	<div>
		<!-- 意见反馈 -->
		<div class="header">
			<div class="top">
				<router-link to='/system'><img src="../../../../static/img/i_back.png" alt=""></router-link>
				<span>意见反馈</span>
			</div>
		</div>
		<div class="scetion">
			<p class="p">反馈信息</p>
			<p class="myp">为了更好地解决您的信息，请尽量在出现问题的网络环境下进行反馈！</p>
			<div class="content">
				<span>请写下您的反馈内容：</span><br/>
				<input type="text">
			</div>
			<div class="e-mail">
				<span>您的联系方式：</span><br/>
				<input type="text" placeholder="QQ/邮箱/手机号">
			</div>
			<button>提交</button>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.header {
		width: 100%;
		height: 130/64rem;
		border-bottom: 1px solid #999;
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
				font-size:34/64rem;
		}
		a {
			color: #6392ef;
		}
	}
	.scetion{
		margin:0 auto;
		width: 540/64rem;
		background:#fafafa;
		// border: 1px solid red;
		font-size:26.5/64rem;
		color:#666;
		.p{
			font-size:32/64rem;
			padding:25/64rem 0;
		}
		.myp{
			margin-top:15/64rem;
		}
		.content{
			margin-top:60/64rem;
			input{
				margin-top:15/64rem;
				width: 540/64rem;
				height: 85/64rem;
				background:#e6e6e6;
				border: none;
				font-size:26/64rem;
			}
		}
		.e-mail{
			margin-top:60/64rem;
			input{
				margin-top:15/64rem;
				width: 540/64rem;
				height: 55/64rem;
				background:#e6e6e6;
				border: none;
				font-size:26/64rem;
			}
		}
		button{
			margin-top:90/64rem;
			width: 540/64rem;
			height: 65/64rem;
			background:#5e8df7;
			font-size:29/64rem;
			border-radius:10/64rem;
			color:#fff;
		}
	}
</style>
