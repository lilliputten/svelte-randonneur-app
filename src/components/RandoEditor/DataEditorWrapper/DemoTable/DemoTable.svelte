<script lang="ts">
  /* // Tabulator
   * import {
   *   // prettier-ignore
   *   Tabulator,
   *   TabulatorFull,
   *   FormatModule,
   *   EditModule,
   *   ColumnDefinition,
   * } from 'tabulator-tables';
   * // NOTE: Getting:
   * // [vite] Named export 'EditModule' not found.
   */
  import { onMount } from 'svelte';

  import { TRandoDataSetKey, randoDataSetKeys } from '@/src/core/types/rando';
  import { randoDataSetsStores } from '@/src/store';

  /* // External params...
   * export let data: unknown[], columns: ColumnDefinition[];
   */

  // Tabulator component
  let tableComponent: HTMLElement;

  /* // Tabulator setup
   * Tabulator.registerModule([FormatModule, EditModule]);
   */

  // TODO: Get current data set id from stores?
  const dataSetKey: TRandoDataSetKey = 'delete';
  const dataSetStore = randoDataSetsStores[dataSetKey];

  console.log('[DemoTable:DEBUG]', {
    dataSetKey,
    dataSetStore,
    randoDataSetsStores,
    randoDataSetKeys,
  });

  // DEBUG
  $: console.log('dataSetStore', $dataSetStore);

  /* // Tabulator initialize
   * onMount(() => {
   *   // @see https://tabulator.info/docs/5.5/svelte#svelte
   *   new Tabulator(tableComponent, {
   *     data: data, // Link data to table
   *     reactiveData: true, // Enable data reactivity
   *     columns: columns, // Define table columns
   *   });
   * });
   */
</script>

<div class="DemoTable">
  <div>DemoTable</div>
  <div class="tableComponent" bind:this={tableComponent}></div>
</div>

<style src="./DemoTable.scss" lang="scss"></style>
