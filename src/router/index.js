import { createRouter, createWebHistory } from 'vue-router'

const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')
const PageContentIndex = () => import('@/pages/PageContentIndex.vue')
const PageProfiles = () => import('@/pages/PageProfiles.vue')

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
      component: PageAbout
    },
    {
      path: '/partners',
      name: 'partners',
      component: PagePartners
    },
    {
      path: '/schools/:bId',
      name: 'building-show',
      component: PageBuildingShow,

    }, 
    {
      path: '/profiles',
      name: 'profiles-index',
      component: PageProfiles
    },
    {
      path: '/content-idx-test',
      name: 'content-index',
      component: PageContentIndex
    }
  ]
})

export default router
