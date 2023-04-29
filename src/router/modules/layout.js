function denyRouteAccess(next, path) {
  const accountToken = localStorage.getItem('access_token');
  if (accountToken) {
    next();
    return;
  }
  next(path);
}

function changeView(next, path) {
  next(path);
}

const layoutRoutes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: (to, from, next) => {
      const accessToken = localStorage.getItem('access_token')
      if (accessToken) {
        changeView(next, '/dashboard');
      } else {
        changeView(next, '/login');
      }
    },
  },
  {
    path: "/dashboard",
    name: "Layout",
    beforeEnter: (to, from, next) => {
      denyRouteAccess(next, '/login');
    },
    component: () => import("../../views/layout/Index.vue"),
    redirect: { name: 'DashboardHome' },
    children: [
      {
        path: '/dashboard/home',
        name: 'DashboardHome',
        beforeEnter: (to, from, next) => {
          denyRouteAccess(next, '/login');
        },
        component: () => import('../../views/Home/Index.vue'),
      },
      {
        path: "/dashboard/categories-list",
        name: "CategoriesList",
        beforeEnter: (to, from, next) => {
          denyRouteAccess(next, '/login');
        },
        component: () => import("../../views/CategoriesList/Index.vue"),
      },
      {
        path: '/dashboard/categorie',
        name: 'categorieCreate',
        beforeEnter: (to, from, next) => {
          denyRouteAccess(next, '/login');
        },
        component: () => import('../../views/Categories/Index.vue'),
      },
      {
        path: '/dashboard/categorie/:id',
        name: 'categorieEdit',
        beforeEnter: (to, from, next) => {
          denyRouteAccess(next, '/login');
        },
        component: () => import('../../views/Categories/Index.vue'),
      },
    ]
  }
];

export default layoutRoutes;