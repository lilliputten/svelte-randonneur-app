<script lang="ts">
  import { TEditableListSpec } from '@/src/core/types/editable';

  import { writable } from 'svelte/store';
  import { Render, Subscribe, createTable, createRender, DataLabel } from 'svelte-headless-table';

  import EditableCell from './EditableCell.svelte';

  // interface TDemoTableItem {
  //   id: string;
  //   name: string;
  // }
  type TDemoTableItem = unknown;

  // List of objects
  const tableSpec: TEditableListSpec = {
    id: 'objList',
    type: 'list',
    title: 'objList',
    label: 'objList',
    layout: 'table',
    spec: {
      id: 'listObj',
      type: 'object',
      // layout: 'horizontal',
      spec: [
        { id: 'id', type: 'string', title: 'Id' },
        { id: 'name', type: 'string', title: 'Name' },
      ],
    },
  };

  const tableData: TDemoTableItem[] = [
    { id: 'id1', name: 'name1' },
    { id: 'id2', name: 'name2' },
  ];

  let tableDataStore = writable<TDemoTableItem[]>(tableData);

  /* function onRootChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
   *   console.log('[DemoEditableTable:onRootChange]', spec.id, {
   *     id: spec.id,
   *     data,
   *     spec,
   *   });
   * }
   */

  const table = createTable(tableDataStore);

  type TOnUpdateValue = (rowDataId: string, columnId: string, newValue: TDemoTableItem) => void;

  const updateData: TOnUpdateValue = (rowDataId, columnId, newValue) => {
    console.log('[DemoTable:updateData] start', {
      rowDataId,
      columnId,
      newValue,
    });
    debugger;
    // In this case, the dataId of each item is its index in $data.
    // You can also handle any server-synchronization necessary here.
    const idx = parseInt(rowDataId);
    const currentItem = $tableDataStore[idx];
    const currentObj = typeof currentItem === 'object' ? currentItem : undefined;
    const key = columnId; // Cast as `keyof YourDataItem`
    const newItem = { ...currentObj, [key]: newValue };
    console.log('[DemoTable:updateData] set item', {
      newItem,
    });
    debugger;
    $tableDataStore[idx] = newItem;
    $tableDataStore = $tableDataStore;
    // Handle any server-synchronization.
  };

  const EditableCellLabel: DataLabel<TDemoTableItem> = ({ column, row, value }) => {
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
      accessor: 'id' as never, // ???
      header: 'Id',
      cell: EditableCellLabel,
    }),
    table.column({
      accessor: 'name' as never, // ???
      header: 'Name',
      cell: EditableCellLabel,
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
  });

  // DEBUG
  $: console.log('tableDataStore', $tableDataStore);
</script>

<div class="DemoEditableTable">
  <h2>DemoEditableTable</h2>
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

<style lang="scss">
  .DemoEditableTable {
    padding: 20px;
  }
</style>
