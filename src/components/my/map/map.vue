<template>
  <div>
    <div class="header">
    	<p><img class="imgleft" src="../../../../static/img/i_back.png" alt="" @click="back"></p>
    </div>
    <div class="map">
        <baidu-map class="map" center="南山TCL大厦" :zoom="zoom">
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
          <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <bm-panorama></bm-panorama>
        </baidu-map>
    </div>
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
	  },
    methods:{
      back(){
        this.$router.push({path:'/mine'})
      }
    }
	}
</script>

<style lang="less" scoped>
  .header {
  	z-index: 999;
  	width: 100%;
  	background: #fff;
  	height: 70/75rem;
  	// display: flex;
  	// align-items: center;
  	position: fixed;
  	top: 0;
  	background-color: #fff;

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
	.map{
		position: absolute;
    top:35/75rem;
		width: 100%;
		height: 96%;
	}
</style>
