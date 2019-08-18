<template>
	<div class="box">
		<div class="header">
			 <div class="top">
				 <router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
				  <span>系统设置</span>
			 </div>
		</div>
		<div class="list">
			<ul>
				<li class="position">
					 <span>仅在WiFi下观看和离线下载</span>
					   <span><mt-switch  class="switch"></mt-switch></span>
				</li>
				<li @click="feedback">
					 <span>意见反馈</span>
					 <img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li @click="regards">
					 <span>关于创客学院</span>
					  <img src="../../../static/img/i_more.png" alt="" class="imgright">
				</li>
				<li>
				    <span>当前版本</span><span class="textright">V3.1.0</span>
				</li>
			</ul>

		</div>

		<div class="button" @click="outAccount" v-show="isShow">退出登录</div>

	</div>
</template>

<script>
	export default {
		data:function (){
			return {
					isShow:true
				}
		    },
			mounted() {
				this.isAccount()
			},
		methods: {
			outAccount(){
				this.$store.commit("outAccount")
				this.$router.push({path: '/mine'})
			},
			isAccount(){
				this.$store.commit("getAccount")
				this.isShow=this.$store.state.user==""?this.isShow=false:this.isShow=true,
				console.log(this.isShow)
			},
			feedback: function() {
					this.$router.push({path: '/feedback'})
			},
			regards: function() {
					this.$router.push({path: '/regards'})
			}


			}


	    }

</script>

<style lang="less" scoped>
  .position{
    position:relative;
    .switch{
      position: absolute!important;
      top: 10/64rem!important;
      right: 0;
    }
  }
	.box{
		background:#f2f2f2;
		height: 1350/64rem;
		width: 100%;
	}
		.header{
			width: 100%;
			height: 130/64rem;
			 border-bottom: 1px solid #999;
			 background: #fff;
		}
	.top{
		font-size: 34/64rem;
		display: flex;
		width: 580/64rem;
		height: 130/64rem;
		 margin: 0 auto;
		 line-height: 160/64rem;
		 font-weight: 600;

		img{
			width: 20/64rem;
			height: 30/64rem;
		}
		span{
			flex: 1;
			text-align: center;
		}
		a{
			color:#6392ef;
		}
		}
		.list {

			li{
				position: relative;
				margin-top: 15/64rem;
				width: 100%;
				height: 80/64rem;
				border: 1px solid transparent;
				line-height:80/64rem;
				font-size: 30/64rem;
				text-indent: 1em;
				color:#666;
				background:#fff;

				img{
					width:10/64rem;
					height:20/64rem;
					position: absolute;
					top:40/64rem;
					 right:30/64rem;
				}
				.textright{
					position: absolute;
					 right:30/64rem;
				}
				.switch{
					display: inline-block;
					position: absolute;
					right:45/64rem;
					top:28/64rem;
				}
			}
		}
		.button{
			width: 550/64rem;
			height:70/64rem;
			color: #666;
			font-size: 28/64rem;
			background: #fff;
			border-radius:50/64rem;
			margin: 45/64rem 30/64rem;
			line-height:70/64rem;
			text-align: center;
			border:none;
		}
</style>
