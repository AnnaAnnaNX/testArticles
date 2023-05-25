import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/article/:id',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ Article)
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
