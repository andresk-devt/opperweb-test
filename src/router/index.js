import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from './modules/login'

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
    ...routes
  ]
})

export default router
