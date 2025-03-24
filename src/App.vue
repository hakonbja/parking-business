<template>
  <header class="header">
    <div class="header__left">
      <div class="header__logo">
        <div>Par<span class="header__logo-highlight">King</span></div>
        <div>Business</div>
      </div>
      <div class="header__menu">
        <RouterLink :to="{ name: 'home' }">Dashboard</RouterLink>
        <RouterLink :to="{ name: 'sessions' }">Sessions</RouterLink>
      </div>
    </div>

    <BaseButton
      v-if="userIsLoggedIn"
      size="sm"
      class="header__logout"
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
  <footer class="footer">
    <span>© 2025 Parking Business</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import router from '@/router';
import { userService } from '@/services/userService';
import { useUserStore } from './stores/user';
import { mapState } from 'pinia';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
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

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 20px;
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);

  &__left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 28px;
    font-family: var(--var-ff-headings);
    font-size: 24px;
    font-weight: 500;
  }

  &__logo-highlight {
    color: var(--var-c-secondary-yellow);
  }

  &__menu {
    height: 100%;
    display: flex;
  }

  a {
    position: relative;
    height: 100%;
    padding: 0 8px;
    line-height: 68px;
    color: var(--var-c-white);
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 8px;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    &:hover::after {
      background-color: var(--var-c-secondary-yellow);
    }

    &.router-link-active::after {
      background-color: var(--var-c-accent-blue);
    }
  }

  &__logout:hover {
    color: var(--var-c-secondary-yellow);
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: end;
  flex-shrink: 0;
  height: 40px;
  padding: 0 20px;
  color: var(--var-c-accent-blue);
  background-color: var(--var-c-primary);
}
</style>
