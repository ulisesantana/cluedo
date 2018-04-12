import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/containers/Home';
import LaFortalezaRoja from '@/components/containers/LaFortalezaRoja';
import Meereen from '@/components/containers/Meereen';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/la-fortaleza-roja',
      name: 'LaFortalezaRoja',
      component: LaFortalezaRoja,
    },
    {
      path: '/meereen',
      name: 'Meereen',
      component: Meereen,
    },
  ],
});
