import Vue from 'vue';
import Router from 'vue-router';
import PlayerForm from './components/PlayerForm';
import Dashboard from "./views/Dashboard";

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
      path: '/',
      name: 'test',
      component: PlayerForm
    }
  ],
});
