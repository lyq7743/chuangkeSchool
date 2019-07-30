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

import all from '../components/home/all.vue'
import not from '../components/home/not.vue'
import end from '../components/home/end.vue'

import allClass from '../components/home/freeClass/allClass.vue'
import javaEE from '../components/home/freeClass/javaEE.vue'
import qianrushi from '../components/home/freeClass/qianrushi.vue'
import web from '../components/home/freeClass/web.vue'
import wulianwang from '../components/home/freeClass/wulianwang.vue'

import login from '../components/my/login.vue'

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
          children:[
            {
              path:'allClass',
              name:'allClass',
              component:allClass
            },
            {
              path:'javaEE',
              name:'javaEE',
              component:javaEE
            },
            {
              path:'qianrushi',
              name:'qianrushi',
              component:qianrushi
            },
             {
              path:'web',
              name:'web',
              component:web
            },
             {
              path:'wulianwang',
              name:'wulianwang',
              component:wulianwang
            }
          ]
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
          children:[
            {
              path: 'all',
              name: 'all',
              component: all,
            },
            {
              path: 'not',
              name: 'not',
              component: not,
            },
            {
              path: 'end',
              name: 'end',
              component: end,
            }],redirect:'/home/livebroadcastclass/all'
        },
        {
          path: 'jobpath',
          name: 'jobPath',
          component: jobPath,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
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
