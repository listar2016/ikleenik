import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import Career from '../views/Career.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
