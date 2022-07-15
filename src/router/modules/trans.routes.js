const PageTranscriptsShow = () => import('@/pages/PageTranscriptShow.vue')

export const transRoutes = [
  {
    path: '/transcripts',
    name: 'transcripts',
    component: () => import('@/pages/PageTranscriptsIndex.vue'),
  },
  {
    path: '/transcripts/:transKey',
    name: 'transcripts-show',
    component: PageTranscriptsShow,
    props: true
  },
]
