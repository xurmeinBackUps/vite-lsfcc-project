export const coreRoutes = [
  {
    path: '/',
    name: 'splash',
    default: true,
    component: () => import('@/pages/PageSplash.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/PageAbout.vue'),
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('@/pages/PagePartners.vue'),
  },
   // TODO: add 404 wildcard route
]
