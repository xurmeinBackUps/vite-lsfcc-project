const PageTranscripteShow = () => import('@/pages/PageTranscriptShow.vue')

export const crudRoutes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/PageBlog.vue'),
  },
  {
    path: '/transcripts',
    name: 'transcripts',
    component: () => import('@/pages/PageTranscriptsIndex.vue'),
  },
  {
    path: '/transcripts/:objKey',
    name: 'transcripts-show',
    component: PageTranscripteShow,
    props: true
  },
]
