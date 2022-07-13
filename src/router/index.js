import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './modules/routes.js'
import { useAuth } from '@/stores/userAuth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from) => {
  const auth = useAuth()

  auth.checkStorage()
})

export { router }
