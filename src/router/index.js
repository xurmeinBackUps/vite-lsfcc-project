import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/PageSplash.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/PageAbout.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('@/pages/PagePartners.vue')
    },
    {
      path: '/schools/building1',
      name: 'building1',
      component: () => import('@/pages/PageBuildingOne.vue')
    },
    {
      path: '/schools/building2',
      name: 'building2',
      component: () =>  import('@/pages/PageBuildingTwo.vue')
    },
    {
      path: '/content-idx-test',
      name: 'content-index',
      component: () => ('@/pages/PageContentIndex.vue')
    }
  ]
})

export default router
