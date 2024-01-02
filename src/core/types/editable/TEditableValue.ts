export const editableValueTypes = [
  // prettier-ignore
  'string',
  'number',
  'boolean',
  'select',
] as const;
export type TEditableValueType = (typeof editableValueTypes)[number];
export type TEditableValuesListType = TEditableValueType[];

export const defaultEditableValueType: TEditableValueType = editableValueTypes[0];

export type TEditableValueScalar = unknown | undefined;
// export type TEditableValueScalar = string | number | boolean | undefined;
// export type TEditableValue = TEditableValueScalar | TEditableValueScalar[];
