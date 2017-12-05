// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import biz from './config.js'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(qs)

Vue.prototype.biz = biz

Vue.prototype.getTimer = function (time) {
  let mydate = new Date(time)
  let str = ''
  str += mydate.getFullYear() + '-'
  str += ((mydate.getMonth() + 1) < 10 ? '0' + (mydate.getMonth() + 1) : (mydate.getMonth() + 1)) + '-'
  str += (mydate.getDate() < 10 ? '0' + mydate.getDate() : mydate.getDate()) + ' '
  str += (mydate.getHours() < 10 ? '0' + mydate.getHours() : mydate.getHours()) + ':'
  str += (mydate.getMinutes() < 10 ? '0' + mydate.getMinutes() : mydate.getMinutes()) + ':'
  str += (mydate.getSeconds() < 10 ? '0' + mydate.getSeconds() : mydate.getSeconds())
  return str
}

Vue.config.debug = true

Vue.axios.defaults.withCredentials = true
// Vue.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.axios.defaults.headers['Content-Type'] = 'application/json'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
