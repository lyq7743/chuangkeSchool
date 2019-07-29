<template>
	<div class="HeaderWarp">
		<h2>技术问答</h2>
		<div>
			{{date | dCreateTime}}
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				date: new Date()
			}
		},
		mounted() {
			let _this = this;
			this.timer = setInterval(() => {
				_this.date = new Date();
			}, 1000)
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer);
			}
		},
		filters: {
			dCreateTime(value) {
				var date = new Date();
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1)
				var df = M + D;
				return df;
			}
		}
	}
</script>

<style lang="less" scoped>

</style>
