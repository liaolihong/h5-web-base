import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页', keepAlive: false }
  } 
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
