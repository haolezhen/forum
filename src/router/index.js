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
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue')
  },
  {
    path: '/forumAgenda',
    name: 'ForumAgenda',
    component: () => import('../views/ForumAgenda.vue')
  },
  {
    path: '/meetingAgenda',
    name: 'MeetingAgenda',
    component: () => import('../views/MeetingAgenda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
