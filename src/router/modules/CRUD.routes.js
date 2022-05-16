const PageTranscriptsShow = () => import('@/pages/PageTranscriptShow.vue')
const PageBlogVerifaction = () => import('@/pages/PageBlogVerification.vue')
const PageBlogNew = () => import('@/pages/PageBlogNew.vue')

export const crudRoutes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/PageBlog.vue'),
  },
  {
    path: '/blog/verify',
    name: 'verify-blogger',
    component: PageBlogVerifaction,
    props: route => ({ query: route.query.q }),
    // beforeEnter: (to, from) => {
      // if (Object.keys(to.query).length)
      //   return { path: to.path, query: {} }
    // }
  },
  {
    path: '/blog/new/:blogKey',
    name: 'new-blog',
    component: PageBlogNew,
    props: true
  },
  {
    path: '/transcripts',
    name: 'transcripts',
    component: () => import('@/pages/PageTranscriptsIndex.vue'),
  },
  {
    path: '/transcripts/:objKey',
    name: 'transcripts-show',
    component: PageTranscriptsShow,
    props: true
  },
]
