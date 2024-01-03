<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { Render, Subscribe, createTable, createRender, DataLabel } from 'svelte-headless-table';

  import {
    TEditableListSpec,
    TEditableListData,
    TGenericEditableData,
    TGenericEditableSpec,
    TEditableObjectData,
    TEditableObjectSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';

  type TOnChangeCallback = (data: TEditableListData, spec: TEditableListSpec) => void;

  // External parameters...
  export let spec: TEditableListSpec;
  export let data: TEditableListData = [];
  export let onChange: TOnChangeCallback | undefined = undefined;

  // Assume table row is an object (TODO: To check it with typings?)
  type TTableRow = TEditableObjectData;

  /** Local table data store */
  let tableDataStore = writable<TTableRow[]>([...(data as TTableRow[])]);

  /** Table object */
  const table = createTable(tableDataStore);

  // Get specification params...
  const { id, layout } = spec;
  /** Row specification */
  const rowObjSpec = spec.spec as TEditableObjectSpec;
  /** Row item specifications */
  const colSpecs = rowObjSpec.spec;
  const colSpecsHash = colSpecs.reduce(
    (hash, spec) => {
      const { id } = spec;
      hash[id] = spec;
      return hash;
    },
    {} as Record<string, TGenericEditableSpec>,
  );

  /** Cell elements constructor */
  const EditableCellLabel: DataLabel<TTableRow> = ({ column, row, value }) => {
    const { id } = row; // as BodyRow<unknown>;
    const { accessorKey: colId } = column;
    if (!colId) {
      const errorMsg = 'Undefined column specification id';
      const error = new Error(errorMsg);
      // eslint-disable-next-line no-console
      console.error('[EditableTable:EditableCellLabel]', errorMsg, {
        error,
        column,
        row,
        value,
      });
      // eslint-disable-next-line no-debugger
      debugger;
      // TODO: To throw an error?
      throw error;
      // return;
    }
    const colSpec = colSpecsHash[colId];
    const rowIdx = parseInt(id);
    // TODO: Get colIdx?
    /* console.log('[EditableTable:EditableCellLabel]', {
     *   colId,
     *   colSpec,
     *   rowIdx,
     *   id,
     *   row,
     *   column,
     *   value,
     *   colSpecs,
     *   rowObjSpec,
     * });
     */
    return createRender(GenericEditable, {
      spec: colSpec,
      data: value,
      onChange: onUpdateItem.bind(null, rowIdx),
    });
  };

  /** Table columns descriptions derived from row object fields specifications */
  const tableColumnItems = colSpecs.map((item) => {
    return table.column({
      accessor: item.id,
      header: item.title || item.label || item.id,
      cell: EditableCellLabel,
    });
  });

  /** Table columns
   * @see https://svelte-headless-table.bryanmylee.com/docs/api/create-columns
   */
  const tableColumns = table.createColumns(tableColumnItems);

  // Get render parameters...
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(tableColumns);

  /* console.log('[EditableTable:DEBUG]', {
   *   spec,
   *   id,
   *   rowObjSpec,
   *   data,
   * });
   */

  const dispatch = createEventDispatcher();

  function triggerChange() {
    const data = $tableDataStore;
    /* console.log('[EditableTable:triggerChange]', {
     *   data,
     * });
     */
    if (onChange) {
      onChange($tableDataStore, spec);
    }
    dispatch('change', { data, spec });
  }

  function onUpdateItem(rowIdx: number, data: TGenericEditableData, spec: TGenericEditableSpec) {
    const { id } = spec;
    const currentItem = $tableDataStore[rowIdx];
    const newItem = { ...currentItem, [id]: data } as TTableRow;
    console.log('[EditableTable:onUpdateValue] set item', {
      id,
      rowIdx,
      data,
      spec,
      newItem,
    });
    $tableDataStore[rowIdx] = newItem;
    $tableDataStore = $tableDataStore;
    // Handle any server-synchronization.
    triggerChange();
  }
</script>

<div class="EditableTable" data-layout={layout} data-id={id} title={spec.title}>
  {#if spec.label}
    <div class="EditableTable_Label">
      {spec.label}
    </div>
  {/if}
  <table {...$tableAttrs} class="EditableTable_Table">
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
  .EditableTable {
    &[data-layout='horizontal'] {
      border: 4px solid $demoColor;
    }
    .EditableTable_Label {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }
  }
</style>
