import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard/Dashboard.vue";
import Auth from "../pages/Auth/Auth.vue";
import Personal from "../pages/Personal/Personal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/auth/:type",
    name: "Auth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth,
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
