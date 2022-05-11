import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useAuth } from '@/stores/passwordAuth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.afterEach((to, from) => {
  const auth = useAuth()
  if(to === '/') return;

  auth.checkStorage()

  return to
})

export { router }
