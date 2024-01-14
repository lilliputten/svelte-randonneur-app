import { TDataSetDictItemValue, TDataSetDictSlot } from '@/src/core/types/rando';
import {
  TEditableFieldSpec,
  TEditableListSpec,
  TEditableObjectSpec,
  TGenericEditableSpec,
  TScalarValueType,
} from '@/src/core/types/editable';
import { isScalarType } from '@/src/components/data/EditableTable/EditableTableHelpers';

export function deriveObjectPropertiesSpec(data: TDataSetDictSlot, level: number = 0) {
  const spec: TGenericEditableSpec[] = [];
  if (data == null || typeof data !== 'object') {
    return spec;
  }
  const ids = Object.keys(data);
  return ids.map((id) => {
    const val: TDataSetDictItemValue = data[id];
    return deriveDataSetSpec(id, val as TDataSetDictSlot, level + 1);
  });
}

export function deriveListPropertiesSpec(list: TDataSetDictSlot[], level: number = 0) {
  const spec: TGenericEditableSpec[] = [];
  if (list == null || !Array.isArray(list)) {
    return spec;
  }
  const ids = Object.keys(data);
  return ids.map((id) => {
    const val: TDataSetDictItemValue = data[id];
    return deriveDataSetSpec(id, val as TDataSetDictSlot, level + 1);
  });
}

export function deriveDataSetSpec(
  id: string,
  data: TDataSetDictSlot,
  level: number = 0,
): TGenericEditableSpec {
  const dataType = typeof data;
  // const isUndef = data == null;
  const isJsObj = dataType === 'object';
  const isList = isJsObj && Array.isArray(data);
  const isObject = isJsObj && !isList;
  const spec: TGenericEditableSpec[] = [];
  console.log('[deriveDataSetSpec:deriveDataSetSpec]', {
    data,
    dataType,
    spec,
  });
  debugger;
  if (isObject) {
    const spec = deriveObjectPropertiesSpec(data, level + 1);
    const objSpec: TEditableObjectSpec = {
      id,
      type: 'object',
      spec,
    };
    return objSpec;
  }
  if (isList) {
    const spec = deriveListPropertiesSpec(data, level + 1);
    const listSpec: TEditableListSpec = {
      id,
      type: 'list',
      spec,
    };
    return listSpec;
  }
  // Scalar...
  const type = isScalarType(dataType) ? (dataType as TScalarValueType) : 'string';
  const scalarSpec: TEditableFieldSpec = {
    id,
    type,
  };
  return scalarSpec;
}
