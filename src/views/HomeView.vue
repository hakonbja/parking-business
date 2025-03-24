<template>
  <div class="parking-spaces">
    <h1 class="parking-spaces__heading">Parking spaces overview</h1>
    <div
      v-if="!isLoading"
      class="parking-spaces-overview__tiles"
    >
      <ParkingSpaceOverview
      :parking-space="mappedParkingSpaces[1]"
      name="Residents"
      />
      <ParkingSpaceOverview
      :parking-space="mappedParkingSpaces[2]"
      name="Cars"
      />
      <ParkingSpaceOverview
      :parking-space="mappedParkingSpaces[3]"
      name="Motorcycles"
      />
    </div>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script lang="ts">
import { parkingService } from '@/services/parkingService';
import type { ParkingSpace } from '@/types/ParkingSpace';
import { defineComponent } from 'vue';
import ParkingSpaceOverview from '@/components/ParkingSpaceOverview.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ParkingSpaceOverview,
  },
  data: function() {
    return {
      isLoading: true,
      parkingSpaces: [] as Array<ParkingSpace>,
    };
  },
  computed: {
    mappedParkingSpaces: function(): Record<number, ParkingSpace> {
      return this.parkingSpaces.reduce((prev, curr) => {
        Object.assign(prev, {
          [curr.parkingSpaceId]: curr,
        });

        return prev;
      }, {} as ParkingSpace);
    }
  },
  mounted: async function() {
    this.parkingSpaces = await parkingService.getSpaces();
    this.isLoading = false;
  },
});
</script>

<style>
.parking-spaces {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parking-spaces__heading {
  margin-bottom: 28px;
  text-align: center;
}

.parking-spaces-overview__tiles {
  display: flex;
  flex-direction: column;
  column-gap: 40px;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>
