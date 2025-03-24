<template>
  <div class="sessions-overview">
    <h1 class="sessions-overview__heading">Parking sessions overview</h1>
    <DataTable
      v-if="!isLoading"
      :headers="headers"
      :data="parkingSessions"
      id-key="parkingSessionId"
    >
      <template v-slot:parkingSpaceId="slotProps">
        {{ parkingSpaceIdToLabel(slotProps.value) }}
      </template>
      <template v-slot:sessionStartedAt="slotProps">
        {{ formatDate(slotProps.value) }}
      </template>
      <template v-slot:sessionEndedAt="slotProps">
        {{ formatDate(slotProps.value) }}
      </template>
      <template v-slot:isSessionEnded="slotProps">
        {{ slotProps.value ? 'Inactive' : 'Active' }}
      </template>
      <template v-slot:endSession="slotProps">
        <BaseButton
          class="data-table__button"
          size="sm"
          :disabled="slotProps.row.isSessionEnded"
          @click="endSession(slotProps.row.parkingSessionId)"
        >
          End session
        </BaseButton>
      </template>
    </DataTable>
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import DataTable from '@/components/DataTable.vue';
import { parkingService } from '@/services/parkingService';
import type { ParkingSession } from '@/types/ParkingSession';
import { defineComponent } from 'vue';

export default defineComponent({
  label: 'SessionsView',
  components: {
    DataTable,
    BaseButton,
  },
  data: function() {
    return {
      isLoading: true,
      parkingSessions: [] as Array<ParkingSession>,
      headers: [
        {
          key: 'parkingSpaceId',
          label: 'Type',
        },
        {
          key: 'sessionStartedAt',
          label: 'Start date',
        },
        {
          key: 'sessionEndedAt',
          label: 'End date',
        },
        {
          key: 'isSessionEnded',
          label: 'Status',
        },
        {
          key: 'endSession',
          label: 'Actions'
        },
      ],
      parkingSpaceIdLabelMap: {
        1: 'Resident',
        2: 'Car',
        3: 'Motorcycle',
      }
    }
  },
  methods: {
    fetchParkingSessions: async function(): Promise<void> {
      this.isLoading = true;
      this.parkingSessions = (await parkingService.getSessions()).parkingSessions.sort((a, b) => {
        return (a.isSessionEnded === b.isSessionEnded) ? 0 : a.isSessionEnded ? 1 : -1;
      });
      this.isLoading = false;
    },
    parkingSpaceIdToLabel: function(id: 1|2|3): string {
      return this.parkingSpaceIdLabelMap[id]
    },
    endSession: async function(id: string): Promise<void> {
      await parkingService.endSession(id);
      this.fetchParkingSessions();
    },
    formatDate: function(date: string): string {
      return new Date(date).toLocaleDateString()
    }
  },
  mounted: async function(): Promise<void> {
    this.fetchParkingSessions()
  },
})
</script>

<style lang="scss" scoped>
.sessions-overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 28px;

  &__heading {
    margin-bottom: 28px;
    text-align: center;
  }
}
</style>
