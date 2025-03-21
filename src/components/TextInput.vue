<template>
  <div class="wrapper">
    <label v-if="label">{{ label }}</label>
    <input
    :value="modelValue"
    :type="type"
    :required="required"
    class="input"
    :placeholder="placeholder"
    @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
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
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:model-value'],
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.input {
  height: 40px;
  border: none;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 16px;
}
</style>
