<template>
  <header>
    Parking business header
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
  <footer>
    The footer
  </footer>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { userService } from './services/userService';
import router from './router';

export default defineComponent({
  name: 'App',
  mounted: async function() {
    if (!(await userService.isUserLoggedIn())) {
      router.push({ name: 'login'})
    }
  }
});
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  color: var(--var-c-on-dark);
  background-color: var(--var-c-primary);
}

footer {
  height: 40px;
  padding: 0 20px;
  background-color: var(--var-c-primary);
}
</style>
