import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../components/Button.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Button' },
  { path: '/button-a', component: Button }
]

const router = new VueRouter({
  routes
})

export default router