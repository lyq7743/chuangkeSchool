<template>
	<div class="box">
		<!-- 个性签名 -->
		<div class="header">
			<div class="top">
				<p @click="back"><img src="../../../../static/img/i_back.png" alt=""></p>
				<span>修改个性签名</span>
				<a @click="setsignature">保存</a>
			</div>
		</div>
		<div class="amend">
			<input type="text" placeholder="请输入个性签名" v-model="signature">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				signature: this.$store.state.signature,
				brakPath:null
			}
		},
		methods: {
			setsignature() {
//				console.log("触发修改signature")
				this.$store.commit("setsignature", this.signature)
				this.$router.push("/headerportrait")
			},
			back(){
				this.$router.push({path:this.brakPath})
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm=>{
//				console.log(from.fullPath)//from来之前所在的路径
				vm.brakPath = from.fullPath//vm在这里相当于this
				// console.log(vm.brakPath)
			})
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

	.amend {
		margin-top: 30/64rem;

		input {
			width: 637/64rem;
			height: 60/64rem;
			font-size: 30/64rem;
			border: none;
			border: 1px solid #ccc;
			border-left: none;
			border-right: none;
		}
	}

	.box {
		height: 1000/64rem;
		background: #f2f2f2;
	}
</style>
