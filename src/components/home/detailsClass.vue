<template>
	<div class="content">
		<div class="header">
			<p><img class="imgleft" src="../../../static/img/i_back.png" alt=""></p>
			<p><img class="imgright" src="../../../static/img/is_bshare.png" alt=""></p>
		</div>
		<div class="classService">
			<p class="classLabel">精品课程</p>
			<p class="classtitle">Linux课程</p>
			<p class='classIntroduce'>撒娇佛is回房间哈斯福建海事局快递费释放时间阿道夫很快就收到回复卡收到货</p>
			<div class="classOverview">
				<ul>
					<li>
						<p>26</p>
						<p>课程小结</p>
					</li>
					<li>
						<p>26</p>
						<p>课程小结</p>
					</li>
					<li>
						<p>26</p>
						<p>课程小结</p>
					</li>
				</ul>
			</div>
			<div></div>
		</div>
		<div class="classTalk">

		</div>



	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.content {
		margin: 0 36/75rem; 
		background-color: #ccc;
		.header {
			height: 70/75rem;
			// display: flex;
			// align-items: center;
			position: relative;
			background-color: #fff;
			img {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}

			.imgleft {
				left: 0;
				width: 15/75rem;
				height: 25/75rem;
			}

			.imgright {
				right: 0;
				width: 36/75rem;
				height: 32/75rem;
			}
		}

		.classService {
			padding-top: 30/75rem;
			background-color: #fff;
			height: 553/75rem;
			.classLabel {
				
				width: 118/75rem;
				height: 46/75rem;
				line-height: 46/75rem;
				text-align: center;
				color: white;
				border-radius: 50/75rem;
				background: #5494ff;

			}
			.classtitle{
				padding-top: 36/75rem;
				font-size: 38/75rem;
				font-weight: bold;
			}
			.classIntroduce{
				margin-top: 36/75rem;
				font-size: 21/75rem;
				color: #666666;
			}
			.classOverview{
				margin-top: 40/75rem;
				// background: #f9fcfe;
				ul{
					display: flex;
					li{
						text-align: center;
						flex: 1;
						p:first-child{
							font-weight: bold;
							font-size: 22/75rem;
						}
						p:last-child{
							color: #797c7e;
							font-size: 20/75rem;
						}
					}
				}
			}


		}
	}
</style>
