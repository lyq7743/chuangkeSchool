<template>
  <div class="content">
    <div class="header">
      <div class="top">
        <img src="../../../static/img/i_back.png" alt="" @click="back">
        <span>登录</span>
        <router-link to='/register'>注册</router-link>
      </div>
    </div>
    <div class="beijing"></div>
    <div class="form">
      <form action="">
        <div class="one"><img src="../../../static/img/sign_icon_phone01.png" alt="" class="img"><input type="text"
            placeholder="用户名/手机号" v-model="user"></div>
        <div class="tow"><img src="../../../static/img/sign_icon_lock01.png" alt="" class="img"><input type="password"
            placeholder="请输入密码" v-model="pass">
          <span><img src="../../../static/img/sign_icon_eye01.png" alt="" class="showpass" @click='showpass'></span></div>
        <div class="button" @click="Login">登录</div>
      </form>
      <a href="">忘记密码</a>
    </div>
    <div class="box">
      <div class="foot">
        <h2>第三方登录</h2>
        <div class="myfoot">
          <div>
            <img src="../../../static/img/weixin.png" alt="">
            <p>微信</p>
          </div>
          <div>
            <img src="../../../static/img/qq.png" alt="">
            <p>QQ</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				user: "",
				pass: ""
			}
		},
		methods: {
			back(){
				this.$router.push({path:'/mine'})
			},
			showpass: function() {
				if ($("form>.tow").find("input").attr("type") == "password") {
					$("form>.tow").find("input").attr("type", "text")
				} else {
					$("form>.tow").find("input").attr("type", "password")
				}
			},
			Login: function() {
				var resUser = /^[1][3,4,5,7,8][0-9]{9}$/;
				var regPass = /^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/;
				if (resUser.test(this.user) && regPass.test(this.pass)) {
//					console.log("通过了登录测试")
//					console.log(this.user)
//					console.log(this.pass)
					this.$store.commit('setUsername',this.user)
					this.$store.commit('setPass',this.pass)
					
					
					// this.$store.commit("loginAccount", {
					// 	user: this.user,
					// 	pass: this.pass,
					// 	name:""
					// })
					this.$router.push({
						path: '/mine'
					})
				} else {
					Toast({
						message: '请输入正确格式，请重试',
						position: 'top'
					});
				}
			}
		}

	}
</script>

<style lang="less" scoped>
	.content {
		position: relative;
		
	}
	input{
		outline: none;
	}
	.header {
		width: 100%;
		height: 130/64rem;
		border-bottom: 1px solid #000;
	}

	.top {
		font-size: 32/64rem;
		display: flex;
		width: 580/64rem;
		height: 130/64rem;
		margin: 0 auto;
		line-height: 160/64rem;
		font-weight: 600;

		img{
			width: 20/64rem;
			height: 30/64rem;
			position: relative;
			top:60/64rem;
		}

		span {
			flex: 1;
			text-align: center;
		}

		a {
			color: #6392ef;
		}
	}

	.beijing {
		width: 100%;
		height: 40/64rem;
		background: #f2f2f2;
	}

	form {
		width: 100%;

		input {
			height: 60/64rem;
			width: 460/64rem;
			position: relative;
			left: 50/64rem;
			top: 20/64rem;
			font-size: 27/64rem;
			border: none;
		}

		.one {
			border: none;
		}

		div {
			background: #fff;
			position: relative;
			height: 110/64rem;
			border: 1px solid #ccc;

			.img {
				width: 35/64rem;
				height: 45/64rem;
				position: relative;
				left: 25/64rem;
				top: 35/64rem;
			}

			.showpass {
				position: absolute;
				width: 40/64rem;
				height: 27/64rem;
				right: 30/64rem;
				top: 45/64rem;
			}
		}

		.button {
			width: 580/64rem;
			height: 92/64rem;
			color: #fff;
			font-size: 32/64rem;
			background: #5f8cf7;
			border-radius: 15/64rem;
			margin: 45/64rem 30/64rem;
			line-height: 92/64rem;
			text-align: center;
		}
	}

	.form a {
		font-size: 32/64rem;
		color: #779cf5;
		margin-left: 475/64rem;
	}

	.form {
		height: 100%;
		background: #f2f2f2;
	}

	.box {
		position: relative;
		// bottom: 0;
		height: 11rem;
		width: 100%;
		background: #f2f2f2;
	}

	.foot {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 250/64rem;
		background: #fff;

		.myfoot {
			width: 100%;
			display: flex;

			div {
				flex: 1;
				text-align: center;
				position: relative;
				top: 60/64rem;

				img {
					width: 87/64rem;
					height: 87/64rem;
				}

				p {
					font-size: 28/64rem;
				}
			}
		}

		h2 {
			text-align: center;
			color: #999;
			position: relative;
			top: 25/64rem;
		}
	}

</style>
