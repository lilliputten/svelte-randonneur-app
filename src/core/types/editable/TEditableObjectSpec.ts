import { TDisplayLayout } from './TDisplayLayout';
import { TGenericEditableData, TGenericEditableSpec } from './TGenericEditableSpec';

export interface TEditableObjectSpec {
  id: string;
  type: 'object'; // | 'list';
  title?: string;
  label?: string; // ???
  layout?: TDisplayLayout;
  /** Object fields specs list */
  spec: TGenericEditableSpec[];
}

export type TEditableObjectData = Record<string, unknown>;
// export type TEditableObjectData = Record<string, TGenericEditableData>; // Error: Circular reference
