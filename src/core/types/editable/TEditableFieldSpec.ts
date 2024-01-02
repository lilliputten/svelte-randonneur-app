import { SelectItem } from '@svelteuidev/core';
import { TEditableValueType } from './TEditableValue';

export interface TEditableFieldSpec {
  id: string;
  type: TEditableValueType;
  label?: string;
  title?: string;
  selectData?: (string | SelectItem)[];
  // isList?: boolean; // ??? To make list of values (TODO?)
  // validValues?: TEditableValuesListType; // ???
  /** Text label used in ui input elements only */
}
