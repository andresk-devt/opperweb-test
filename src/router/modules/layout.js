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
    children: [
      {
        path: '/dashboard',
        name: 'DashboardHome',
        component: () => import('../../views/Home/Index.vue'),
      },
      {
        path: "/dashboard/categories-list",
        name: "CategoriesList",
        component: () => import("../../views/CategoriesList/Index.vue"),
      },
      {
        path: '/categorie',
        name: 'categorieCreate',
        component: () => import('../../views/Categories/Index.vue'),
      },
      {
        path: '/categorie/:categorie',
        name: 'categorieEdit',
        component: () => import('../../views/Categories/Index.vue'),
      },
    ]
  }
];

export default layoutRoutes;