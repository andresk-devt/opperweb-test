import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from './modules/login'
import layoutRoutes from './modules/layout'

const routes = [
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/404/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...loginRoutes,
    ...layoutRoutes,
    ...routes
  ]
})

export default router
