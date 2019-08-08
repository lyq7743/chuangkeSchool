<template>
  <div>
    <div  v-for="(item,index) in shuju" :key = "index" :id="index">

       <other-class v-for="(citem,cindex) in item.list" :key = "cindex" :id="cindex"  :people='citem.people' :classprice="citem.price" :classSrc='citem.img_src'
        :className="citem.class_title" :classlevel='citem.class_level' @click.native = 'fn(index,cindex)'><!-- citem.cid -->
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
          // console.log(res.data.class_list);
          // console.log(res.data.class_list.length)
          this.shuju = res.data.class_list;
        })
    },
    methods:{
      fn(index,cindex){
        // console.log(index,cindex)//显示第几个模块的第几个子元素
        this.$router.push({path:'/detailsClass',query:{father:index,child:cindex}})
      }
    }
  }
</script>

<style scoped lang="less">

</style>
