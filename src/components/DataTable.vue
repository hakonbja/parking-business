<template>
  <table>
    <thead v-if="headers">
      <tr>
        <th v-for="header in headers"
          :key="header.key"
        >{{ header.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in orderedData"
        :key="row"
      >
        <td
          v-for="cell in row"
          :key="cell"
        >
          <slot :name="cell.key" :value="cell.value" :row="cell.row">
            {{ cell.value }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import type { DataTableCell } from '@/types/DataTableCell';
import type { DataTableHeader } from '@/types/DataTableHeader';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'DataTable',
  props: {
    data: {
      type: Array as PropType<Array<Record<string, unknown>>>,
      required: true,
    },
    headers: {
      type: Array as PropType<Array<DataTableHeader>>,
      required: false,
      default: () => [],
    },
    idKey: {
      type: String,
      required: false,
      default: 'id',
    },
  },
  computed: {
    orderedData: function(): Array<Array<DataTableCell>> {
      return this.data.map(row => {
        return this.headers.reduce((prev, curr) => {
          prev.push({ value: row[curr.key], key: curr.key, row })
          return prev;
        }, [] as Array<DataTableCell>);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  max-width: 960px;
}

thead {
  color: var(--var-c-on-primary);
  background-color: var(--var-c-primary);
}

th, td {
  padding: 4px 12px;
  border: 1px solid var(--var-c-secondary-grey);
  text-align: center;
}

th {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
