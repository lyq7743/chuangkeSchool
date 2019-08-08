<template>
  <div class="box">
     <!-- 学习卡 -->
     <div class="header">
     	<div class="top">
     		<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
     		<span>我的学习卡</span>
				<router-link to='#'>去激活</router-link>
     	</div>
     </div>
		 <div class="text">
		 		<p>暂无课程</p>
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
		background: #fff;
	 }
	 
	 .top {
	 	font-size: 32/64rem;
	 	display: flex;
	 	width: 580/64rem;
	 	height: 130/64rem;
	 	margin: 0 auto;
	 	line-height: 160/64rem;
	 	 
	 
	 	img {
	 		width: 20/64rem;
	 		height: 30/64rem;
	 	}
	 
	 	span {
	 		flex: 1;
	 		text-align: center;
	 			font-size:34/64rem;
				font-weight: 600;
	 	}
	 	a {
			margin-top:5/64rem;
			font-size:28/64rem;
			color:#000;
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
	 .box{
	 	height:1300px;
	 	background:#fafafa;
	 }	
</style>
