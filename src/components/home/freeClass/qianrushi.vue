<template>
  <div>
    <other-class v-for="(item,index) in shuju[0].list" :key = 'index' :people='item.people' :classprice="item.price"
     :classSrc = 'item.img_src'  :className="item.class_title" :classlevel='item.class_level'>
    </other-class>



  </div>
</template>

<script>
  import otherClass from '../freeClassComponents.vue'
  export default {
    data() {
      return {
          shuju:[],
      }
    },
    components: {
      otherClass
    },
    mounted() {
      this.$axios.get('../../../../static/data/freeClass/freeClass.json')
        .then(res => {
          console.log(res.data.class_list);
          this.shuju = res.data.class_list
        })
    }
  }
</script>

<style scoped lang="less">

</style>
