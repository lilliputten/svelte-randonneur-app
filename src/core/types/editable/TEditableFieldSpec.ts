import { SelectItem } from '@svelteuidev/core';
import { TEditableValueScalar, TEditableValueType } from './TEditableValue';

export interface TEditableFieldSpec {
  id: string;
  /** Internal id for flatterned fields, see `flatObjects` in tables */
  _flatId?: string;
  type: TEditableValueType;
  label?: string;
  title?: string;
  /** Optional list of options for `select` field type */
  selectData?: (string | SelectItem)[];
  // isList?: boolean; // ??? To make list of values (TODO?)
  // validValues?: TEditableValuesListType; // ???
  /** Text label used in ui input elements only */
}

export type TEditableFieldData = TEditableValueScalar;
