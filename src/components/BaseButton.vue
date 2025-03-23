<template>
  <button
    class="button"
    :class="`button--${size}`"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    size: {
      type: String,
      required: false,
      default: 'md',
    },
  },
  emits: ['click'],
})
</script>

<style scoped>
.button {
  height: 40px;
  padding: 8px 8px;
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);
  border: none;
  cursor: pointer;
}

.button--md {
  font-size: 20px;
}

.button--sm {
  font-size: 16px;
}
</style>
