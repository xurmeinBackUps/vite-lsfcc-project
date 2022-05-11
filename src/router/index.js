import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useAuth } from '@/stores/userAuth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.FB_BASE_URL),
  routes: routes
})


router.afterEach((to, from) => {
  const auth = useAuth()
  if(to === '/') return;

  auth.checkStorage()

  return to
})

export { router }
