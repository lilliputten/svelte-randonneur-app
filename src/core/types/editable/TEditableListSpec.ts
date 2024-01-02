import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableData, TGenericEditableSpec } from './TGenericEditableSpec';

export interface TEditableListSpec {
  id: string;
  type: 'list';
  title?: string;
  label?: string; // ???
  layout?: TDisplayLayout;
  /** List items spec */
  spec: TGenericEditableSpec;
}

export type TEditableListData = unknown[];
// export type TEditableListData = TGenericEditableData[];
