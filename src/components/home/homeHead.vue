<template>
	<div class="homeHeader">
		<div class="homgHeader-top">
			<slot name='imgleft'></slot>
			<router-link to='../../search'>
				<input type="search" class='search' placeholder="ajax·php·android">
			</router-link>
			<slot name='imgright'></slot>
		</div>
		<div class="homgHeader-bottom">
			<ul>
				<li>
					<router-link to='/home/recommended'>推荐</router-link>
				</li>
				<li>
					<router-link to='/home/freeclass/allClass'>免费课程</router-link>
				</li>
				<li>
					<router-link to='/home/jobpath'>职业路径</router-link>
				</li>
				<li>
					<router-link to='/home/livebroadcastclass'>直播课程</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				status: true
			}
		},
		mounted(){
//			console.log(this.status);
			if(this.status){
				this.$router.push({
					path: '/home/recommended'
				})
			}else{
				this.$router.push({
					path: '/home/livebroadcastclass'
				})
				this.status==true;
			}
		}
	}
</script>

<style scoped lang="less">
	.homeHeader {
		height: 160/75rem;
		box-shadow: 4/75rem 4/75rem 10/75rem #f5f5f5;
	}

	.homgHeader-top {
		padding-top: 20/75rem;
		display: flex;
		justify-content: center;
		align-items: center;

		.img {
			width: 35/75rem;
			height: 35/75rem;
		}

		.search {
			border: none;
			background: #ededee;
			width: 550/75rem;
			height: 55/75rem;
			border-radius: 100/75rem;
			text-indent: 1em;
			padding-right: 10/75rem;

			&::-webkit-input-placeholder {
				text-align: center;
			}
		}

		.imgright {
			padding-left: 28/75rem;
		}

		.imgleft {
			padding-right: 28/75rem;
		}
	}

	.homgHeader-bottom {
		ul {
			display: flex;

			li {
				flex: auto;
				text-align: center;
				font-size: 28/75rem;
				font-weight: bold;
				line-height: 84/75rem;

				a {
					color: black;
				}
			}
		}
	}
</style>
