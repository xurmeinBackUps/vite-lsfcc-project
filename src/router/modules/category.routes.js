const PageBuildingShow = () => import('@/pages/PageBuildingShow.vue')

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
    path: '/schools/:bId',
    name: 'building-show',
    component: PageBuildingShow,
    props: true,
  },
]
