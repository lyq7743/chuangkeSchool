<template>
  <div class="mine">
 <div class="login">
					<router-link to='/login' >登录/注册</router-link>
					<p><slot name='imgleft'></slot><router-link to='/login'>成就更好未来</router-link></p>
					<router-link to='/login'><slot name='imgright'></slot></router-link>
				</div>
				 
				<div class="topbar">
					<div class="item">
						<img src="../../../static/img/ic_my_class.png" alt="">
						<p>班级</p>
					</div>
					<div class="item">
						<router-link to='/login'><img src="../../../static/img/ic_my_download.png" alt=""></router-link>
						<p><router-link to='/login'>离线</router-link></p>
					</div>
					<div class="item">
						<router-link to='/login'><img src="../../../static/img/ic_my_msg.png" alt=""></router-link>
						<p><router-link to='/login'>消息</router-link></p>
					</div>
					<div class="item">
						<router-link to='/login'><img src="../../../static/img/ic_my_wechat.png"alt=""></router-link>
						<p><router-link to='/login'>微信</router-link></p> 
					</div>
				</div>
				<div class="bg"></div>
				<div class="content">
				<ul>
					<li>
						<router-link to='/login'><img src="../../../static/img/ic_my_wechat.png"alt=""></router-link>
						<router-link to='/login'>学习卡</router-link>
					</li>
				</ul>
			</div>
				
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="less">
*{
margin: 0;
padding: 0;
}
.login {
   margin: 50/64rem 30/64rem;
   
}
 .topbar {
  position: relative;
  top: 60/64rem;
  display: flex;
  width: 100%;
}
.topbar .item {
  flex: 1;
  text-align: center;
}
.topbar .item span {
  color: #666;
}
.topbar .item img {
  width: 55/64rem;
  height: 55/64rem;
}

 .bg{
 	background:#eee;
 	width: 100%;
 	height: 30/64rem;
 	margin-top:100/64rem;
 }



</style>
