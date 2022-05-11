const PageTranscriptsShow = () => import('@/pages/PageTranscriptShow.vue')
const PageBlogNew = () => import('@/pages/PageBlogNew.vue')

// const

export const crudRoutes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/PageBlog.vue'),
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
