import { TDisplayLayout } from './TDisplayLayout';
import { TEditableFieldSpec } from './TEditableFieldSpec';
import { TEditableValueScalar } from './TEditableValue';

export interface TEditableObjectSpec {
  id: string;
  type: 'object';
  title?: string;
  label?: string; // ???
  layout?: TDisplayLayout;
  specs: (TEditableFieldSpec | TEditableObjectSpec)[];
}

// TODO: Create generic value type that can include nested objects

// export type TEditableObjectFlatValue = Record<string, TEditableValueScalar>;
export type TEditableObjectData = Record<string, unknown | TEditableValueScalar>;
