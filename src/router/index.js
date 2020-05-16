import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RowsTransition from '../views/RowsTransition.vue'
import BBS from '../views/BBS.vue'
import Stegano from '../views/Stegano.vue'
import DH from '../views/DH.vue'

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
  },
  {
    path: '/stegano',
    name: 'Stegano',
    component: Stegano
  },
  {
    path: '/dh',
    name: 'DH',
    component: DH
  }
];

const router = new VueRouter({
  routes
});

export default router
