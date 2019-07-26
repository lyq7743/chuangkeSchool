import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '../components/tabbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: tabbar
    }
  ]
})
