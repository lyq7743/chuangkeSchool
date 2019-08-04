<template>
  <div>
    <div class="class-title">
      <h4>{{className}}</h4>
      <p>更多<img src="../../../static/img/image/rectangle.png" alt=""></p>
    </div>
    <div class="class-content">
      <div class="class-content-top">
        <div v-for="item in newClassData" :key="item.id" class="class-content-top-header">
          <!-- 放置槽口的url -->
          <img v-lazy="item.img_src" alt="">
          <div class="class-Introduction">
            <p class="class-name">
              {{item.class_title}}
              <!-- {{classData}} -->
            </p>
            <p class="class-level">{{item.class_level}}&nbsp;&nbsp;{{item.people|setPeople}}</p>
            <p class="class-price">{{item.price |setPrice}}</p>
          </div>
        </div>
      </div>
      <div class="class-content-body">
        <mt-swipe  :auto="0" :continuous=false :showIndicators=true>
          <mt-swipe-item>
            <div v-for="item in classData" :key='item.id' class="class-content-body-centent">
              <img v-lazy="item.img_src" alt="">
              <div>
                <p class="class-content-body-name">{{item.class_title}}</p>
                <p class="class-content-body-level">{{item.class_level}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.people|setPeople}}</p>
                <p class="class-content-body-price">{{item.price|setPrice}}</p>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div v-for="item in oclassData" :key='item.id' class="class-content-body-centent">
              <img v-lazy="item.img_src" alt="">
              <div>
                <p class="class-content-body-name">{{item.class_title}}</p>
                <p class="class-content-body-level">{{item.class_level}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.people|setPeople}}</p>
                <p class="class-content-body-price">{{item.price|setPrice}}</p>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classData: [],
        newClassData: [],
        oclassData: []
      }
    },
    props: ['className', 'classUrl', 'newlist', 'list', "olist"],
    mounted() {
      this.classData = this.list,
        // console.log(1, this.classData);
      this.newClassData = this.newlist;
      // console.log(1, this.newClassData);
      this.oclassData = this.olistl;
    },
    filters:{
        setPrice(val){
          if(val == "免费"){
            return val;
          }
            return "￥"+val;
        },
        setPeople(val){
            return val+"人正在学习"
        }
    }
  }
</script>

<style lang="less" scoped>
  .class-content-top {

    display: flex;

    .class-content-top-header {
      width: 100%;
      position: relative;

      box-sizing: border-box;

      &:last-child {
        padding-left: 10px;
      }

      img {
        border-radius: 10/75rem;
      }

      .class-Introduction {
        position: absolute;
        top: 60/75rem;
        left: 20/75rem;
        line-height: 40/75rem;
        color: white;

        .class-name {
          font-weight: bold;
        }
         &:last-child{
          left: 30/75rem;
         }
      }
    }

    img {
      width: 340/75rem;
      height: 214/75rem;
    }

  }

  .class-content-body {
    height: 520/75rem;
    width: 100%;

    img {
      width: 218/75rem;
      height: 130/75rem;
    }

    .class-content-body-centent {
      align-items: center;
      display: flex;
      height: 170/75rem;
      img{
        border-radius: 10/75rem;
      }
      div{
          padding-left: 15/75rem;
      }
      p{
        line-height: 40/75rem;
      }
      .class-content-body-name{
        font-size: 26/75rem;
      }
      .class-content-body-level{
        color: #ccc;
      }
    }
  }

  .class-title {
    padding: 40/75rem 0 28/75rem 0;
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
</style>
