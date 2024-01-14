import { SelectItem } from '@svelteuidev/core';
import { TAnyEditableValue, TScalarValueType } from './TEditableValue';

export interface TEditableFieldSpec {
  id: string;
  type: TScalarValueType;
  label?: string;
  title?: string;
  /** Internal id for flatterned fields, see `flatObjects` in tables */
  _flatId?: string;
  /* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
   * [>* Measured data variants count (from analyzed source) <]
   * _allValuesCount?: number;
   * [>* Measured data variants (from analyzed source) <]
   * _allValues?: TScalarValue[];
   */
  /** Optional list of options for `select` field type */
  selectData?: (string | SelectItem)[];
  // isList?: boolean; // ??? To make list of values (TODO?)
  // validValues?: TScalarValuesListType; // ???
  /** Text label used in ui input elements only */
}

export type TEditableFieldData = TAnyEditableValue;
