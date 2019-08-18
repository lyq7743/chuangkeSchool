<template>
  <div>

    <!-- 账户 -->
    <div class="header">
      <div class="top">
        <img src="../../../static/img/i_back.png" alt="" @click="back">
        <span>我的金币</span>
      </div>
    </div>
    <div class="touxiang">
      <img src="../../../static/img/avatar_default.png" alt="">
      <p>{{this.$store.state.user}}</p>
      <p>余额：{{this.$store.state.money}}金币</p>
    </div>
    <div class="section">
      <p class="p">选择充值金币</p>
      <ul>
        <li v-for="(item,index) in all" :key='index' @click="curr(index)" :id='index' :class="{bgcolor:index==num}">
          <p>
            <div class="chongzhi">
              <img src="../../../static/img/mipmap/icon_gold.png" alt="">&nbsp; {{item}}
            </div>


            <p>售价{{item}}元
            </p>
          </p>
        </li>
      </ul>
    </div>
    <input type="button" value="为知识缴费" class="chongqian" @click="money">
    <div class="foot-text">
      <h3>温馨提示：</h3>
      <span>1、充值金额只能在创客学院IOS APP内使用，不能用于安卓、网站等其他平台。<br />
        2、充值金额后没有使用期限，充值的金额无法退回。<br />
        3、如遇到无法充值、充值失败等问题，可关注创客学院公会服务号，会有老师帮你解决问题。
      </span>
    </div>

  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui';
  export default {
    data: function() {
      return {
        num: 0,
        all: [6, 18, 50, 118, 218, 518, 1298, 2298, 6498],
        backPath: null
      }
    },
    methods: {
      curr(index) {
        // console.log(index);
        this.num = index
      },
      money() {
        Toast({
          message: '充值成功',
          duration: 1500
        });
        // console.log(this.all[this.num])
        this.$store.commit('setMoney', this.all[this.num])
        // console.log(this.$store.state.money)
        // setTimeout(res=> {
        //   this.$router.push({
        //     path: this.backPath
        //   })
        // }, 2000);

      },
      back() {
        this.$router.push({
          path: this.backPath
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        console.log(from.fullPath)
        vm.backPath = from.fullPath
      })
    }


  }
</script>

<style lang="less" scoped>

  .chongqian {
    margin-top: 50/75rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 60%;
    height: 75/75rem;
    font-size: 35/75rem;
    background: #5a99f8;
    color: white;
    border: none;
  }

  .bgcolor {
    color: #fff !important;
    background: #5a99f8;
  }

  .header {
    width: 100%;
    height: 130/64rem;
    border-bottom: 1px solid #999;
  }

  .top {
    font-size: 32/64rem;
    display: flex;
    width: 580/64rem;
    height: 130/64rem;
    margin: 0 auto;
    line-height: 160/64rem;
    font-weight: 600;
    position: relative;

    img {
      position: absolute;
      top: 75/75rem;
      left: 20/75rem;
      width: 20/64rem;
      height: 30/64rem;
    }

    span {
      flex: 1;
      text-align: center;
      font-size: 34/64rem;
    }

    a {
      color: #6392ef;
    }
  }

  .touxiang {
    position: relative;
    height: 170/64rem;
    background: #5a99f8;

    img {
      position: absolute;
      top: 42/64rem;
      left: 35/64rem;
      width: 95/64rem;
      height: 95/64rem;
    }

    p {
      position: relative;
      width: 300/75rem;
      top: 50/64rem;
      left: 160/64rem;
      font-size: 25/64rem;
      color: #fff;
      padding-top: 5/64rem;
      box-sizing: border-box;
    }
  }

  .section {
    .chongzhi {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .p {
      margin: 10/64rem 15/64rem;
      font-size: 25/64rem;
      font-weight: 600;
      color: #666;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 175/64rem;
        height: 140/64rem;
        border: 1px solid #5a99f8;
        font-size: 25/64rem;
        text-align: center;
        margin: 15/64rem 15/64rem;
        color: #666;
        line-height: 28/64rem;

        p {
          margin-top: 20/64rem;
        }
      }
    }
  }

  .foot-text {
    h3 {
      margin: 20/64rem 20/64rem;
    }

    span {
      display: inline-block;
      margin: 0 18/64rem;
      font-size: 23/64rem;
      color: #666;
      line-height: 33/64rem;
    }
  }
</style>
