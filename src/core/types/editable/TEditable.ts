export const editableValueTypes = [
  // prettier-ignore
  'string',
  'boolean',
  'number',
] as const;
export type TEditableValueType = (typeof editableValueTypes)[number];
export type TEditableValuesListType = TEditableValueType[];

export const defaultEditableValueType: TEditableValueType = editableValueTypes[0];

export interface TEditableFieldSpec {
  type: TEditableValueType;
  list?: boolean;
  validValues?: TEditableValuesListType;
}
