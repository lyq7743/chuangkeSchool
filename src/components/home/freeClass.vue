<template>
  <div>
    <div class="header">
      <ul>
        <li @click='fn'>
          <router-link :class="{click:check}" to='/home/freeclass/allClass'>全部</router-link>
        </li>
        <li @click='fn'>
          <router-link to='/home/freeclass/qianrushi' >嵌入式</router-link>
        </li>
        <li @click='fn'>
          <router-link to='/home/freeclass/wulianwang'>物联网</router-link>
        </li>
        <li @click='fn'>
          <router-link to='/home/freeclass/javaEE'>JavaEE</router-link>
        </li>
        <li @click='fn'>
          <router-link to='/home/freeclass/web'>WEB全栈</router-link>
        </li>
        <li @click='show'>
        	<img src="../../../static/img/ic_fillter.png" alt="">
        </li>
      </ul>
    </div>
	<div class="sshow" v-if="isShow">
		<div class="leftshow" @click="yc">

		</div>
		<div class="cblshow" >
			<!-- 方向 -->
			<div class="fx">
				<p>方向</p>
				<ul>
					<li v-for="(item,index) in fxarr" @click="qh(index)">{{item.title}}</li>
				</ul>
			</div>
			<!-- 分类 -->
			<div class="fx" >
				<p>分类</p>
				<ul>
					<li v-for="(item,index) in flarr">{{item.title}}</li>
				</ul>
			</div>
			<!-- 难度 -->
			<div class="fx">
				<p>难度</p>
				<ul>
					<li v-for="(item,index) in ndarr">{{item.title}}</li>
				</ul>
			</div>
			<!-- 排序 -->
			<div class="fx">
				<p>排序</p>
				<ul>
					<li v-for="(item,index) in pxarr">{{item.title}}</li>
				</ul>
			</div>

			<div class="cblfooter">
				<button class="cz">重置</button>
				<button class="wc">完成</button>
			</div>
		</div>
	</div>

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        check: true,
        popupVisible:"abc",
        isShow:false,
		fxarr:[],
		flarr:[],
		ndarr:[],
		pxarr:[]
      }
    },
    methods: {
      fn() {
        if(this.$router.path != '/home/freeclass/allClas') {
          this.check =false;
        }else{
          this.check =true;
        }
      },
      show(){
		this.isShow = !this.isShow
      },
	  yc(){
			this.isShow = !this.isShow
		},
	  qh(index){
//		  console.log(index);
		  this.$axios.get('../../../../static/data/freeClass/classify.json')
		  .then(res => {
			this.flarr = res.data.group[index].group_list;
		  })
	  }
    },
    mounted() {
      this.$router.push({
        path: '/home/freeclass/allClass'
      })
	  //方向
	  this.$axios.get('../../../../static/data/freeClass/freeClassdirection.json')
	  .then(res => {
	  	this.fxarr = res.data.group;
	  })
	  //分类
	  this.$axios.get('../../../../static/data/freeClass/classify.json')
	  .then(res => {
	  	this.flarr = res.data.group[0].group_list;
	  })
	   //难度
	  this.$axios.get('../../../../static/data/freeClass/diffculty.json')
	  .then(res => {
	  	this.ndarr = res.data.group;
	  })
	   //排序
	  this.$axios.get('../../../../static/data/freeClass/sort.json')
	  .then(res => {
	  	this.pxarr = res.data.group;
	  })
    }
  }
</script>

<style lang="less" scoped>
	.leftshow{
		position: absolute;
		width: 3.5rem;
		top: 0;
		left: 0rem;
		height: 100%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.2);
	}
	.cblshow{
		position: absolute;
		top: 0;
		left: 3.5rem;
		width:6.5rem;
		height: 100%;
		background-color: white;
		z-index: 1;
		>div{
			margin-top: 0.3rem;
			margin-left: 0.2rem;
			p{
				font-size: 0.4rem;
			}
			ul{
				display: flex;
				flex-wrap: wrap;
				li{
					margin-top: 0.3rem;
					text-align: center;
					padding: 5/75rem;
					width: 25%;
					margin-left: 0.2rem;
					border: 1px solid gray;
					border-radius: 3px;
				}
			}
		}
		.cblfooter{
			position: absolute;
			bottom: 0;
			width: 100%;
			button{
				font-size: 0.5rem;
				width: 45%;
				height: 1rem;
				border: none;
				background-color: white;
			}
			.wc{
				color: white;
				background-color: red;
			}
		}

	}
	.cblyc{
		position: absolute;
		top: 0;
		left: 10rem;
		width:8rem;
		height: 12rem;
		border: 1px solid red;
	}
  .header {
    .click {
      background: #ccc;
      border-radius: 50/75rem;
      color: white;
    }

    ul {
      display: flex;

      li {

        height: 84/75rem;
        line-height: 84/75rem;
        flex: auto;
        color: #ccc;
        text-align: center;
        a:hover {
          background: #ccc;
          border-radius: 50/75rem;
          color: white;
        }
        a {
          padding: 10/75rem 10/75rem;
          color: gray;
        }

        img {
          margin-top: 25/75rem;
          height: 36/75rem;
        }
      }
    }


  }
</style>
