<template>
	<div>
		<!-- 修改密码 -->
		<div class="header">
		  <div class="top">
		    <router-link to='/headerportrait'><img src="../../../../static/img/i_back.png" alt=""></router-link>
		    <span>修改密码</span>
		  </div>
		</div>
		<div class="beijing"></div>
		<div class="form">
			<form action="#">
				<div class="one"><img src="../../../../static/img/sign_icon_phone01.png" alt="" class="img"><input type="text" v-model="user"
					 placeholder="请输入注册手机号"  >
					<input type="button" class="gainCode"  @click='gainCode' :disabled="open"  :value="isValue"></input>
		</div>
				<div class="tow"><img src="../../../../static/img/safe42.png" alt="" class="img"><input class="yzm" type="text" placeholder="请输入验证码"></div>
				<div class="tow"><img src="../../../../static/img/sign_icon_lock01.png" alt="" class="img"><input type="password"
					 v-model="pass" placeholder="设置6位以上的密码"></div>
				<div class="button" @click="Add">确定</div>
			</form>
		</div>
	</div>
</template>

<script>
		export default {
		data() {
			return {
				user: "",
				pass: "",
				open:false,
				isValue:"验证码",
				popupval:"popupval",
				popupshow:false,
				reg : /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
			}
		},
		methods: {
			gainCode: function() {
					let vNumber=60
					var time=setInterval(()=>{
						this.open=true
						if(vNumber==0){
							clearInterval(time)
							this.open=false
							this.isValue="重新获取"
							return
						}
						this.isValue=vNumber+"s"
						vNumber--
						 
					},1000)
			},
			Add: function() {
				if (localStorage.getItem(this.user)) {
					alert("该用户已存在,请直接登录")
				} else if (this.pass === "" || this.user === "") {
					alert("账号密码不能为空")
				} else if(this.user.length <= 10 || !this.reg.test(this.user)){
					this.popupshow=true;
					return;
				}else {
					localStorage.setItem('user', this.user)
					localStorage.setItem('pass', this.pass)
					alert("修改成功")
					this.$router.push("/login")
				}
	
			},
			validateTel:function(tel){
//				console.log("方法执行");
				if(this.TEL_REGEXP.test(tel)){
					console.log("判断成功！")
					return true;
				}
				return false;
			}
		}
	}
</script>

<style lang="less" scoped>
		.header {
	  width: 100%;
	  height: 130/64rem;
	  border-bottom: 1px solid #ccc;
	  background: #fff;
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
				width: 400/64rem;
				position: relative;
				left: 50/64rem;
				top: 25/64rem;
				font-size: 27/64rem;
				border: none;
			}
	
			.one {
				border: none;
			}
	.yzm{
	  top: 20/64rem;
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
	
				.kan {
					position: absolute;
					width: 40/64rem;
					height: 26/64rem;
					right: 30/64rem;
					top: 60/64rem;
				}
	
				.gainCode {
					display: inline-block;
					font-size: 25/64rem;
					width: 130/64rem;
					height: 60/64rem;
					text-align: center;
					line-height: 60/64rem;
					background: #5f8cf7;
					border-radius: 8/64rem;
					color: #fff;
					outline: none;
				}
			}
	
			.button {
				width: 580/64rem;
				height: 92/64rem;
				line-height: 92/64rem;
				color: #fff;
				font-size: 32/64rem;
				background: #5f8cf7;
				border-radius: 15/64rem;
				margin: 45/64rem 30/64rem;
				text-align: center;
			}
		}
		.form {
			height: 800px;
			background: #f2f2f2;
		}
	
	.xiaoxi{
		position: fixed;
		top: 0;
		text-align: center;
		line-height: 80/64rem;
		font-size: 0.5rem;
		width: 100%;
		height: 80/64rem;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		animation: slideInUp 5s forwards;
	}
	@keyframes slideInUp {
	    0% {
			opacity: 0;
	    }
		50%{
			opacity: 1;
		}
	    to {
			opacity: 0;
	        
	    }
	}
</style>
