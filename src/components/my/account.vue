<template>
  <div>
      <!-- 账户 -->
			<div class="header">
				<div class="top">
					<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
					<span>我的金币</span>
				</div>
			</div>
			<div class="touxiang">
				<img src="../../../static/img/avatar_default.png" alt="">
				<p>dzgbdfgbdfbf</p>
				<p>余额：0金币</p>
			</div>
      <div class="section">
				<p class="p">选择充值金币</p>
				<ul>
					<li v-for="item in all">
						 <p><img src="../../../static/img/mipmap/icon_gold.png" alt="">
						{{item}} <p>售价{{item}}元</p>
						</p>
					</li>
				</ul>
			</div>
			<div class="foot-text">
				<h3>温馨提示：</h3>
				<span>1、充值金额只能在创客学院IOS APP内使用，不能用于安卓、网站等其他平台。<br/>
				2、充值金额后没有使用期限，充值的金额无法退回。<br/>
				3、如遇到无法充值、充值失败等问题，可关注创客学院公会服务号，会有老师帮你解决问题。
				</span>
			</div>
  </div>
</template>

<script>
 
  export default{
        data:function () {
        	 return {
        	  all: [6,18,50,118,218,518,1298,2298,6498]
        	}
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
		.touxiang{
			position: relative;
			height:170/64rem;
			background:#5a99f8;
			img{
				position: absolute;
				top:42/64rem;
				left:35/64rem;
				width: 95/64rem;
				height: 95/64rem;
			}
			 p{
				 position: relative;
				 top:50/64rem;
				 left:160/64rem;
				 font-size:25/64rem;
				 color: #fff;
				 padding-top:5/64rem;
			 }
		}
		.section{
			.p{
				margin:10/64rem 15/64rem;
				font-size:25/64rem;
				font-weight:600;
				color:#666;
			}
			ul{
				display:flex;
				flex-wrap: wrap;
				justify-content: center;
				
				li{
					width: 175/64rem;
					height: 140/64rem;
					border: 1px solid #5a99f8;
					font-size:25/64rem;
					text-align: center;
					margin:15/64rem 15/64rem;
					color:#666;
					line-height:28/64rem;
					
					p{
						margin-top:28/64rem;
					}
				}
			}
		}
		.foot-text{
			 h3{
				 margin:20/64rem 20/64rem;
			 }
			 span{
				 display: inline-block;
				 margin:0 18/64rem;
				 font-size:23/64rem;
				 color:#666;
				 line-height:33/64rem;
			 }
			}
			 
</style>
