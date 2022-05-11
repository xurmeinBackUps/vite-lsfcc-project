import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useAuth } from '@/stores/userAuth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach((to, from) => {
  if(to !== '/') return;

  const auth = useAuth()

  auth.checkStorage()

  return to
})

export { router }
