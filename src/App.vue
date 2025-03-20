<template>
  <header>
    Parking business header
  </header>

  <RouterView />
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
