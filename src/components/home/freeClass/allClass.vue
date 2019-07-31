<template>
  <div>
    <other-class v-for="(item,index) in shu0" :key = 'index' :people='item.people' :classprice="item.price"
     :classSrc = 'item.img_src'  :className="item.class_title" :classlevel='item.class_level'>
    </other-class>

  <other-class v-for="(item,index) in shu1" :key = 'index' :people='item.people' :classprice="item.price"
     :classSrc = 'item.img_src'  :className="item.class_title" :classlevel='item.class_level'>
    </other-class>
    <other-class v-for="(item,index) in shu2" :key = 'index'  :people='item.people' :classprice="item.price"
     :classSrc = 'item.img_src'  :className="item.class_title" :classlevel='item.class_level'>
    </other-class>
    <other-class v-for="(item,index) in shu3" :key = 'index'  :people='item.people' :classprice="item.price"
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
					shu0:[],
					shu1:[],
					shu2:[],
					shu3:[],
      }
    },
    components: {
      otherClass
    },
    mounted(){
      this.$axios.get('../../../../static/data/freeClass/freeClass.json')
        .then(res => {
          console.log(res.data.class_list);
					
          this.shuju = res.data.class_list;
					this.shu0=res.data.class_list[0].list;
					this.shu1=res.data.class_list[1].list;
					this.shu2=res.data.class_list[2].list;
					this.shu3=res.data.class_list[3].list;
        })
    }
  }
</script>

<style scoped lang="less">

</style>
