// import { get } from 'svelte/store';
import { DataLabel, Table, createRender, HeaderLabel } from 'svelte-headless-table';
import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';
import {
  // AnyPlugins, // TODO: To use for correct typisation of `TCreateMultiLevelTableHeadersOpts.table` (below; not such specific as now)
  AnyTableAttributeSet,
  NewTablePropSet,
  TablePlugin,
} from 'svelte-headless-table/lib/types/TablePlugin';
import {
  ColumnFiltersState,
  ColumnFiltersColumnOptions,
  ColumnFiltersPropSet,
} from 'svelte-headless-table/lib/plugins/addColumnFilters';

import { makeTitleFromPropertyId, textContainsFilter } from '@/src/core/helpers/data';
import {
  TGenericEditableSpec,
  TEditableObjectData,
  TEditableListSpec,
} from '@/src/core/types/editable';
import { ensureArray } from '@/src/core/helpers/basic';

// import { isDev } from '@/src/core/constants/app';

import { GenericFilterControl } from '@/src/components/data/GenericFilterControl';
import { TOpenFilterCallback } from '@/src/core/types/editable';

/* // DEBUG: Expose svelte's `get` for debug purposes...
 * if (isDev && typeof window === 'object') {
 *   // @ts-expect-error: Expose get for debug purposes
 *   window._svelteGet = get;
 * }
 */

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
  onOpenFilter: TOpenFilterCallback;
}

export function createMultiLevelTableColumns(
  colSpecs: TGenericEditableSpec[],
  opts: TCreateMultiLevelTableHeadersOpts,
  parentId: string = '',
) {
  const { table, EditableCell, HeaderCell, listSpec, onOpenFilter } = opts;
  const resultSpecs = [];
  for (const item of colSpecs) {
    const flatId = [parentId, item.id].filter(Boolean).join('.');
    const title = item.title || item.label || makeTitleFromPropertyId(item.id);
    /* console.log('[multiLevelTable:createMultiLevelTableColumns] item', flatId, {
     *   flatId,
     *   title,
     *   item,
     *   listSpec,
     * });
     */
    // TODO: Process here 'exclude' lists, including intermediate object' names?
    if (item.type === 'object') {
      const subColumns = createMultiLevelTableColumns(ensureArray(item.spec), opts, flatId);
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
      /* console.log('[multiLevelTable:createMultiLevelTableColumns] sublist', flatId, {
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
      const __debugUseFilters = true;
      const filter = __debugUseFilters && listSpec.filters?.[flatId];
      let colFilter: ColumnFiltersColumnOptions<TEditableObjectData> | undefined;
      if (filter) {
        colFilter = {
          // fn: textPrefixFilter,
          fn: textContainsFilter.bind(null, item),
          render: (params) => {
            const {
              id, // "value"
              values, // {subscribe: ƒ}
              filterValue, // {subscribe: ƒ, set: ƒ, update: ƒ}
              data, // {set: ƒ, update: ƒ, subscribe: ƒ}
              // columns, // (2) [DataColumn, DataColumn]
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
            /* console.log('[multiLevelTable:createMultiLevelTableColumns:colFilter]', id, {
             *   id,
             *   values: get(values), // {subscribe: ƒ}
             *   filterValue: get(filterValue), // {subscribe: ƒ, set: ƒ, update: ƒ}
             *   params,
             *   // columns, // (2) [DataColumn, DataColumn]
             *   // data, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // flatColumns, // (2) [DataColumn, DataColumn]
             *   // headerRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // originalRows, // {subscribe: ƒ}
             *   // pageRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // preFilteredRows, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // preFilteredValues, // {subscribe: ƒ}
             *   // rows, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // tableAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // tableBodyAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // tableHeadAttrs, // {set: ƒ, update: ƒ, subscribe: ƒ}
             *   // visibleColumns, // {set: ƒ, update: ƒ, subscribe: ƒ}
             * });
             */
            // TODO: Use generic filter render. It should support inactive mode (button only), active mode with inputs for text search
            return createRender(GenericFilterControl, {
              id,
              filterValue,
              values,
              // colSpec: item,
              filter,
              data,
              onOpenFilter,
            });
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
      /* console.log('[multiLevelTable:createMultiLevelTableColumns] item', flatId, {
       *   flatId,
       *   col,
       *   item,
       *   filter,
       *   colFilter,
       * });
       */
      resultSpecs.push(col);
    }
  }
  return resultSpecs;
}
