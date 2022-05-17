import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useAuth } from '@/stores/userAuth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach((to, from) => {
  if(to !== '/') return;
  let email = localStorage.getItem('bloggerEmail')

  const auth = useAuth()

  auth.state.bloggerEmail = email
  auth.checkStorage()

  return to
})

export { router }
