<template>
  <button
    class="button"
    :class="`button--${size}`"
    :disabled="disabled"
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
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss" scoped>
.button {
  height: 40px;
  padding: 8px 8px;
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);
  border: none;
  cursor: pointer;

  &--md {
    font-size: 20px;
  }

  &--sm {
    font-size: 16px;
  }

  &:disabled {
    cursor: auto;
    background-color: grey;
  }
}

</style>
