<template>
  <div>
    <other-class v-for="(item,index) in shuju" :key = 'index' :people='item.people' :classprice="item.price"
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
    created() {
      this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/freeClass')
        .then(res => {
          // console.log(res.data.class_list);
          this.shuju = res.data.class_list[1].list
        })
    }
  }
</script>

<style scoped lang="less">

</style>
