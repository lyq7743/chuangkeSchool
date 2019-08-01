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
        <li @click='cbl'>
        	<img src="../../../static/img/ic_fillter.png" alt="">
        </li>
      </ul>
    </div>
    <!--<div class="cbl">
    	侧边栏
    </div>-->
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
        popupVisible:"abc"
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
      cbl(){
      	console.log(123);
      }
    },
    mounted() {
      this.$router.push({
        path: '/home/freeclass/allClass'
      })
    }
  }
</script>

<style lang="less" scoped>
	.cbl{
		width:8rem;
		height: 20rem;
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
