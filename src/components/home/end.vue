<template>
  <div class="AllWarp">
    <div v-for="(item,index) in alldata" :key="index" v-if='index>3'>
      <div class="img">
        <img :src="item.img" alt="">
      </div>
      <div class="title">
        <h2>{{item.CareerTitle}}</h2>
        <p>{{item.time | formatDate}}<small>|</small><span>{{item.author}}</span></p>
      </div>
      <div class="state">
        <span>{{item.state}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        alldata: []
      }
    },
    mounted: function() {
      this.GetallData()
    },
    methods: {
      GetallData() {
        this.$axios.get("../../../static/data/livebroadcastClass/all.json")
          .then(res => {
//          console.log(res.data);
            this.alldata = res.data.data
          })
      }
    },
    filters: {
      formatDate(val) {
        let date = new Date(val);
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        return MM + '月' + d + '日' + ' ' + h + ':' + m;
      }
    }
  }
</script>

<style lang="less" scoped>
  .AllWarp {
    width: 85%;
    margin: 30/64rem auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    .title {
      width: 63%;
      margin: 0 0 0 20/64rem;

      h2 {
        font-size: 24/64rem;
      }

      small {
        margin: 0 10/64rem 0 10/64rem;
      }

    }

    .state {
      position: relative;
      width: 15%;
      margin-left: 15/64rem;

      span {
        display: block;
        position: absolute;
        top: 30/64rem;
      }
    }
  }

  .AllWarp>div {
    width: 100%;
    display: flex;
    border-bottom: 1px solid gainsboro;
    padding: 20/64rem 0 20/64rem 0;
  }

  .AllWarp .img {
    width: 100/64rem;
    height: 100/64rem;
  }

  .AllWarp img {
    width: 100%;
    border-radius: 50%;
  }
</style>
