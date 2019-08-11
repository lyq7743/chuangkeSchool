<template>
	<div class="Learning">

		<div class="video-wrap">
			<iframe :src="this.activeVideo.youtobeURL" frameborder='0' allow='autoplay;encrypted-media' allowfullscreen style='width:100%;height:300px'>
			</iframe>
			<!-- <div style="height:50%;width:100%;position:absolute;z-index:999" @click="activeVideoShow(video.id)"></div> -->
		</div>


		<div class="learining-bottom">
			<ul>
				<li>
					<router-link to='/learning/details'>详情</router-link>
				</li>
				<li>
					<router-link to='/learning/directory'>目录</router-link>
				</li>
				<li>
					<router-link to='/learning/ask'>提问</router-link>
				</li>
			</ul>

		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeVideo: {
					id: 3,
					title: 'test1',
					speaker: 'harry',
					likes: 0,
					views: 0,
					describe: 'good',
					youtobeURL: 'http://player.youku.com/embed/XMzcwNTY3NTM2MA'
				}
			}
		},
		methods: {
			// activeVideoShow(id) {
			//   this.videos.filter(item => {
			//     if (id == item.id) {
			//       this.activeVideo = item
			//     }
			//   })
			// }

		},
		mounted() {
			this.$router.push({
				path: "/learning/details"
			});
		}
	}
</script>


<style lang="less" scoped>
	#youku-playerBox{
		height: 300px;
	}
	
	.video-wrap {
		width: 100%;
		height: 300/75rem;
	}

	.learining-bottom {
		position: relative;
		//top: 15/75rem;
		z-index: 999;

		ul {
			display: flex;

			li {
				flex: auto;
				text-align: center;
				font-size: 28/75rem;
				font-weight: bold;
				line-height: 84/75rem;
				color: shybule;

				a {
					color: black;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
