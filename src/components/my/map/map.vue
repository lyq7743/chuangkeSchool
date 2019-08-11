<template>
	<div class="map">
 		  <baidu-map class="map" center="南山TCL大厦" :zoom="zoom">
 		  	<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
 		  	<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
 		  	<bm-panorama></bm-panorama>
 		  </baidu-map>
	</div>
</template>
<script src="https://unpkg.com/vue-baidu-map"></script>
<script>
	import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
	export default {
	  data () {
	    return {
	      center: {lng: 0, lat: 0},
	      zoom: 18
	    }
	  }
	}
</script>

<style lang="less" scoped>
	.map{
		position: absolute;
		width: 100%;
		height: 98%;
	}
</style>
