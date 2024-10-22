import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Registrar from '../views/RegistrarPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/registrar',
    name: 'RegistrarPage',
    component: Registrar
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
