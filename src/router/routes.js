const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')
const PageBlog = () => import('@/pages/PageBlog.vue')
const PageProfiles = () => import('@/pages/PageProfiles.vue')
const PageTranscripts = () => import('@/pages/PageTranscripts.vue')
const PageMemorabilia = () => import('@/pages/PageMemorabilia.vue')
const TheContactModal = () => import('@/layout/TheContactModal.vue')

export const routes = [
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
    component: TheContactModal,
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
]
