<template>
  <button
    class="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  emits: ['click'],
})
</script>

<style scoped>
.button {
  height: 40px;
  padding: 8px 8px;
  font-size: 20px;
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);
  border: none;
}
</style>
