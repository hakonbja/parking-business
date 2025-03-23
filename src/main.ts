import '@/assets/style.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { userService } from './services/userService';
import { useUserStore } from './stores/user';

const app = createApp(App)

app.use(createPinia())
useUserStore().isAuthenticated = await userService.isUserLoggedIn();

app.use(router)
app.mount('#app')
