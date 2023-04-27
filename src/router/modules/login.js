const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../../views/login/Index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../../views/register/Index.vue")
  }
];

export default loginRoutes;