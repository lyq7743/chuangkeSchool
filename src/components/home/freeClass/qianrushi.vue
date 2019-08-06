<template>
  <div >
    <other-class v-for="(item,index) in shuju" :key = 'index' :people='item.people' :classprice="item.price"
     :classSrc = 'item.img_src'  :className="item.class_title" :id="index" :classlevel='item.class_level' @click.native='fn(index)'>
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
      // this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/freeClass')
		this.$axios.get('../../../../static/data/freeClass/freeClass.json')
        .then(res => {
          console.log(res.data.class_list[0].list);
          this.shuju = res.data.class_list[0].list
        })
    },
    methods:{
      fn(index){
        console.log(index)
        this.$router.push({path:'/detailsClass',query:{clickIndex:index}})//利用路由将值进行传输过去
      }
    }
  }
</script>

<style scoped lang="less">

</style>
