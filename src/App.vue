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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
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
