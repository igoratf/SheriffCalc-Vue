import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "./views/Dashboard";
import Ranking from "./views/Ranking";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/dashboard',
      name: "dashboard",
      component: Dashboard
    },
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/ranking',
      name: "ranking",
      component: Ranking
    }
  ],
});
