<template>
	<div>
		<!-- 关于创客学院 -->
		<div class="header">
			<div class="top">
				<router-link to='/system'><img src="../../../../static/img/i_back.png" alt=""></router-link>
				<span>关于创客学院</span>
			</div>
		</div>
		<div class="logo">
			<img src="../../../../static/img/mipmap/logo.jpg" alt="">
		</div>
		 <div class="text">
			 <h3>创客学院成就更好未来</h3>
			 <p>
				 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 创客学院是国内高端IT职业在线教育领导品牌和开创者。学院汇聚了国内最顶尖的嵌入式人工智能、物联网、VR虚拟现实、
				 移动互联网等资深专家和技术精英，拥有核心的技术研发力量和强大的教学资源，为广大用户提供个性化、实战化、智能化的卓越在线学习体验。
				 基于技术升级不断创新教学形式和内容，设立智能硬件学院、软件学院、移动互联学院、企业学院四大板块，
				 涵盖嵌入式、物联网、JAVA、Python、Android、iOS、WEB全栈、VR/AR、UI/UE交互设计等9大类职业课程及定制服务。
			 </p>
			 <h3>中国最权威的IT职业在线学习平台</h3>
			  <p>
				 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 华清远见教育集团成立于2004年，国内知名的高端IT教育机构，是国家认证的高新技术企业。自成立以来，集团始终坚持“做良心教育，
				 做专业教育，做受人尊敬的职业教育”的育人理念，伴随着公司业务的高速发展，在嵌入式、移动互联网、物联网、智能硬件、
				 VR/AR等高端IT开发人才领域具备较强的研发、实训、教学实力。公司主营三大业务版块：线下培训业务、在线教育业务及集团研发中心。
			 </p>
			  <h3>创客学院使命</h3>
			 <p>
				 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 学院拥有数百人专业人才服务团队，与全球数千家知名互联网企业建立了人才通道，通过企业定制、双选会、专场招聘等多种人才输送途径，
				 帮助企业与学员成功对接。自成立以来，一直秉承为学员提供优质和可信任的职业教育服务理念，致力于将学员培养为世界一流的精英创客。
			 </p>
			 <span>&copy;2015-2018 清华远见教育集团 版权所有</span>
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
	.logo{
		width: 100%;
		height: 350/64rem;
		 text-align: center;
		 line-height:600/64rem;
	}
	.text{
		width:550/64rem;
		margin: 0 auto;
		h3{
			margin-top:65/64rem;
		}
		p{
			margin-top:25/64rem;
			font-size:14/64rem;
			color:#666;
		}
		span{
			text-align:center;
			width:550/64rem;
			display: inline-block;
			margin-top:80/64rem;
			font-size:18/64rem;
			color:#ccc;
			padding-bottom:60/64rem;
			 
		}
	}
</style>
