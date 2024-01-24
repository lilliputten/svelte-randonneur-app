import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableSpec } from './TGenericEditableSpec';

export type TFilterItem = true | 'select' | false | undefined;
export type TFiltersData = Record<string, TFilterItem>;

export interface TEditableListSpec {
  id: string;
  type: 'list';
  /** Show nested objects on the same level: as fielda in one row */
  flatObjects?: boolean;
  showFlatFields?: string[];
  /** Render input fields right inside the cells and allow to directly data edit */
  editInPlace?: boolean;
  /** Show action columns with 'add row', 'remove row' buttons */
  useActionsColumn?: boolean;
  hideRemoveButton?: boolean;
  /** Create rows clickable: data edit popup will apear on click. Should disable `editInPlace` parameter. */
  activeRows?: boolean;
  // TODO: Displayed fiedls list
  title?: string;
  label?: string; // ???
  /** Filter columns */
  filters?: TFiltersData;
  /** Use 'table' to display as a table */
  layout?: TDisplayLayout | 'table';
  /** List items spec */
  spec: TGenericEditableSpec;
  /** Internal id for flatterned fields, see `flatObjects` in tables */
  _flatId?: string;
  /** DEBUG: Full id for debug purposes */
  _fullId?: string;
  /** DEBUG: Object level for debug purposes */
  _level?: number;
}

export type TEditableListData = unknown[];
