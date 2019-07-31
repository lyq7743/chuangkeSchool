<template>
	<div class="seacrh">
		<div id="searchbox">
			<input type="text" placeholder="请输入要搜索的内容..." v-model="msg" @input="search" @keydown.down="down" @keydown.up="up" @blur="clear" />
		</div>

		<ul class="list">
			<li v-for="(item,index) in list" :class="{active:index == xzindex}">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.seacrh {
		width: 400px;
		margin: 20px auto;
	}
	
	#searchbox {
		overflow: hidden;
		border: 1px solid gainsboro;
	}
	
	#searchbox input {
		float: left;
		outline: none;
		border: none;
		line-height: 40px;
	}
	
	#searchbox input[type="text"] {
		width: 400px;
		padding-left: 5px;
		border-radius: 25px;
	}
	
	.seacrh .list {
		list-style: none;
		border: 1px solid gainsboro;
		border-top: none;
	}
	
	.seacrh .list li {
		line-height: 40px;
		padding-left: 5px;
	}
	
	.seacrh .list li.active {
		background-color: #4EB119;
	}
</style>