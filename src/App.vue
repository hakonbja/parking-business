<template>
  <header>
    <span>Parking business header</span>

    <BaseButton
      v-if="userIsLoggedIn"
      size="sm"
      @click="handleLogOut"
    >
      Log out
    </BaseButton>
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
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import router from '@/router';
import { userService } from '@/services/userService';
import { useUserStore } from './stores/user';
import { mapState } from 'pinia';

export default defineComponent({
  name: 'App',
  components: {
    BaseButton,
  },
  computed: {
    ...mapState(useUserStore, {
      userIsLoggedIn: store => store.isAuthenticated,
    })
  },
  methods: {
    handleLogOut: function(): void {
      userService.logout();
      router.push({ name: 'login'})
    }
  },
});
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);
}

footer {
  height: 40px;
  padding: 0 20px;
  background-color: var(--var-c-primary);
}
</style>
