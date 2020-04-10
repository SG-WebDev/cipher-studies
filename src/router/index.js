import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RowsTransition from '../views/RowsTransition.vue'
import BBS from '../views/BBS.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rows-transition',
    name: 'rows-transition',
    component: RowsTransition
  },
  {
    path: '/bbs',
    name: 'BBS',
    component: BBS
  }
]

const router = new VueRouter({
  routes
})

export default router
