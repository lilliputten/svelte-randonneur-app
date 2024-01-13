/** Scalar values list */
export const scalarValueTypes = [
  // prettier-ignore
  'string',
  'number',
  'boolean',
  'select',
] as const;
export type TScalarValueType = (typeof scalarValueTypes)[number];
export type TScalarValuesListType = TScalarValueType[];

export const defaultScalarValueType: TScalarValueType = scalarValueTypes[0];

// ???
export type TAnyEditableValue = unknown | undefined;
