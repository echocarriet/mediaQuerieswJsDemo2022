import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/addListener',
    component: () => import('../views/AddListenerView.vue'),
  },
  {
    path: '/addEventListener',
    component: () => import('../views/AddEventListenerView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
