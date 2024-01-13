import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableSpec } from './TGenericEditableSpec';

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
  /** Use 'table' to display as a table */
  layout?: TDisplayLayout | 'table';
  /** List items spec */
  spec: TGenericEditableSpec;
}

export type TEditableListData = unknown[];
