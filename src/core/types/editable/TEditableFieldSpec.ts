import { SelectItem } from '@svelteuidev/core';
import { TAnyEditableValue, TScalarValueType } from './TEditableValue';

export interface TEditableFieldSpec {
  id: string;
  /** Internal id for flatterned fields, see `flatObjects` in tables */
  _flatId?: string;
  type: TScalarValueType;
  label?: string;
  title?: string;
  /** Optional list of options for `select` field type */
  selectData?: (string | SelectItem)[];
  // isList?: boolean; // ??? To make list of values (TODO?)
  // validValues?: TScalarValuesListType; // ???
  /** Text label used in ui input elements only */
}

export type TEditableFieldData = TAnyEditableValue;
