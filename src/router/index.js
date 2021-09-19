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
    path: '/products',
    name: 'products-index',
    component: () => import(/* webpackChunkName: "products-index" */ '@/components/pages/products/ProductsIndex.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
