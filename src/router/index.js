import { createRouter, createWebHistory } from 'vue-router'

const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')
const PageBlog = () => import('@/pages/PageBlog.vue')
const PageProfiles = () => import('@/pages/PageProfiles.vue')
const PageTranscripts = () => import('@/pages/PageTranscripts.vue')
const PageMemorabilia = () => import('@/pages/PageMemorabilia.vue')
const TheLoginModal = () => import('@/layout/TheLoginModal.vue')
const TheContactFormModal = () => import('@/layout/TheContactFormModal.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      default: true,
      component: PageSplash,
    },
    {
      path: '/about',
      name: 'about',

      component: PageAbout,
    },
    {
      path: '/partners',
      name: 'partners',

      component: PagePartners,
    },
    {
      path: '/contact',
      name: 'contact-form',
      component: TheContactFormModal,
    },
    {
      path: '/login',
      name: 'login-form',
      component: TheLoginModal,
    },
    {
      path: '/schools/:bId',
      name: 'building-show',
      component: PageBuildingShow,
      props: true,
    },
    {
      path: '/profiles',
      name: 'profile',
      component: PageProfiles,
    },
    {
      path: '/blog',
      name: 'blog',
      component: PageBlog,
    },
    {
      path: '/transcripts',
      name: 'transcripts',
      component: PageTranscripts,
    },
    {
      path: '/memorabilia',
      name: 'memorabilia',
      component: PageMemorabilia,
    },
    // TODO: add 404 wildcard route
  ],
})

export default router
