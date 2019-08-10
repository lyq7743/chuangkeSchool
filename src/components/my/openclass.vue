<template>
  <div>
     <!-- 我的公开课 -->
      <div class="header">
      	<div class="top">
      		<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
      		<span>我的公开课</span>
      	</div>
      </div>
			<div class="section">
				 <div class="content">
					 <p class="p"><span class="left">今日直播</span><span class="rigth"><slto>111</slto></span></p>
					 <p class="myp">暂无直播</p>
				 </div>
				 <div class="content">
				 					 <p class="p"><span class="left">已报名的公开课</span></p>
				 					 <p class="myp">暂无数据</p>
				 </div>
			</div>
  </div>
</template>

<script>
 
  export default{
 
  }
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
		.content{
			margin:30/64rem auto;
			width: 580/64rem;
			height: 120/64rem;
			// border: 1px solid red;
			font-size:26/64rem;
			.rigth{
				float:right;
			}
			.p{
				color:#999;
			}
			.myp{
				margin-top:30/64rem;
				text-align: center;
				color:#666;
				 
			}
		}
</style>
