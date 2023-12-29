<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { Render, Subscribe, createTable, createRender, DataBodyRow } from 'svelte-headless-table';
  import {
    addColumnFilters,
    addColumnOrder,
    addHiddenColumns,
    addSortBy,
    addTableFilter,
    addPagination,
    addExpandedRows,
    matchFilter,
    numberRangeFilter,
    textPrefixFilter,
    addSubRows,
    addGroupBy,
    addSelectedRows,
    addResizedColumns,
  } from 'svelte-headless-table/plugins';

  import {
    TDataSetDict,
    TDataSetDictItemValue,
    TRandoDataSetKey,
    randoDataSetKeys,
  } from '@/src/core/types/rando';
  import { randoDataSetsStores } from '@/src/store';

  // TODO: Get current data set id from stores?
  const dataSetKey: TRandoDataSetKey = 'delete';
  const dataSetStore = randoDataSetsStores[dataSetKey];

  let tableDataStore = writable<TDataSetDictItemValue[]>([]);

  const setTableDataStoreUnsubscribe = dataSetStore.subscribe((data) => {
    if (data && Array.isArray(data)) {
      tableDataStore.set(data);
    }
  });
  onDestroy(setTableDataStoreUnsubscribe);

  const table = createTable(tableDataStore);

  // Tabulator component
  let tableComponent: HTMLElement;

  console.log('[DemoTable:DEBUG]', {
    dataSetKey,
    dataSetStore,
    randoDataSetsStores,
    randoDataSetKeys,
  });

  // DEBUG
  $: console.log('dataSetStore', $dataSetStore);
</script>

<div class="DemoTable">
  <div>DemoTable</div>
  <div class="tableComponent" bind:this={tableComponent}></div>
</div>

<style src="./DemoTable.scss" lang="scss"></style>
