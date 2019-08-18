<template>
	<div class="box">
		<!-- 昵称 -->
			<div class="header">
		  <div class="top">
		    <router-link to='/headerportrait'><img src="../../../../static/img/i_back.png" alt=""></router-link>
		    <span>修改昵称</span>
			<a @click="setName">保存</a>
		  </div>
		</div>
		<div class="amend">
			<input type="text" v-model="name" placeholder="修改昵称">
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			name:""
		}
		
	},
	methods:{
		setName(){
			console.log("触发修改")
				this.$store.commit("setName",this.name)
				this.$router.push("/headerportrait")
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
	.amend{
	   margin-top: 30/64rem;	
	   input{
		   width: 637/64rem;
		   height:60/64rem;
		   font-size: 30/64rem;
		   border: none;
		   border: 1px solid #ccc;
		   border-left: none;
		   border-right: none;
	   }
	}
	  .box {
	  height:1000/64rem;
	  background: #f2f2f2;
	}
</style>
