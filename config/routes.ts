const routes: any = [
  {
    path: '/',
    redirect: '/home',
    keepQuery: true,
  },
  {
    path: '/',
    layout: false,
    // component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: '@/pages/index',
      },
      {
        path: '/docs',
        component: '@/pages/docs',
        layout: false,
      },
      {
        path: '/button',
        component: '@/pages/button',
        layout: false,
      },
      {
        path: '/dialog',
        component: '@/pages/dialog',
        layout: false,
      },
      {
        path: '/icon',
        component: '@/pages/icon',
        layout: false,
      },
    ],
  },
  { path: '/*', component: '@/pages/404', layout: false },
  { path: '/**/*', redirect: '/404', layout: false },
];

export default routes;
