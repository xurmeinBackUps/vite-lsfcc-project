import { createRouter, createWebHistory } from 'vue-router'

const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')
const PageBlog = () => import('@/pages/PageBlog.vue')
const PageProfiles = () => import('@/pages/PageProfiles.vue')
const PageTranscripts = () => import('@/pages/PageTranscripts.vue')
const PageMemorabilia = () => import('@/pages/PageMemorabilia.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      
      default: true,
      component: PageSplash
    },
    {
      path: '/about',
      
      component: PageAbout
    },
    {
      path: '/partners',

      component: PagePartners
    },
    {
      path: '/schools/:bId',
      component: PageBuildingShow,
      props: true
    }, 
    {
      path: '/profiles',

      component: PageProfiles
    },
    {
      path: '/blog',
      
      component: PageBlog
    },
    {
      path: '/transcripts',

      component: PageTranscripts
    },
    {
      path: '/memorabilia',

      component: PageMemorabilia
    },
    // TODO: add 404 wildcard route
  ]
})

export default router
