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
//import { Switch } from 'mint-ui';

//Vue.component(Switch.name, Switch);
Vue.config.productionTip = false

Vue.prototype.$axios = Axios

Vue.use(MintUI)

import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
