import { TEditableObjectData, TEditableObjectSpec } from './TEditableObjectSpec';
import { TEditableFieldData, TEditableFieldSpec } from './TEditableFieldSpec';
import { TEditableListData, TEditableListSpec } from './TEditableListSpec';

/** Generic editable
 * The key to determine specific kind of object is 'type' property:
 * - 'object' is for `TEditableObjectSpec`;
 * - 'list' is for `TEditableListSpec`;
 * - other ('string', 'number', 'boolean', 'select') is for `TEditableFieldSpec` (see `TEditableValue`).
 */
export type TGenericEditableSpec = TEditableObjectSpec | TEditableListSpec | TEditableFieldSpec;

export type TGenericEditableData = TEditableObjectData | TEditableListData | TEditableFieldData;
