import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableSpec } from './TGenericEditableSpec';

export interface TEditableObjectSpec {
  id: string;
  type: 'object';
  title?: string;
  label?: string;
  layout?: TDisplayLayout;
  /** Object fields specs list */
  spec: TGenericEditableSpec | TGenericEditableSpec[];
  /** Internal id for flatterned fields, see `flatObjects` in tables */
  _flatId?: string;
  /** DEBUG: Full id for debug purposes */
  _fullId?: string;
  /** DEBUG: Object level for debug purposes */
  _level?: number;
}

export type TEditableObjectData = Record<string, unknown>;
