<template>
  <div>
    <div  v-for="(item,index) in shuju" :key = "index" :id="index">
       <other-class v-for="(item,index) in item" :key = "item.list" :id="index"  :people='item.people' :classprice="item.price" :classSrc='item.img_src'
        :className="item.class_title" :classlevel='item.class_level' @click.native = 'fn(index)'>
      </other-class>

    </div>


   <!-- <other-class v-for="(item,index) in shu0" :key = "item.list" :id="index"  :people='item.people' :classprice="item.price" :classSrc='item.img_src'
      :className="item.class_title" :classlevel='item.class_level' @click.native = 'fn(index)'>
    </other-class>

   <other-class v-for="(item,index) in shu1" :key = "item.list"  :people='item.people' :classprice="item.price" :classSrc='item.img_src'
      :className="item.class_title" :classlevel='item.class_level' @click.native = 'fn(index)'>
    </other-class>
    <other-class v-for="(item,index) in shu2" :key = "item.list"   :people='item.people' :classprice="item.price" :classSrc='item.img_src'
      :className="item.class_title" :classlevel='item.class_level' @click.native = 'fn(index)'>
    </other-class>
   <other-class v-for="(item,index) in shu3" :key = "item.list"  :people='item.people' :classprice="item.price" :classSrc='item.img_src'
      :className="item.class_title" :classlevel='item.class_level' @click.native = 'fn(index)'>
    </other-class> -->

  </div>
</template>

<script>
  import otherClass from '../freeClassComponents.vue'
  export default {
    data() {
      return {
        shuju: [],
        // shu0: [],
        // shu1: [],
        // shu2: [],
        // shu3: [],
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


          this.shu0 = res.data.class_list[0].list;
          this.shu1 = res.data.class_list[1].list;
          this.shu2 = res.data.class_list[2].list;
          this.shu3 = res.data.class_list[3].list;
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
