import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Blog from '../views/Blog.vue'
import Career from '../views/Career.vue'
import Contact from '../views/Contact.vue'
import BlogDetail from '../views/BlogDetail.vue'

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
  },
  {
    path: '/blog-detail',
    name: 'blog-detail',
    component: BlogDetail,
    props: true
  },
  { 
    path: "*",
    name: 'not-found',
    component: Home 
  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router
