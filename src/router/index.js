import Vue from 'vue'
import VueRouter from 'vue-router'
import ValorantOverlay from '../views/ValorantOverlay.vue'
import ValorantTabOverlay from '../views/ValorantTabOverlay.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/valorant-overlay',
    name: 'ValorantOverlay',
    component: ValorantOverlay
  },
  {
    path: '/tab-overlay',
    name: 'ValorantTabOverlay',
    component: ValorantTabOverlay
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
