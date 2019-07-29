<template>
  <div class="">
    <div class="nav">
      <span :class="{active:currIndex==0}" @click="currIndex=0">
        <router-link to='all'>全部</router-link>
      </span>
      <span :class="{active:currIndex==1}" @click="currIndex=1">
        <router-link to='not'>未开始</router-link>
      </span>
      <span :class="{active:currIndex==2}" @click="currIndex=2">
        <router-link to='end'>已结束</router-link>
      </span>
    </div>

    <div class="navshow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        currIndex: 0
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav {
    display: flex;
    width: 100%;
    height: 40/64rem;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
    margin-left: 25/64rem;
  }

  .nav span {
    display: block;
    width: 15%;
  }

  .nav a {
    display: block;
    text-decoration: none;
    color: #9c9ea8;
    line-height: 40/64rem;
    border-radius: 25/64rem;
  }

  .nav .active a {
    background-color: #9c9ea8;
    color: #fff;
  }
</style>
