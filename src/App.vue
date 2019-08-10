<template>
  <div>

    <router-view />
   <tabbar v-if="this.$route.path!=='/login'&&this.$route.path!=='/register'&&this.$route.path!=='/system'
	 &&this.$route.path!=='/offline'&&this.$route.path!=='/finishcache'&&this.$route.path!=='/proceedcache'
	 &&this.$route.path!=='/news'&&this.$route.path!=='/official'&&this.$route.path!=='/account'
	 &&this.$route.path!=='/study'&&this.$route.path!=='/openclass'&&this.$route.path!=='/orderform'&&this.$route.path!=='/browse'
	&&this.$route.path!=='/feedback'&&this.$route.path!=='/regards'
	 "></tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar.vue'
  export default {
      components:{
        tabbar
      },
      mounted(){
        this.$router.push({path:"/home/recommended"})
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
