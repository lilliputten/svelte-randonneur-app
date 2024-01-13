import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableSpec } from './TGenericEditableSpec';

export interface TEditableListSpec {
  id: string;
  type: 'list';
  /** Show nested objects on the same level: as fielda in one row */
  flatObjects?: boolean;
  showFlatFields?: string[];
  editInPlace?: boolean;
  useActionsColumn?: boolean;
  hideRemoveButton?: boolean;
  // TODO: Displayed fiedls list
  title?: string;
  label?: string; // ???
  /** Use 'table' to display as a table */
  layout?: TDisplayLayout | 'table';
  /** List items spec */
  spec: TGenericEditableSpec;
}

export type TEditableListData = unknown[];
// export type TEditableListData = TGenericEditableData[];
