<template>
  <div>

    <router-view />
   <tabbar v-if="this.$route.path!=='/login'&&this.$route.path!=='/register'&&this.$route.path!=='/system'"></tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar.vue'
  export default {
      components:{
        tabbar
      }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }
</style>
