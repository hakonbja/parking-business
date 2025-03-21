<template>
  <main>
    Home

    <BaseButton
      @click="handleLogOut"
    >
      Log out
    </BaseButton>
  </main>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import router from '@/router';
import { userService } from '@/services/userService';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    BaseButton,
  },
  methods: {
    handleLogOut: function(): void {
      userService.logout();
      router.push({ name: 'login'})
    }
  }
})
</script>
