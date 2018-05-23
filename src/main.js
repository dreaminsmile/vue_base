import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'
import 'common/styl/layout'
import 'common/styl/reset'
import 'common/styl/public'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
