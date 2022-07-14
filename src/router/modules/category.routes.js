
export const categoryRoutes = [
  {
    path: '/profiles',
    name: 'profile',
    component: () => import('@/pages/PageProfiles.vue'),
  },
  {
    path: '/memorabilia',
    name: 'memorabilia',
    component: () => import('@/pages/PageMemorabilia.vue'),
  },
  {
    path: '/schools/:bId/entries',
    name: 'building-show',
    component: () => import('@/pages/PageBuildingShow.vue'),
    props: true,
  },
]
