<template>
	<div class="box">

		<div class="header">
			<img class="imgleft" src="../../../static/img/i_back.png" alt="" @click="back">
			<h2>休闲小游戏--拼图</h2>
		</div>

		<button @click="shuffle()">重置</button>
		<transition-group name="cell" tag="div" class="container">
			<div @click.prevent="clickBlock(index)" v-for="(puzzle,index) in puzzles" :key="puzzle" v-text="puzzle" :class="puzzle === ''? 'cell cells':'cell'"></div>
		</transition-group>
		<div class="msg">
			<h3>友情提示：</h3>
			<p>行内数字相加为15则通关</p>
		</div>
	</div>
</template>

<script>
	import _ from "lodash/lodash";
	export default {
		data() {
			return {
				puzzles: []
			}
		},
		methods: {
			rander() {
				this.puzzles = [1, 2, 3, 4, 5, 6, 7, 8, '']
			},
			shuffle() {
				this.puzzles = _.shuffle(this.puzzles);
			},
			clickBlock(index) {
				let curIndex = this.puzzles[index];
				let leftIndex = this.puzzles[index - 1];
				let rightIndex = this.puzzles[index + 1];
				let topIndex = this.puzzles[index - 3];
				let bottomIndex = this.puzzles[index + 3];

				if(leftIndex === '' && index % 3) {
					this.$set(this.puzzles, index - 1, curIndex);
					this.$set(this.puzzles, index, '');
				} else if(rightIndex === '' && 2 !== index % 3) {
					this.$set(this.puzzles, index + 1, curIndex);
					this.$set(this.puzzles, index, '');
				} else if(topIndex === '') {
					this.$set(this.puzzles, index - 3, curIndex);
					this.$set(this.puzzles, index, '');
				} else if(bottomIndex === '') {
					this.$set(this.puzzles, index + 3, curIndex);
					this.$set(this.puzzles, index, '');
				}

				this.pass();
			},
			pass() {
				if(this.puzzles[8] === '') {
					const newPuzzles = this.puzzles.slice(0, 8);
					const isPass = newPuzzles.every((e, i) => e === i + 1);
					if(isPass) {
						alert('666！');
					}
				}
			},
			back() {
				this.$router.push({
					path: '/learning/details'
				});
			}
		},
		mounted() {
			this.rander();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.box {
		width: 100%;
		margin: 60/75rem auto 0;
	}
	
	.header {
		z-index: 999;
		width: 100%;
		height: 70/75rem;
		position: fixed;
		top: 0;
		border-bottom: 1px solid lightskyblue;
		background-color: #fff;
		h2 {
			text-align: center;
			line-height: 70/75rem;
		}
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
	
	.container {
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		margin: 50/75rem auto 0;
		border: 1px solid #ccc;
	}
	
	.cell {
		color: #fff;
		font-size: 20/75rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 32.999%;
		height: 200/75rem;
		margin: 1/75rem;
		box-shadow: 0 0 3/75rem #333333;
		background-color: skyblue;
	}
	
	.cells {
		background-color: #fff;
		box-shadow: 0px 0px 0px #333333;
		z-index: -999;
	}
	
	.cell-move {
		transition: transform 0.5s;
	}
	
	button {
		width: 50%;
		line-height: 50/75rem;
		border-radius: 25/75rem;
		background-color: skyblue;
		color: #fff;
		border: none;
		outline: none;
		margin-top: 50/75rem;
		margin-left: 30/75rem;
	}
	
	.msg {
		margin-top: 30/75rem;
		margin-left: 30/75rem;
	}
</style>