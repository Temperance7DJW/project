import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { compile } from "vue/types/umd";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: () => import("../views/Homepage.vue"),
  },
  {
    path: "/stu-table",
    name: "StuTable",
    component: () => import("../views/StuTable.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin/Manage.vue"),
  },
  {
    path: "/stu-default",
    name: "StuDefault",
    component: () => import("../views/student/StuDefault.vue"),
  } /*,
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/About.vue"),
  },*/,
];

const router = new VueRouter({
  routes,
});

export default router;
