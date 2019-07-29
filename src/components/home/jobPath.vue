<template>
	<div class="Careerpath">
		<div class="banner">
			<img src="../../../static/img/ic_career_path_head.png" alt="">
		</div>

		<div class="Careerlist">
			<div v-for="(item,index) in Careerdata" :key="index" class="Careerdata">
				<img :src="item.img" alt="">
				<h2>{{item.CareerName}}</h2>
				<ul>
					<li>
						{{item.CareerLevel}}
						<p>LEVEL</p>
					</li>
					<li>
						<span>|</span>
					</li>
					<li>
						{{item.bounty}}
						<p>赏金</p>
					</li>
					<li>
						<span>|</span>
					</li>
					<li>
						{{item.class}}
						<p>课时</p>
					</li>
				</ul>
				<div class="Careerfoot">
					<img src="../../../static/img/ic_all_student.png" alt="">
					<p>{{item.learning}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				Careerdata: []
			}
		},
		mounted: function() {
			this.GetCareerData();
		},
		methods: {
			GetCareerData() {
				this.$axios.get("../../../static/data/CareerpathData/CareerpathData.json")
					.then(res => {
						console.log(res.data);
						this.Careerdata = res.data.data
					})
			}
		}
	}
</script>

<style lang="less" scoped>
	.Careerpath {
		position: fixed;
		background-color: ghostwhite;
		height: 100%;
		width: 100%;
		top: 130/64rem;
	}

	.banner {
		width: 90%;
		margin: 20/64rem auto;
	}

	.Careerlist {
		display: flex;
		width: 90%;
		margin: 20/64rem auto;
		flex-wrap: wrap;
	}

	.Careerlist .Careerdata {
		width: 48%;
		text-align: center;
		background-color: white;
		margin-bottom: 20/64rem;
	}

	.Careerlist .Careerdata:nth-child(1) {
		margin-right: 20/64rem;
	}

	.Careerlist .Careerdata:nth-child(3) {
		margin-right: 20/64rem;
	}

	.Careerlist .Careerdata:nth-child(5) {
		margin-right: 20/64rem;
	}

	.Careerlist .Careerdata:nth-child(7) {
		margin-right: 20/64rem;
	}

	.Careerlist .Careerdata ul {
		display: flex;
		width: 81%;
		margin: 20/64rem auto;
	}

	.Careerlist .Careerdata ul li {
		width: 23.33%;
	}

	.Careerlist .Careerdata img {
		width: 100%;
	}

	.Careerlist .Careerdata .Careerfoot {
		display: flex;
		justify-content: center;
		padding-bottom: 30/64rem;
	}

	.Careerlist .Careerdata .Careerfoot img {
		width: 20%;
		margin-right: 20/64rem;
	}
</style>
