import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableSpec } from './TGenericEditableSpec';

export interface TEditableObjectSpec {
  id: string;
  type: 'object';
  title?: string;
  label?: string;
  layout?: TDisplayLayout;
  /** Object fields specs list */
  spec: TGenericEditableSpec[];
}

export type TEditableObjectData = Record<string, unknown>;
