<template>
  <div class="tabbar">
    <item-wrap title='首页'>
      <img src="../../static/img/i_main_home.png" alt="" slot='imgTop'>
      <img src="../../static/img/i_main_home_activity.png" alt="" slot='imgTop'>
    </item-wrap>
    <item-wrap title='问答'>
      <img src="../../static/img/i_main_qa.png" alt="" slot='imgTop'>
      <img src="../../static/img/i_main_qa_activity.png" alt="" slot='imgTop'>
    </item-wrap>
    <item-wrap title='班级'>
      <img src="../../static/img/i_main_study.png" alt="" slot='imgTop'>
      <img src="../../static/img/i_main_class_activity.png" alt="" slot='imgTop'>
    </item-wrap>
    <item-wrap title='我的'>
      <img src="../../static/img/i_main_mine.png" alt="" slot='imgTop'>
      <img src="../../static/img/i_main_mine_activity.png" alt="" slot='imgTop'>
    </item-wrap>
  </div>
</template>

<script>
  import itemWrap from './itemWrap.vue'
  export default {
    data: function() {
      return {

      }
    },
    components: {
      itemWrap,
    }

  }
</script>

<style scoped lang="less">
  .tabbar{
    display: flex;
    text-align: center;
  }
</style>
