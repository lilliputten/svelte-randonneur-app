import { get } from 'svelte/store';
// import * as svelteStore from 'svelte/store';
import { DataLabel, Table, createRender, HeaderLabel } from 'svelte-headless-table';
import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';
import {
  // matchFilter,
  // numberRangeFilter,
  textPrefixFilter,
  // addColumnFilters,
  // addColumnOrder,
  // addHiddenColumns,
  // addSortBy,
  // addTableFilter,
  // addPagination,
  // addExpandedRows,
  // addSubRows,
  // addGroupBy,
  // addSelectedRows,
  // addResizedColumns,
} from 'svelte-headless-table/plugins';

import { makeTitleFromPropertyId } from '@/src/core/helpers/data';
import {
  TGenericEditableSpec,
  TEditableObjectData,
  TEditableListSpec,
} from '@/src/core/types/editable';
import {
  // AnyPlugins, // TODO: To use for correct typisation of `TCreateMultiLevelTableHeadersOpts.table` (below; not such specific as now)
  AnyTableAttributeSet,
  NewTablePropSet,
  TablePlugin,
} from 'svelte-headless-table/lib/types/TablePlugin';

import { isBrowser } from '@/src/core/constants/app';

import TextFilter from './TextFilter.svelte';
import {
  ColumnFiltersState,
  ColumnFiltersColumnOptions,
  ColumnFiltersPropSet,
} from 'svelte-headless-table/lib/plugins/addColumnFilters';

type TTable = Table<
  TEditableObjectData,
  {
    colFilter: TablePlugin<
      TEditableObjectData,
      ColumnFiltersState<TEditableObjectData>,
      ColumnFiltersColumnOptions<TEditableObjectData>,
      ColumnFiltersPropSet,
      AnyTableAttributeSet
    >;
    page: TablePlugin<
      TEditableObjectData,
      PaginationState,
      Record<string, never>,
      NewTablePropSet<never>,
      AnyTableAttributeSet
    >;
  }
>;
export interface TCreateMultiLevelTableHeadersOpts {
  /** Show only specified column (by flatId) */
  showFlatFields?: string[];
  /** Parent list spec */
  listSpec: TEditableListSpec;
  /** Collect item specs into the plain hash */
  colSpecsHash?: Record<string, TGenericEditableSpec>;
  EditableCell: DataLabel<TEditableObjectData>;
  HeaderCell?: HeaderLabel<TEditableObjectData>;
  table: TTable;
  /*
  table: Table<
    TEditableObjectData,
    {
      page: TablePlugin<
        unknown,
        PaginationState,
        Record<string, never>,
        NewTablePropSet<never>,
        AnyTableAttributeSet
      >;
    }
  >;
  >*/
}

export function createMultiLevelTableColumns(
  colSpecs: TGenericEditableSpec[],
  opts: TCreateMultiLevelTableHeadersOpts,
  parentId: string = '',
) {
  const { table, EditableCell, HeaderCell, listSpec } = opts;
  const resultSpecs = [];
  for (const item of colSpecs) {
    const flatId = [parentId, item.id].filter(Boolean).join('.');
    const title = item.title || item.label || makeTitleFromPropertyId(item.id);
    console.log('[multiLevelTableHeaders:createMultiLevelTableColumns] item', flatId, {
      flatId,
      title,
      item,
      listSpec,
    });
    // TODO: Process here 'exclude' lists, including intermediate object' names?
    if (item.type === 'object') {
      const subColumns = createMultiLevelTableColumns(item.spec, opts, flatId);
      // Don't do nothing with an empty lists...
      if (!Array.isArray(subColumns) || !subColumns.length) {
        continue;
      }
      // TODO: Create multi-level table headers based on this example
      // See Kitchen Sink example:
      // https://svelte-headless-table.bryanmylee.com/docs/examples/kitchen-sink
      // https://svelte.dev/repl/457c10b649cc4bc7a84f9511a81b5361?version=3.48.0
      // See table docs:
      // https://svelte-headless-table.bryanmylee.com/docs/api/create-columns
      const group = table.group({
        header: title,
        columns: subColumns,
      });
      /* console.log('[multiLevelTableHeaders:createMultiLevelTableColumns] sublist', flatId, {
       *   flatId,
       *   group,
       *   subColumns,
       *   item,
       * });
       */
      resultSpecs.push(group);
    } else {
      // Omit field if not specified in the list to show...
      if (opts.showFlatFields && !opts.showFlatFields.includes(flatId)) {
        continue;
      }
      // Save item spec to the plain hash...
      if (opts.colSpecsHash) {
        opts.colSpecsHash[flatId] = item;
      }
      const __debugUseFilters = true && isBrowser;
      const filter = __debugUseFilters && listSpec.filters?.[flatId];
      if (flatId.includes('test')) {
        // debugger;
      }
      let colFilter: ColumnFiltersColumnOptions<TEditableObjectData> | undefined;
      if (filter) {
        colFilter = {
          fn: textPrefixFilter,
          render: (params) => {
            const {
              id, // "value"
              values, // {subscribe: ƒ}
              filterValue, // {subscribe: ƒ, set: ƒ, update: ƒ}
              // columns, // (2) [DataColumn, DataColumn]
              // data, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // flatColumns, // (2) [DataColumn, DataColumn]
              // headerRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // originalRows, // {subscribe: ƒ}
              // pageRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // preFilteredRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // preFilteredValues, // {subscribe: ƒ}
              // rows, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // tableAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // tableBodyAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // tableHeadAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // visibleColumns, // {set: ƒ, update: ƒ, subscribe: ƒ}
            } = params;
            console.log('[multiLevelTableHeaders:createMultiLevelTableColumns:colFilter]', id, {
              id,
              values: get(values), // {subscribe: ƒ}
              filterValue: get(filterValue), // {subscribe: ƒ, set: ƒ, update: ƒ}
              params,
            });
            return createRender(TextFilter, { filterValue, values });
          },
        };
      }
      const col = table.column({
        id: flatId,
        accessor: flatId, // item.id,
        header: HeaderCell || title,
        cell: EditableCell,
        plugins: {
          colFilter,
        },
        // TODO: plugins: filter from listSpec...
      });
      console.log('[multiLevelTableHeaders:createMultiLevelTableColumns] item', flatId, {
        flatId,
        col,
        item,
        filter,
        colFilter,
      });
      resultSpecs.push(col);
    }
  }
  return resultSpecs;
}
