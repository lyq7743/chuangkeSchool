<template>
	<div class="SeacrhWarp">
		<div class="seacrh">
			<div id="searchbox">
				<input type="text" v-model='search' placeholder="请输入要搜索的内容..." />
			</div>

			<ul class="list" v-if="search.length>0">
				<li v-for="item in searchData">
					{{item.CareerName}}
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
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				search: '',
				products: []
			}
		},
		computed: {
			searchData: function() {
				var search = this.search;

				if (search) {
					return this.products.filter(function(product) {
						return Object.keys(product).some(function(key) {
							return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}
				return this.products;
			}
		},
		mounted: function() {
			this.GetCareerData();
		},
		methods: {
			GetCareerData() {
				this.$axios.get("../../../static/data/CareerpathData/CareerpathData.json")
					.then(res => {
						//console.log(res.data);
						this.products = res.data.data;
					})
			}
		}
	}
</script>

<style scoped lang="less">
	.SeacrhWarp {
		width: 100%;
		background-color: ghostwhite;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
	}

	.seacrh {
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
		padding-left: 10/75rem;
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
		li {
			list-style: none;
			line-height: 40/75rem;
		}
	}
</style>
