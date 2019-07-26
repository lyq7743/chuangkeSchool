<template>
  <div @click="fn">
    <slot class='imgTop' name="imgTop"></slot>
    <span v-show='showImg'>
      <slot class='imgbottom' name="imgbottom"></slot>
    </span>
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        showImg:false,
      }
    },
    props: ['title'],
    methods: {
      fn() {

      }
    }
  }
</script>

<style scoped lang="less">

</style>
