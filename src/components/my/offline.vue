<template>
  <div>
    <!-- 离线 -->
		<div class="header">
			<div class="top">
				<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
				<span>缓存管理</span>
			</div>
		</div>
		<div @click="proceed" class="proceedcache">
			<img src="../../../static/img/mipmap/icon_unfold_02.png" alt="" class="imgleft">
			<span class="title">正在缓存 &nbsp;(0)</span>
			<span class="span">暂无正在缓存的视频</span> 
			<img src="../../../static/img/i_more.png" alt="" class="imgright">
		</div>
		<div @click="finish" class="finishcache">
			<img src="../../../static/img/mipmap/icon_html5_default.png" alt="" class="imgleft">
			<span class="title">已缓存 &nbsp;(0)</span>
			<span class="span2">暂无已缓存的视频</span> 
			<img src="../../../static/img/i_more.png" alt="" class="imgright">
		</div>
  </div>
</template>

<script>
 
  export default{
     methods: {
     	proceed: function() {
     			this.$router.push({
     				path: '/proceedcache'
     			})
     	},
				finish: function() {
					this.$router.push({
						path: '/finishcache'
					})
			},
			}
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
	  .proceedcache{
		  height:100/64rem;
		  line-height:100/64rem;
		  width: 100%;
		  border-bottom: 1px solid #ccc;
		  font-size: 27/64rem;
		  position: relative;
		   
	  }
	  .finishcache{
	  		  height: 100/64rem;
	  		  line-height:100/64rem;
	  		  width: 100%;
	  		  border: 1px solid #ccc;
	  		  font-size: 27/64rem;
	  		  position: relative;
			  margin-top:25/64rem;
	  }
	  .imgleft {
	  	width: 69/64rem;
	  	height: 69/64rem;
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
	   .title{
		  position: relative;
		  bottom:24/64rem;
	  	  display: inline-block;
	  	  text-indent: 1.7em;
	  }
	  .span{
		  color:#ccc;
		  font-size:20/64rem;
		  position: relative;
		  top:10/64rem;
		  right:170/64rem;
	  }
	  .span2{
	  		  color:#ccc;
	  		  font-size:20/64rem;
	  		  position: relative;
	  		  top:10/64rem;
	  		  right:140/64rem;
	  }
</style>
