<template>
  <div>
    <div  v-for="(item,index) in shuju" :key = "index" :id="index">
		
       <other-class v-for="(citem,cindex) in item.list" :key = "cindex" :id="cindex"  :people='citem.people' :classprice="citem.price" :classSrc='citem.img_src'
        :className="citem.class_title" :classlevel='citem.class_level' @click.native = 'fn(cindex)'>
      </other-class>

    </div>

  </div>
</template>

<script>
  import otherClass from '../freeClassComponents.vue'
  export default {
    data() {
      return {
        shuju: [],

      }
    },
    components: {
      otherClass
    },
    mounted() {
      // this.$axios.get('https://www.easy-mock.com/mock/5d40e999e63c672d5de1a35a/json/freeClass')
        this.$axios.get('../../../../static/data/freeClass/freeClass.json')
        .then(res => {
          console.log(res.data.class_list);
          console.log(res.data.class_list.length)
          this.shuju = res.data.class_list;
        })
    },
    methods:{
      fn(e){
        console.log(e)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
