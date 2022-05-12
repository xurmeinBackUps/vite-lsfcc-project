const PageTranscriptsShow = () => import('@/pages/PageTranscriptShow.vue')
const PageBlogNewVerifaction = () => import('@/pages/PageBlogNewVerification.vue')
const PageBlogNew = () => import('@/pages/PageBlogNew.vue')

export const crudRoutes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/PageBlog.vue'),
  },
  {
    path: '/verify/blog*',
    name: 'verify-blogger',
    component: PageBlogNewVerifaction,
    props: route => ({ query:
      {
        apiKey: route.query.apiKey,
        continueUrl: route.query.continueUrl,
        lang: route.query.lang,
        mode: route.query.mode,
        oobCode: route.query.oobCode
      }
    })
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
