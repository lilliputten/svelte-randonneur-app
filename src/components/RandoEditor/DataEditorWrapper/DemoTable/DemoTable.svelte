<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import {
    Render,
    Subscribe,
    createTable,
    createRender,
    DataBodyRow,
    DataLabel,
  } from 'svelte-headless-table';
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

  // import { createSamples } from './createSamples';
  import EditableCell from './EditableCell.svelte';

  // TODO: Get current data set id from stores?
  const dataSetKey: TRandoDataSetKey = 'delete';
  const dataSetStore = randoDataSetsStores[dataSetKey];

  // type Item = $$Generic; // TDataSetDict
  type Item = TDataSetDict;

  let tableDataStore = writable<TDataSetDict[]>([]);

  // TODO: External data updater (?) (TODO: To preserve local changes?)
  const setTableDataStoreUnsubscribe = dataSetStore.subscribe((data) => {
    if (data && Array.isArray(data)) {
      tableDataStore.set(data);
    }
  });
  onDestroy(setTableDataStoreUnsubscribe);

  const table = createTable(tableDataStore);

  type TOnUpdateValue = (rowDataId: string, columnId: string, newValue: unknown) => void;

  const updateData: TOnUpdateValue = (rowDataId, columnId, newValue) => {
    console.log('[DemoTable:updateData] start', {
      rowDataId,
      columnId,
      newValue,
    });
    debugger;
    /* // UNUSED: Sample code
    if (['age', 'visits', 'progress'].includes(columnId)) {
      newValue = parseInt(String(newValue));
      if (isNaN(Number(newValue))) {
        // Refresh data to reset invalid values.
        $tableDataStore = $tableDataStore;
        return;
      }
    }
    if (columnId === 'status') {
      if (!['relationship', 'single', 'complicated'].includes(String(newValue))) {
        // Refresh data to reset invalid values.
        $tableDataStore = $tableDataStore;
        return;
      }
    }
    */
    // In this case, the dataId of each item is its index in $data.
    // You can also handle any server-synchronization necessary here.
    const idx = parseInt(rowDataId);
    const currentItem = $tableDataStore[idx];
    const key = columnId; // Cast as `keyof YourDataItem`
    // if (typeof currentItem === 'object') {
    // }
    const newItem = { ...currentItem, [key]: newValue } as TDataSetDict;
    console.log('[DemoTable:updateData] set item', {
      newItem,
    });
    debugger;
    $tableDataStore[idx] = newItem;
    $tableDataStore = $tableDataStore;
    // Handle any server-synchronization.
  };

  const EditableCellLabel: DataLabel<unknown> = ({ column, row, value }) => {
    console.log('[DemoTable:EditableCellLabel]', {
      row,
      column,
      value,
    });
    return createRender(EditableCell, {
      row,
      column,
      value,
      onUpdateValue: updateData,
    });
  };

  /** Table columns.
   * @see https://svelte-headless-table.bryanmylee.com/docs/api/create-columns
   */
  const columns = table.createColumns([
    table.column({
      header: 'Name',
      cell: EditableCellLabel,
      accessor: 'name',
    }),
    table.column({
      header: () => 'Code',
      cell: EditableCellLabel,
      accessor: 'code',
    }),
    table.column({
      header: 'Unit',
      cell: EditableCellLabel,
      accessor: 'unit',
    }),
    table.column({
      header: 'Categories',
      cell: EditableCellLabel,
      accessor: 'categories',
    }),
    table.column({
      header: 'Check',
      cell: EditableCellLabel,
      accessor: 'check',
    }),
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);

  // Tabulator component
  let tableComponent: HTMLElement;

  console.log('[DemoTable:DEBUG]', {
    table,
    columns,
    $headerRows,
    $pageRows,
    $tableAttrs,
    $tableBodyAttrs,
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
  <div class="tableComponent" bind:this={tableComponent}>
    <table {...$tableAttrs} class="demo">
      <thead>
        {#each $headerRows as headerRow (headerRow.id)}
          <Subscribe attrs={headerRow.attrs()} let:attrs>
            <tr {...attrs}>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <th {...attrs}>
                    <div>
                      <Render of={cell.render()} />
                    </div>
                  </th>
                </Subscribe>
              {/each}
            </tr>
          </Subscribe>
        {/each}
      </thead>
      <tbody {...$tableBodyAttrs}>
        {#each $pageRows as row (row.id)}
          <Subscribe attrs={row.attrs()} let:attrs>
            <tr {...attrs}>
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <td {...attrs}>
                    <Render of={cell.render()} />
                  </td>
                </Subscribe>
              {/each}
            </tr>
          </Subscribe>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style src="./DemoTable.scss" lang="scss"></style>
