import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: () => import(/* webpackChunkName: "about" */ '../views/InboxPage.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArchivePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
