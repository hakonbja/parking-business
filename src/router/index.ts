import { useUserStore } from '@/stores/user';
import LoginView from '@/views/LoginView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SessionsView from '@/views/SessionsView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: SessionsView,
    },
  ],
})

router.beforeEach(async (to) => {
  if (!useUserStore().isAuthenticated && to.name !== 'login') {
    return { name: 'login' };
  }

  return true
});

export default router
