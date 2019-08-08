<template>
	<div>
		<!-- 官方公告 -->
		<div class="header">
			<div class="top">
				<router-link to='/news'><img src="../../../../static/img/i_back.png" alt=""></router-link>
				<span>官方公告</span>
			</div>
		</div>
		<div class="text">
				<p>暂无数据</p>
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
	.text{
		width: 100%;
		height: 100%;
		text-align: center;
		margin-top:50%;
		p{
			font-size:30/64rem;
	  }
	}
</style>
