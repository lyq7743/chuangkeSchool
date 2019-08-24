// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import MintUI from 'mint-ui'
import Axios from 'axios'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import {store} from './store/store.js'
import { Popup } from 'mint-ui'

import BaiduMap from 'vue-baidu-map'
import axios from 'axios'


//日历控件
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'



Vue.use(vueEventCalendar, {locale: 'en'})
//import { Switch } from 'mint-ui';
//Vue.component(Switch.name, Switch);
Vue.component(Popup.name, Popup);
Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$http=axios

Vue.use(MintUI)

Vue.use(BaiduMap, {
  ak: 'XnYmDA3Lcphl2dMFlDMs18PV0UrlnbNz'
})

import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
