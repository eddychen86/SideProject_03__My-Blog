import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/components/Index.vue') },
    { path: '/about', component: () => import('@/components/pages/About.vue') },
    { path: '/contact', component: () => import('@/components/pages/Contact.vue') },
    { path: '/project', component: () => import('@/components/pages/Project.vue') },
  ]
});

export default router;