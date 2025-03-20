<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    :type="type"
    @input="$emit('update:model-value', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  emits: ['update:model-value'],
})
</script>
