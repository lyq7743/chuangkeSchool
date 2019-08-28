<template>
	<div class="SeacrhWarp">
		<div class="header">
			<p><img class="imgleft" src="../../../static/img/i_back.png" alt="" @click="back"></p>
		</div>
		<div class="seacrh">
			<div id="searchbox">
				<input type="text" v-model='search' @input="searchData" placeholder="请输入要搜索的内容..." />
			</div>

			<ul class="list" v-if="newList.length>0">
				<li v-for="item in newList">
					{{item.className}}
				</li>
			</ul>
		</div>

		<div class="hotseacrh">
			<h2>热门搜索</h2>
			<ul>
				<li>WEB</li>
				<li>ARM</li>
				<li>UI</li>
				<li>JAVA</li>
				<li>Python</li>
				<li>大数据</li>
				<li>人工智能</li>
				<li>人脸识别</li>
				<li>嵌入式</li>
				<li>C++</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				search: '',
				products: [],
				newList:[],
			}
		},
		methods: {
			searchData() {
				// console.log(1)
				var search = this.search;
// 
				if (search) {			//过滤找到的符合条件的数据
//					console.log(this.products)
					this.newList= this.products.filter(res=>{//filter的对象必须是数组
						return res.className.indexOf(search)!=-1
					})
//					console.log(this.newList)
				}
			},
			back() {
				this.$router.push({
					path: '/home/recommended'
				});
			}
		},
		mounted() {
				this.$axios.get("../../../static/data/recommededData/searchClass.json")
					.then(res => {
//						console.log(res.data.search);
						this.products = res.data.search;
					})
		},

	}
</script>

<style scoped lang="less">
	.header {
		z-index: 999;
		width: 100%;
		background: #fff;
		height: 70/75rem;
		// display: flex;
		// align-items: center;
		position: fixed;
		top: 0;
		background-color: #fff;
	
		img {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	
		.imgleft {
			left: 30/75rem;
			width: 15/75rem;
			height: 25/75rem;
		}
	}
	.SeacrhWarp {
		width: 100%;
		background-color: ghostwhite;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
	}

	.seacrh {
		margin-top: 100/75rem!important;
		width: 90%;
		margin: 20/75rem auto;
	}

	#searchbox {
		overflow: hidden;
	}

	#searchbox input {
		float: left;
		line-height: 50/75rem;
		border: none;
		outline: none;
		border-radius: 25/75rem;
	}

	#searchbox input[type="text"] {
		width: 100%;
		padding-left: 25/75rem;
		font-size: 23/75rem;
	}

	.seacrh .list {
		list-style: none;
		border: 1px solid gainsboro;
		border-top: none;
	}

	.seacrh .list li {
		line-height: 40/75rem;
		padding-left: 5/75rem;
	}

	.seacrh .list li.active {
		background-color: aliceblue;
	}

	.hotseacrh {
		width: 90%;
		margin: 20/75rem auto;
	}

	.hotseacrh h2 {
		color: skyblue;
	}

	.hotseacrh ul {
		display: flex;
		flex-wrap: wrap;
		li {
			padding: 10/75rem;
			list-style: none;
			line-height: 40/75rem;
		}
	}
</style>
