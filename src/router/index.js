import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/Sports',
    component: () => import('../pages/sportsbook.vue'),  
  },
  {
    path: '/Live-Wagering',
    component: () => import('../pages/livebetting.vue'),  
  },
  {
    path: '/casino',
    component: () => import('../pages/casino.vue'),  
  },
  {
    path: '/props-builder',
    component: () => import('../pages/propsbuilder.vue'),  
  },
  {
    path: '/racebook',
    component: () => import('../pages/racebook.vue'),  
  },
  {
    path: '/House-rules',
    component: () => import('../pages/houserules.vue'),  
  },
  {
    path: '/sport-rules',
    component: () => import('../pages/sportrules.vue'),  
  },
  {
    path: '/horse-tracks',
    component: () => import('../pages/horsetracks.vue'),  
  },
  {
    path: '/live-betting',
    component: () => import('../pages/livebetting.vue'),  
  },
  {
    path: '/forgot-pass',
    component: () => import('../pages/forgotpass.vue'),  
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router