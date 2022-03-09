import Vue from "vue";
import Router from "vue-router";
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ "@/views/dashboard/dashboard.vue");

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: "/",
  root: "/",
  routes: [
    {
      path: "/",
      component: Dashboard
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
   
  ]
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name: to.name, query: from.query });
  } else {
    next();
  }
});

export default router;
