import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard/Dashboard.vue";
import Auth from "../pages/Auth/Auth.vue";
import Personal from "../pages/Personal/Personal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/auth/:type",
    name: "auth",
    component: Auth,
  },
  {
    path: "/personal",
    name: "personal",
    component: Personal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
