<template>
  <div class="parking-space">
    <h2 class="parking-space__header">{{ name }}</h2>
    <ParkingSpaceOccupancyBar :occupancy="occupancyPercentage" />
    <p class="parking-space__text">Occupancy: {{ occupancyPercentage * 100 }}% <span class="parking-space__text--dimmed">({{ parkingSpace.capacity + parkingSpace.occupancy }}/{{ parkingSpace.capacity }})</span></p>
  </div>
  </template>

<script lang="ts">
import type { ParkingSpace } from '@/types/ParkingSpace';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import ParkingSpaceOccupancyBar from '@/components/ParkingSpaceOccupancyBar.vue';

export default defineComponent({
  name: 'ParkingSpaceOverview',
  components: {
    ParkingSpaceOccupancyBar,
  },
  props: {
    parkingSpace: {
      type: Object as PropType<ParkingSpace>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    occupancyPercentage: function(): number {
      return (this.parkingSpace.capacity + this.parkingSpace.occupancy) / this.parkingSpace.capacity;
    }
  }
})
</script>

<style scoped>
.parking-space {
  width: 80%;
  flex-shrink: 0;


  @media screen and (min-width: 576px) {
    width: 30%;
    max-width: 300px;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.parking-space__header {
  margin-bottom: 16px;
}

.parking-space__text {
  margin-top: 12px;
  font-size: 20px;
}

.parking-space__text--dimmed {
  color: var(--var-c-secondary-grey);
}
</style>
