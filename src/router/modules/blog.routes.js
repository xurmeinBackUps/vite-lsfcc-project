const PageBlogVerifaction = () => import('@/pages/PageBlogVerification.vue')
const PageBlogNew = () => import('@/pages/PageBlogNew.vue')

export const blogRoutes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/PageBlog.vue'),
  },
  {
    path: '/blog/verify',
    name: 'verify-blogger',
    component: PageBlogVerifaction,
  },
  {
    path: '/blog/new/:blogKey',
    name: 'new-blog',
    component: PageBlogNew,
    props: true
  },

]
