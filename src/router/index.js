import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/test',
    name: 'Test',
    component: () => import('../views/el/FormTest.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/el/InputTest.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/el/RadioTest.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/el/CheckboxTest.vue')
  },
  {
    path: '/antv/g6',
    name: 'AntvG6',
    component: () => import('../views/al/g6/AntvG6Test.vue')
  },
  {
    path: '/antv/g2',
    name: 'AntvG2',
    component: () => import('../views/al/g2/AntvG2Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
