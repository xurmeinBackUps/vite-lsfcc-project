
const PageSplash = () => import('@/pages/PageSplash.vue')
const PageAbout = () => import('@/pages/PageAbout.vue')
const PagePartners = () => import('@/pages/PagePartners.vue')
const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')
const PageBlog = () => import('@/pages/PageBlog.vue')
const PageProfiles = () => import('@/pages/PageProfiles.vue')
const PageTranscriptsIndex = () => import('@/pages/PageTranscriptsIndex.vue')
const PageTranscriptShow = () => import('@/pages/PageTranscriptShow.vue')
const PageMemorabilia = () => import('@/pages/PageMemorabilia.vue')

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
    component: PageTranscriptsIndex,
  },
      {
        path: '/transcripts/:objKey',
        name: 'transcripts-show',
        component: PageTranscriptShow,
        props: true
      },

  {
    path: '/memorabilia',
    name: 'memorabilia',
    component: PageMemorabilia,
  },
  // TODO: add 404 wildcard route
]
