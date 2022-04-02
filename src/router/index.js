import { createRouter, createWebHistory } from 'vue-router'
import PageAbout from '@/pages/PageAbout.vue'
import PageSplash from '@/pages/PageSplash.vue'
import PagePartners from '@/pages/PagePartners.vue'
import PageBuildingOne from '@/pages/PageBuildingOne.vue'
import PageBuildingTwo from '@/pages/PageBuildingTwo.vue'
import PageContentIndex from '@/pages/PageContentIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageSplash
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageAbout
      //() => import('../pages/PageAbout.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: PagePartners
    },
    {
      path: '/lincoln-school/building-1',
      name: 'building-1',
      component: PageBuildingOne
    },
    {
      path: '/lincoln-school/building-2',
      name: 'building-2',
      component: PageBuildingTwo
    },

    {
      // TODO: refactor/make dynamic + take props
      path: '/content-idx-test',
      name: 'content-index',
      component: PageContentIndex
    }
  ]
})

export default router
