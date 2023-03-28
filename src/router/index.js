import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/sportsbook',
    component: () => import('../pages/sportsbook.vue'),  
  },
  {
    path: '/casino',
    component: () => import('../pages/casino.vue'),  
  },
  {
    path: '/racebook',
    component: () => import('../pages/racebook.vue'),  
  },
  {
    path: '/live betting',
    component: () => import('../pages/livebetting.vue'),  
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router