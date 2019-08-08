<template>
  <div>
     <!-- 消息 -->
      <div class="header">
      	<div class="top">
      		<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
      		<span>我的消息</span>
      	</div>
      </div>
			<div class="content">
				<ul @click="account">
					<li>
						<img src="../../../static/img/ic_my_studycard.png" alt="" class="imgleft">
						<span>官方公告</span> 
						<img src="../../../static/img/i_more.png" alt="" class="imgright">
					</li>
					<li>
							<img src="../../../static/img/ic_my_setting.png" alt="" class="imgleft">
							<span>系统通知</span>
							<img src="../../../static/img/i_more.png" alt="" class="imgright">
					</li>
					<li>
						<img src="../../../static/img/ic_my_live.png" alt="" class="imgleft">
						<span>学习通知</span>
						<img src="../../../static/img/i_more.png" alt="" class="imgright">
					</li>
					<li>
						<img src="../../../static/img/ic_my_qa.png" alt="" class="imgleft">
						<span>问答评论</span>
						<img src="../../../static/img/i_more.png" alt="" class="imgright">
					</li>
				</ul>
			</div>
  </div>
</template>

<script>
 
  export default{
 methods: {
 	account: function() {
 			this.$router.push({
 				path: '/official'
 			})
 		 
 	},
 	 
	  },
	}
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
		
		.content li {
			height: 83/64rem;
			line-height: 83/64rem;
			width: 100%;
			border-bottom: 1px solid #ccc;
			font-size: 27/64rem;
			position: relative;
			.imgleft {
				width:53/64rem;
				height: 53/64rem;
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
			span {
				display: inline-block;
				text-indent: 1.7em;
			}
			a {
				color: #000;
				font-weight: 600;
			}
		}
</style>
