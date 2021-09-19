import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/users',
    name: 'users-index',
    component: () => import(/* webpackChunkName: "users-index" */ '@/components/pages/users/Index.vue'),
  },
  {
    path: '/products',
    name: 'products-index',
    component: () => import(/* webpackChunkName: "products-index" */ '@/components/pages/products/Index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
