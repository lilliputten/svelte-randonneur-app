export const editableValueTypes = [
  // prettier-ignore
  'string',
  'number',
  'boolean',
] as const;
export type TEditableValueType = (typeof editableValueTypes)[number];
export type TEditableValuesListType = TEditableValueType[];

export const defaultEditableValueType: TEditableValueType = editableValueTypes[0];

export interface TEditableFieldSpec {
  type: TEditableValueType;
  // isList?: boolean; // ??? To make list of values (TODO?)
  // validValues?: TEditableValuesListType; // ???
  /** Text label used in ui input elements only */
  label?: string;
}

export type TEditableValueScalar = string | number | boolean | undefined;
export type TEditableValue = TEditableValueScalar | TEditableValueScalar[];
