<template>
  <main>
    Home

    <button
      @click="handleLogOut"
    >Log out</button>
  </main>
</template>

<script lang="ts">
import router from '@/router';
import { userService } from '@/services/userService';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
    handleLogOut: function(): void {
      userService.logout();
      router.push({ name: 'login'})
    }
  }
})
</script>
