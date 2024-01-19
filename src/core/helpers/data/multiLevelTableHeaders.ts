import { makeTitleFromPropertyId } from '@/src/core/helpers/data';
import { TGenericEditableSpec, TEditableObjectData } from '@/src/core/types/editable';
import { DataLabel, Table } from 'svelte-headless-table';

export interface TCreateMultiLevelTableHeadersOpts {
  /** Show only specified column (by flatId) */
  showFlatFields?: string[];
  /** Collect item specs into the plain hash */
  colSpecsHash?: Record<string, TGenericEditableSpec>;
  EditableCell: DataLabel<TEditableObjectData>;
  table: Table<TEditableObjectData>;
}

export function createMultiLevelTableColumns(
  colSpecs: TGenericEditableSpec[],
  opts: TCreateMultiLevelTableHeadersOpts,
  parentId: string = '',
) {
  const { table, EditableCell } = opts;
  const resultSpecs = [];
  for (const item of colSpecs) {
    const flatId = [parentId, item.id].filter(Boolean).join('.');
    const title = item.title || item.label || makeTitleFromPropertyId(item.id);
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
      const col = table.column({
        id: flatId,
        accessor: flatId, // item.id,
        header: title,
        cell: EditableCell,
      });
      /* console.log('[multiLevelTableHeaders:createMultiLevelTableColumns] item', flatId, {
       *   flatId,
       *   col,
       *   item,
       * });
       */
      resultSpecs.push(col);
    }
  }
  return resultSpecs;
}
