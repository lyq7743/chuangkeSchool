<template>
	<div class="box">
		<!-- 浏览历史 -->
		<div class="header">
			<div class="top">
				<router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
				<span>浏览历史</span>
			</div>
			<div class="content">
				<div v-if="status">
					暂无数据
				</div>
				<ul v-else>
					<li v-for="(item,index) in shuju" :key="index" @click="toClass(index)">
            <span class="xuhao">{{index+1}}</span>
						<img v-lazy="item.img_src" alt="">
						<div>
							<p class="class-content-body-name">{{item.classTitle}}</p>
							<p class="class-content-body-level">已有{{item.studyPeople}}人在学</p>

						</div>
             <div class="date" >
                 {{date[index]}}
             </div>
					</li>

				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				shuju: this.$store.state.historyClass,
				status:true,
        date:this.$store.state.date
			}
		},
		mounted(){
//			console.log(this.$store.state.historyClass)
			if(this.$store.state.historyClass.length !=0){
				this.status = false
			}
		},
		methods:{
			toClass(index){
//				console.log(index)
				this.$router.push({path:'/detailsClass',query:{browerPath:'/browse',browerIndex:index}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		width: 100%;
		height: 130/64rem;
		border-bottom: 1px solid #999;
		background: #fff;
	}

	.top {
		font-size: 32/64rem;
		display: flex;
		width: 580/64rem;
		height: 130/64rem;
		margin: 0 auto;
		line-height: 160/64rem;


		img {
			width: 20/64rem;
			height: 30/64rem;
		}

		span {
			flex: 1;
			text-align: center;
			font-size: 34/64rem;
			font-weight: 600;
		}

		a {
			margin-top: 5/64rem;
			font-size: 28/64rem;
			color: #000;
		}
	}

	.content {

		&>div{
			text-align: center;
			font-size: 25/75rem;
			margin-top: 500/75rem;
		}
		ul {
      position: relative;

			li {
				border-bottom: 1px solid #ccc;
				padding: 20/75rem;
        padding-left: 45/75rem;
				display: flex;
        position: relative;
        .xuhao{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 15/75rem;
        }
        .date{
          top:70%;
          transform: translateY(-50%);
          right: 6%;
          position: absolute;
        }
				img {
					border-radius: 5/75rem;
					width: 150/75rem;
					height: 80/75rem;
				}

				div {
					padding-left: 10/75rem;

					p {
						font-size: 20/75rem;
						line-height: 40/75rem;

						&:first-child {
							font-size: 25/75rem;

						}
					}
				}
			}
		}
	}

	.box {
		height: 1300px;
		background: #fafafa;
	}
</style>
