<template>
	<div class="box">
		<!-- 正在缓存 -->
		<div class="header">
			<div class="top">
				<router-link to='/offline'><img src="../../../../static/img/i_back.png" alt=""></router-link>
				<span>正在缓存</span>
			</div>
		</div>
		<div class="nav">
			<span>全部开始</span><span class="right">全部暂停</span>		 
		</div>
		<div class="images">
			<img src="../../../../static/img/mipmap/ic_cache_gray.png" alt="">
				<p>无下载视频</p>
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
		background:#fff;
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
	.nav{
		background:#fff;
		 width: 100%;
	span{
		display: inline-block;
		width:317/64rem;
		height: 50/64rem;
		text-align: center;
		line-height:50/64rem;
		font-size:27/64rem;
		margin:15/64rem 0;
		&:hover {
			color: blue;
		}
	}
		 .right{
			 display: inline-block;
			 border-left: 1px solid #ccc;
			 
		 }
	}
	.images{
		width: 100%;
		height: 100%;
		text-align: center;
		margin-top:50%;
		img{
			width: 200/64rem;
			height: 200/64rem;
		}
		p{
			font-size:25/64rem;
	  }
	}
	.box{
		height:1300px;
		background:#fafafa;
	}	
</style>
