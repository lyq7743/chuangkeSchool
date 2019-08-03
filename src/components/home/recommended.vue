<template>
  <div class="content">
    <div class="container">
      <mt-swipe :auto='2000'>
        <mt-swipe-item>
          <img class="autoImg" src="../../../static/img/banner.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="autoImg" src="../../../static/img/banner1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="autoImg" src="../../../static/img/banner2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="autoImg" src="../../../static/img/banner3.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="livebroadcastClass">
      <div class="livebroadcastClass-title">
        <h4>直播公开课</h4>
        <p>更多<img src="../../../static/img/image/rectangle.png" alt=""></p>
      </div>
      <div class="livebroadcastClass-content">
        <mt-swipe :auto="0" >
          <mt-swipe-item v-for="item in livebroadcastClassData" :key="item.id">
            <div class="livebroadcastClass-content-child">
              <p class="className">{{item.class_name}}</p>
              <p class="classTime">{{item.class_time}}</p>
              <img :src="item.class_img" />
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <recommended-class v-for="item in classData" :key='item.id' :className = "item.class_name" :list = "item.list" :newlist = "item.newlist" :olist = 'item.olist'>

    </recommended-class>


  </div>
</template>
<script>
  import recommendedClass from './recommendedClass.vue'
  // import 'mint-ui/lib/style.css'
  export default {


    data: function() {
      return {
        livebroadcastClassData: [],
        classData:[],
      }
    },
    mounted() {
      // this.$axios.get(" https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/recommededData")
      this.$axios.get("../../../static/data/recommededData/recommededData.json")
        .then((shuju) => {
          // console.log(shuju);
          this.livebroadcastClassData = shuju.data.class;
        }),
        // this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/recommededData1')
        this.$axios.get("../../../static/data/recommededData/recommededData1.json")
        .then((shuju)=>{
          // console.log(shuju.data.class_list);


           this.classData = shuju.data.class_list;
        })
    },
    components: {
      recommendedClass
    }
  }
</script>
<style lang="less" scoped>
  .content {
    margin: 0 30/75rem;
  }

  .container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15/75rem;
    width: 696/75rem;
    height: 194/75rem;

    .autoImg {
      border-radius: 15/75rem;
      width: 100%;
      height: 100%;
    }
  }

  .livebroadcastClass {
    .livebroadcastClass-title {
      padding: 50/75rem 0 28/75rem 0;
      display: flex;
      line-height: 30/75rem;
      align-items: center;
      position: relative;

      h4 {
        font-size: 28/75rem;
      }

      p {
        display: flex;
        align-items: center;
        position: absolute;

        right: -10/75rem;

        img {
          width: 30/75rem;
        }
      }
    }

    .livebroadcastClass-content {
      width: 696/75rem;
      height: 300/75rem;

      .livebroadcastClass-content-child {
        width: 95%;
        height: 230/75rem;
        // text-align: center;
        border-radius: 15/75rem;
        box-shadow: 0px 2px 5px 5px #f2f2f2;
        position: relative;
        left: 50%;
        top: 10/75rem;
        transform: translateX(-50%);

        // top: 50%;
        // transform: translate(-50%,-50%);
        img {
          position: absolute;
          top: 44/75rem;
          right: 56/75rem;
          width: 140/75rem;
          height: 140/75rem;
          border-radius: 50%;
        }

        .className {
          font-size: 22/75rem;
          font-weight: bold;
          position: absolute;
          top: 75/75rem;
          left: 28/75rem;
          width: 20em;
        }

        .classTime {
          position: absolute;
          bottom: 50/75rem;
          left: 28/75rem;
          font-size: 16/75rem;
          font-weight: bold;
        }
      }
    }
  }
</style>
