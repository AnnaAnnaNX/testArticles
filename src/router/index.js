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
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
