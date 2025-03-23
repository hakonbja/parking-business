<template>
  <div class="bars">
    <div
    v-for="n in 40"
    :key="n"
    class="bar"
    :class="{'bar--filled': n <= roundedOccupancy}"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ParkingSpaceOccupancyBar',
  props: {
    occupancy: {
      type: Number,
      required: true,
    },
  },
  computed: {
    roundedOccupancy: function(): number {
      return Math.round(this.occupancy * 40);
    },
  }
})
</script>

<style scoped>
.bars {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border: 2px solid var(--var-c-primary);
  background-color: var(--var-c-background);
  border-radius: 12px;
  overflow: hidden;
}

.bar {
  width: 100%;
  height: 6px;

  &:nth-child(4n + 1) {
    border-bottom: 2px solid var(--var-c-primary);
  }

  &:first-child {
    border-bottom: none;
  }
}

.bar--filled {
  background-color: var(--var-c-accent-green);
}
</style>
