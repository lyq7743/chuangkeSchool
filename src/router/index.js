import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '../components/tabbar.vue'

import home from '../page/home.vue'
import question from '../page/question.vue'
import class1 from '../page/class.vue'
import mine from '../page/mine.vue'

import freeClass from '../components/home/freeClass.vue'
import recommended from '../components/home/recommended.vue'
import livebroadcastClass from '../components/home/livebroadcastClass.vue'
import jobPath from '../components/home/jobPath.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'tabbar',
      component: tabbar
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: 'freeclass',
          name: 'freeClass',
          component: freeClass,
        },
        {
          path: 'recommended',
          name: 'recommended',
          component: recommended,
        },
        {
          path: 'livebroadcastclass',
          name: 'livebroadcastClass',
          component: livebroadcastClass,
        },
        {
          path: 'jobpath',
          name: 'jobPath',
          component: jobPath,
        },
      ]
    },
    {
      path: '/className',
      name: 'class1',
      component: class1
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/question',
      name: 'question',
      component: question
    },
  ]
})
