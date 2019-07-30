<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <router-link :class="{click:check}" to='/home/freeclass/allClass' @click='fn'>全部</router-link>
        </li>
        <li>
          <router-link to='/home/freeclass/qianrushi' @click='fn'>嵌入式</router-link>
        </li>
        <li>
          <router-link to='/home/freeclass/wulianwang' @click='fn'>物联网</router-link>
        </li>
        <li>
          <router-link to='/home/freeclass/javaEE' @click='fn'>JavaEE</router-link>
        </li>
        <li>
          <router-link to='/home/freeclass/web' @click='fn'>WEB全栈</router-link>
        </li>
        <li><img src="../../../static/img/ic_fillter.png" alt=""></li>
      </ul>
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
        check: null,
      }
    },
    methods: {
      fn() {
        if(this.$router.path != '/home/freeclass/allClas') {
          this.check =false;
        }else{
          this.check =true;
        }
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
