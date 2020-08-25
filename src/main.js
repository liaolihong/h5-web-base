import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.css'
import * as enumerate from './JS/common.js'
import './JS/plugin'
import './JS/FastClick'
import utils from './JS/utils'
import VueScroller from 'vue-scroller'
import Vant from './vant.js'

Vue.use(VueScroller)
Vue.use(utils)
Vue.use(Vant)
Vue.prototype.$common = enumerate
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'title'
  }
  next()
})

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
