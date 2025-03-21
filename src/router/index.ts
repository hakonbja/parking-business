import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { userService } from '@/services/userService';

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
    }
  ],
})

router.beforeEach(async (to) => {
  const isAuthenticated = await userService.isUserLoggedIn();

  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' };
  }

  return true
});

export default router
