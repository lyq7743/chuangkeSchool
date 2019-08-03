<template>
  <div class="content">
    <div class="img-content">
      <img :src="classSrc" alt="">
    </div>

    <div class="font-content">
      <p class="className">{{className}}</p>
      <p class="classlevel">{{classlevel}}&nbsp;&nbsp;&nbsp;&nbsp;{{people |setPeople}}</p>
      <p class="classprice">{{classprice}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: ['classSrc', 'className', 'classlevel', 'people', 'classprice'],
    filters:{
      setPeople(val){
          return val + '人正在学习'
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    display: flex;
    padding: 20/75rem 0;
    align-items: center;

    .img-content {
      position: relative;
      img {
        width: 240/75rem;
        height: 144/75rem;
        border-radius: 10/75rem;
        margin-left: 30/75rem;
      }

    }
    .font-content {
      padding-left: 20/75rem;
      line-height: 40/75rem;

      .className {
        font-size: 26/75rem;
      }
      .classlevel{
        color: gray;
        font-size: 24/75rem;
      }
      .classprice{
        font-weight: bold;
      }
    }
  }
</style>
