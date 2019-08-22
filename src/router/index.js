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

import learning from '../components/home/learning.vue'

import all from '../components/home/all.vue'
import not from '../components/home/not.vue'
import end from '../components/home/end.vue'

import details from '../components/home/details.vue'
import directory from '../components/home/directory.vue'
import ask from '../components/home/ask.vue'

import search from '../page/search.vue'

import allClass from '../components/home/freeClass/allClass.vue'
import javaEE from '../components/home/freeClass/javaEE.vue'
import qianrushi from '../components/home/freeClass/qianrushi.vue'
import web from '../components/home/freeClass/web.vue'
import wulianwang from '../components/home/freeClass/wulianwang.vue'

import recommend from '../components/question/recommend.vue'
import cream from '../components/question/cream.vue'
import wait from '../components/question/wait.vue'
import questionchilden from '../components/question/classify/child.vue'
import crecommend from '../components/question/classify/crecommend.vue'
import ccream from '../components/question/classify/ccream.vue'
import cwait from '../components/question/classify/cwait.vue'
import calendar from '../components/question/calendar/calendar.vue'


import login from '../components/my/login.vue'
import register from '../components/my/register.vue'
import system from '../components/my/system.vue'
import study from '../components/my/study.vue'
import openclass from '../components/my/openclass.vue'
import orderform from '../components/my/orderform.vue'
import browse from '../components/my/browse.vue'
import news from '../components/my/news.vue'
import account from '../components/my/account.vue'
import offline from '../components/my/offline.vue'
import us from '../components/my/map/map.vue'
import headerportrait from '../components/my/portrait/headerportrait.vue'
import name from '../components/my/portrait/name.vue'
import signature from '../components/my/portrait/signature.vue'
import occupation from '../components/my/portrait/occupation.vue'
import pass from '../components/my/portrait/pass.vue'

import proceedcache from '../components/my/offline/proceedcache.vue'
import finishcache from '../components/my/offline/finishcache.vue'

import official from '../components/my/news/official.vue'

import feedback from '../components/my/system/feedback.vue'
import regards from '../components/my/system/regards.vue'

import buyClass from '../components/home/buyClass.vue'


import detailsClass from '../components/home/detailsClass.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'tabbar',
      component: tabbar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
          path: 'freeclass',
          name: 'freeClass',
          component: freeClass,
          children: [{
              path: 'allClass',
              name: 'allClass',
              component: allClass
            },
            {
              path: 'javaEE',
              name: 'javaEE',
              component: javaEE
            },
            {
              path: 'qianrushi',
              name: 'qianrushi',
              component: qianrushi
            },
            {
              path: 'web',
              name: 'web',
              component: web
            },
            {
              path: 'wulianwang',
              name: 'wulianwang',
              component: wulianwang
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
          children: [{
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
            }
          ],
          redirect: '/home/livebroadcastclass/all'
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
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/system',
      name: 'system',
      component: system,
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/openclass',
      name: 'openclass',
      component: openclass
    },
    {
      path: '/orderform',
      name: 'orderform',
      component: orderform
    },
    {
      path: '/browse',
      name: 'browse',
      component: browse
    },
		{
		  path: '/offline',
		  name: 'offline',
		  component: offline
		},
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
		{
		path: '/proceedcache',
		name: 'proceedcache',
		component: proceedcache
		},
		{
		path: '/finishcache',
		name: 'finishcache',
		component: finishcache
		},
		{
		path: '/official',
		name: 'official',
		component: official
		},
		{
		path: '/feedback',
		name: 'feedback',
		component: feedback
		},
		{
		path: '/regards',
		name: 'regards',
		component: regards
		},
		{
		path: '/headerportrait',
		name: 'headerportrait',
		component: headerportrait
		},
		{
		path: '/name',
		name: 'name',
		component: name
		},
		{
		path: '/signature',
		name: 'signature',
		component: signature
		},
		{
		path: '/occupation',
		name: 'occupation',
		component: occupation
		},
			{
		path: '/pass',
		name: 'pass',
		component: pass
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
      component: question,
      children: [{
          path: 'recommend',
          component: recommend
        },
        {
          path: 'cream',
          component: cream
        },
        {
          path: 'wait',
          component: wait
        }
      ]
    },
    {
      path: '/questionchilden',
      name: 'questionchilden',
      component: questionchilden,
      children: [{
          path: 'crecommend',
          component: crecommend
        },
        {
          path: 'ccream',
          component: ccream
        },
        {
          path: 'cwait',
          component: cwait
        }
      ]
    },
    {
          path: '/calendar',
          component: calendar
    },
    {
      path: '/detailsClass',
      name: 'detailsClass',
      component: detailsClass
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning,
      children: [{
          path: 'details',
          name: 'details',
          component: details
        },
        {
          path: 'directory',
          name: 'directory',
          component: directory
        },
        {
          path: 'ask',
          name: 'ask',
          component: ask
        }
      ]
    },
    {
      path: '/us',
      name: 'us',
      component: us
    },
    {
      path: '/buyClass',
      name: 'buyClass',
      component: buyClass
    }
  ]
})
