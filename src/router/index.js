import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/inbox',
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

router.beforeEach((to, from, next) => {
  if(to.name === 'Inbox' || to.name === 'Archive'){
    next()
  } else {
    next('/inbox')
  }
})

export default router
