<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Modal, Group, Button } from '@svelteuidev/core';
  import { writable } from 'svelte/store';
  import {
    Render,
    Subscribe,
    createTable,
    createRender,
    DataLabel,
    HeaderLabel,
  } from 'svelte-headless-table';
  import classNames from 'classnames';

  import {
    TEditableListSpec,
    TEditableListData,
    TGenericEditableData,
    TGenericEditableSpec,
    TEditableObjectData,
    // TEditableObjectSpec,
    // TEditableFieldSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';
  import {
    getFlatItemId,
    getPlainTableColSpecs,
    isScalarSpec,
    makeFlatFromFullData,
    restoreFullFromFlatData,
  } from './EditableTableHelpers';
  import { RowActions } from './RowActions';
  import { HeaderActions } from './HeaderActions';

  import styles from './EditableTable.module.scss';
  import { EditRowForm } from './EditRowForm';

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

  // Get specification params...
  const {
    id,
    layout,
    // flatObjects, // Unused here
    showFlatFields, // TODO: It's possible to get `showFlatFields` list as an attrubute
    editInPlace,
    useActionsColumn,
    activeRows,
  } = spec;

  /** Row item specifications */
  const colSpecs = getPlainTableColSpecs(spec, showFlatFields);
  const colSpecsHash = colSpecs.reduce(
    (hash, spec) => {
      const flatId = getFlatItemId(spec);
      hash[flatId] = spec;
      return hash;
    },
    {} as Record<string, TGenericEditableSpec>,
  );

  /** Cell elements constructor */
  const EditableCell: DataLabel<TTableRow> = ({ column, row, value }) => {
    const { id } = row; // as BodyRow<unknown>;
    const { accessorKey: colId } = column;
    /* console.log('[EditableTable:EditableCell]', id, colId, {
     *   column,
     *   row,
     *   value,
     *   id,
     *   colId,
     * });
     */
    if (!colId) {
      const errorMsg = 'Undefined column specification id';
      const error = new Error(errorMsg);
      // eslint-disable-next-line no-console
      console.error('[EditableTable:EditableCell]', errorMsg, {
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
    /* console.log('[EditableTable:EditableCell]', {
     *   colId,
     *   colSpec,
     *   rowIdx,
     *   id,
     *   row,
     *   column,
     *   value,
     *   colSpecs,
     * });
     */
    if (!editInPlace && isScalarSpec(colSpec)) {
      return value != null ? value : '';
    }
    return createRender(GenericEditable, {
      spec: colSpec,
      data: value,
      onChange: onUpdateItem.bind(null, rowIdx),
    });
  };

  const HeaderActionsCell: HeaderLabel<TTableRow> = () => {
    return createRender(HeaderActions, {
      onAddRow,
    });
  };

  const RowActionCell: DataLabel<TTableRow> = ({
    row,
    // column,
    // value,
  }) => {
    const { id } = row; // as BodyRow<unknown>;
    const rowIdx = parseInt(id);
    /* console.log('[EditableTable:RowActionCell]', id, colId, {
     *   column,
     *   row,
     *   value,
     *   id,
     *   colId,
     * });
     */
    return createRender(RowActions, {
      spec: spec,
      onRemoveRow: onRemoveRow.bind(null, rowIdx),
    });
  };

  /** Table columns descriptions derived from row object fields specifications */
  const tableColumnItems = colSpecs.map((item) => {
    const flatId = getFlatItemId(item);
    /* console.log('[EditableTable:tableColumnItems]', flatId, {
     *   item,
     * });
     */
    return table.column({
      accessor: flatId, // item.id,
      header: item.title || item.label || flatId,
      cell: EditableCell,
    });
  });

  if (useActionsColumn) {
    tableColumnItems.push(
      table.column({
        accessor: '__actions',
        header: HeaderActionsCell,
        cell: RowActionCell,
      }),
    );
  }

  /** Table columns
   * @see https://svelte-headless-table.bryanmylee.com/docs/api/create-columns
   */
  const tableColumns = table.createColumns(tableColumnItems);

  // Get render parameters...
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(tableColumns);

  /* console.log('[EditableTable:DEBUG]', {
   *   spec,
   *   id,
   *   data,
   * });
   */

  /** Local click tracker */
  let activeClickTimerHandler: ReturnType<typeof setTimeout> | undefined = undefined;
  const clickDelay = 200;
  function clearActiveClickTimer() {
    if (activeClickTimerHandler) {
      clearTimeout(activeClickTimerHandler);
      activeClickTimerHandler = undefined;
    }
  }
  function setActiveClickTimer() {
    clearActiveClickTimer();
    activeClickTimerHandler = setTimeout(clearActiveClickTimer, clickDelay);
  }
  function hasActiveClickTimer() {
    return !!activeClickTimerHandler;
  }

  // Data edit modal...

  let selectedRow = writable<number | undefined>(undefined);
  $: modalOpened = $selectedRow != null;

  function stopEditRowData() {
    selectedRow.set(undefined);
  }
  function startEditRowData(rowIdx: number | undefined) {
    selectedRow.set(rowIdx);
  }

  // Handlers...

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
    // Update flat store...
    $tableFlatDataStore[rowIdx] = newFlatItem;
    $tableFlatDataStore = $tableFlatDataStore;
    // Update full store...
    $tableFullDataStore[rowIdx] = newFullItem;
    $tableFullDataStore = $tableFullDataStore;
    // Handle any server-synchronization.
    triggerChange();
  }

  function onAddRow() {
    setActiveClickTimer();
    // Update flat store...
    const newFlatItem: TEditableObjectData = {};
    const newFullItem = restoreFullFromFlatData(newFlatItem);
    $tableFlatDataStore = $tableFlatDataStore.concat(newFlatItem);
    // Update full store...
    $tableFullDataStore = $tableFullDataStore.concat(newFullItem);
    // Handle any server-synchronization.
    triggerChange();
  }

  function onRemoveRow(rowIdx: number) {
    setActiveClickTimer();
    // Update flat store...
    $tableFlatDataStore.splice(rowIdx, 1);
    $tableFlatDataStore = $tableFlatDataStore;
    // Update full store...
    $tableFullDataStore.splice(rowIdx, 1);
    $tableFullDataStore = $tableFullDataStore;
  }

  function onRowClick(ev: Event) {
    if (activeRows && !hasActiveClickTimer()) {
      const rowNode = ev.currentTarget as HTMLTableRowElement;
      const id = rowNode?.id;
      const rowIdx = Number(id);
      console.log('[EditableTable:onRowClick]', {
        rowIdx,
        id,
        rowNode,
      });
      ev.preventDefault();
      ev.stopPropagation();
      // TODO: Start edit node...
      startEditRowData(rowIdx);
    }
  }

  function handleRowDataChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    const rowIdx = $selectedRow;
    if (rowIdx != null) {
      const fullItem = data as TEditableObjectData;
      const flatItem = makeFlatFromFullData(fullItem);
      console.log('[EditableTable:handleRowDataChange]', {
        rowIdx,
        fullItem,
        flatItem,
        spec,
      });
      // Update flat store...
      $tableFlatDataStore[rowIdx] = flatItem;
      $tableFlatDataStore = $tableFlatDataStore;
      // Update full store...
      $tableFullDataStore[rowIdx] = fullItem;
      $tableFullDataStore = $tableFullDataStore;
      // Handle any server-synchronization.
      triggerChange();
    }
  }
</script>

<div
  class={classNames(className, styles.EditableTable)}
  data-layout={layout}
  data-id={id}
  title={spec.title}
>
  {#if spec.label}
    <div class={styles.EditableTable_Label}>
      {spec.label}
    </div>
  {/if}
  <table
    {...$tableAttrs}
    class={classNames(styles.EditableTable_Table, activeRows && styles.activeRows)}
  >
    <thead>
      {#each $headerRows as headerRow (headerRow.id)}
        <Subscribe attrs={headerRow.attrs()} let:attrs>
          <tr {...attrs}>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <th {...attrs} id={cell.id}>
                  <Render of={cell.render()} />
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
          <tr {...attrs} id={row.id} on:click={onRowClick}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <td {...attrs} id={cell.id}>
                  <Render of={cell.render()} />
                </td>
              </Subscribe>
            {/each}
          </tr>
        </Subscribe>
      {/each}
    </tbody>
  </table>
  <Modal opened={modalOpened} on:close={stopEditRowData} title="Edit data row">
    {#if activeRows && modalOpened && $selectedRow != null}
      <EditRowForm
        data={$tableFullDataStore[$selectedRow]}
        spec={spec.spec}
        onChange={handleRowDataChange}
      />
    {/if}
  </Modal>
</div>
