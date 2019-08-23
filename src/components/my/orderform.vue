<template>
  <div class="box">
    <!-- 我的订单 -->
    <div class="header">
      <div class="top">
        <router-link to='/mine'><img src="../../../static/img/i_back.png" alt=""></router-link>
        <span>我的订单</span>
        <router-link to='#'>咨询</router-link>
      </div>
    </div>
    <!-- <div class="text">
		 		<p>暂无数据</p>
		 </div>-->
    <ul class="record">
      <li v-for="(item,index) in chongqian" >
        <p>{{index+1}}、您于<span>{{chongqianDate[index]}}</span>充值了<span>{{item}}</span>元金币</p><input type="button" value="查看详情">
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chongqian:this.$store.state.chongqian,
        chongqianDate:this.$store.state.chongqianDate,
      }
    }
  }
</script>

<style lang="less" scoped>
  .record {
    li {
      position: relative;
      display: flex;
      padding: 40/75rem;
      padding-left: 20/75rem;
      background-color: blanchedalmond;
      border-bottom: 1px solid palevioletred;
      border-radius: 10/75rem;
      margin-top: 10/75rem;

      p {
        font-size: 25/75rem;
        height: 25/75rem;
        line-height: 25/75rem;
      }

      input {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5%;
        border: 1px #ccc solid;
        background-color: skyblue;
        color: white;
        padding: 10/75rem 20/75rem;
        border-radius: 15/75rem;
        box-shadow: 2px 2px 3px cadetblue // height: 25/75rem;
      }
    }
  }

  .header {
    width: 100%;
    height: 130/64rem;
    border-bottom: 1px solid #999;
    background: #fff;
  }

  .top {
    font-size: 32/64rem;
    display: flex;
    width: 580/64rem;
    height: 130/64rem;
    margin: 0 auto;
    line-height: 160/64rem;


    img {
      width: 20/64rem;
      height: 30/64rem;
    }

    span {
      flex: 1;
      text-align: center;
      font-size: 34/64rem;
      font-weight: 600;
    }

    a {
      margin-top: 5/64rem;
      font-size: 28/64rem;
      color: #000;
    }
  }

  .text {
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 50%;

    p {
      font-size: 30/64rem;
    }
  }

  .box {
    height: 100%;
    background: #fafafa;
  }
</style>
