import { createRouter, createWebHistory } from 'vue-router'

const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingOne = () => import('@/pages/PageBuildingOne.vue')
const PageBuildingTwo = () =>  import('@/pages/PageBuildingTwo.vue')
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageAbout
    },
    {
      path: '/partners',
      name: 'partners',
      component: PagePartners
    },
    {
      path: '/schools/building1',
      name: 'building1',
      component: PageBuildingOne 
    },
    {
      path: '/schools/building2',
      name: 'building2',
      component: PageBuildingTwo
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
