<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import { Render, Subscribe, createTable, createRender, DataLabel } from 'svelte-headless-table';
  import classNames from 'classnames';

  import {
    TEditableListSpec,
    TEditableListData,
    TGenericEditableData,
    TGenericEditableSpec,
    TEditableObjectData,
    TEditableObjectSpec,
    TEditableFieldSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';
  import {
    getFlatItemId,
    getPlainTableColSpecs,
    makeFlatFromFullData,
    restoreFullFromFlatData,
  } from './EditableTableHelpers';

  type TOnChangeCallback = (data: TEditableListData, spec: TEditableListSpec) => void;

  // External parameters...
  export let className: string | undefined = undefined;
  export let spec: TEditableListSpec;
  export let data: TEditableListData = [];
  export let onChange: TOnChangeCallback | undefined = undefined;

  // Assume table row is an object (TODO: To check it with typings?)
  type TTableRow = TEditableObjectData;

  const flatData: TEditableObjectData[] = data.map((rowData) =>
    makeFlatFromFullData(rowData as TEditableObjectData),
  );

  /** Local table data store */
  let tableFlatDataStore = writable<TTableRow[]>(flatData);
  let tableFullDataStore = writable<TTableRow[]>([...(data as TTableRow[])]);

  /** Table object */
  const table = createTable(tableFlatDataStore);

  console.log('[EditableTable:Test data]', {
    data,
    flatData,
    tableFlatDataStore,
    table,
  });

  // Get specification params...
  const { id, layout, flatObjects, showFlatFields } = spec;
  // TODO: It's possible to get `showFlatFields` list as an attrubute
  /** Row specification */
  const rowObjSpec = spec.spec as TEditableObjectSpec;
  /** Row item specifications */
  const colSpecs = getPlainTableColSpecs(spec, showFlatFields);
  // const colSpecs = rowObjSpec.spec;
  const colSpecsHash = colSpecs.reduce(
    (hash, spec) => {
      const flatId = getFlatItemId(spec);
      hash[flatId] = spec;
      return hash;
    },
    {} as Record<string, TGenericEditableSpec>,
  );

  console.log('[EditableTable:Test specs]', {
    rowObjSpec,
    colSpecs,
    colSpecsHash,
  });

  /** Cell elements constructor */
  const EditableCellLabel: DataLabel<TTableRow> = ({ column, row, value }) => {
    const { id } = row; // as BodyRow<unknown>;
    const { accessorKey: colId } = column;
    console.log('[EditableTable:EditableTable]', id, colId, {
      column,
      row,
      value,
      id,
      colId,
    });
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
    const flatId = getFlatItemId(item);
    console.log('[EditableTable:tableColumnItems]', flatId, {
      item,
    });
    return table.column({
      accessor: flatId, // item.id,
      header: item.title || item.label || flatId,
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
    const data = $tableFullDataStore;
    console.log('[EditableTable:triggerChange]', {
      data,
    });
    if (onChange) {
      onChange(data, spec);
    }
    dispatch('change', { data, spec });
  }

  function onUpdateItem(rowIdx: number, data: TGenericEditableData, spec: TGenericEditableSpec) {
    const { id } = spec;
    const flatId = getFlatItemId(spec);
    const currentFlatItem = $tableFlatDataStore[rowIdx];
    const newFlatItem = { ...currentFlatItem, [flatId]: data } as TTableRow;
    const newFullItem = restoreFullFromFlatData(newFlatItem);
    console.log('[EditableTable:onUpdateValue] set item', {
      id,
      rowIdx,
      data,
      spec,
      newFlatItem,
      newFullItem,
    });
    debugger;
    $tableFlatDataStore[rowIdx] = newFlatItem;
    $tableFlatDataStore = $tableFlatDataStore;
    // Full store...
    $tableFullDataStore[rowIdx] = newFullItem;
    $tableFullDataStore = $tableFullDataStore;
    // Handle any server-synchronization.
    triggerChange();
  }
</script>

<div
  class={classNames(className, 'EditableTable')}
  data-layout={layout}
  data-id={id}
  title={spec.title}
>
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
    .EditableTable_Label {
      @include EditableLabel;
    }
  }
</style>
