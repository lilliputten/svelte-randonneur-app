import { TDataSetDictItemValue, TDataSetDictSlot } from '@/src/core/types/rando';
import {
  scalarValueTypes,
  TEditableFieldSpec,
  TEditableListSpec,
  TEditableObjectSpec,
  TGenericEditableSpec,
  // TScalarValue,
  TScalarValueType,
} from '@/src/core/types/editable';
import { isScalarType } from '@/src/components/data/EditableTable/EditableTableHelpers';

/* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
 * [>* Default minimal different values in the list to treat it as a dictionary <]
 * const defaultMaxDictListSize = 10;
 */

export interface TDeriveOpts {
  maxDictListSize?: number;
}

export function deriveObjectPropertiesSpec(
  _objId: string,
  data: TDataSetDictSlot,
  opts?: TDeriveOpts,
  level: number = 0,
) {
  const spec: TGenericEditableSpec[] = [];
  if (data == null || typeof data !== 'object') {
    return spec;
  }
  const ids = Object.keys(data);
  const objSpec = ids.map((id) => {
    const val: TDataSetDictItemValue = data[id];
    const itemSpec = deriveDataSetSpec(id, val as TDataSetDictSlot, opts, level + 1);
    return itemSpec;
  });
  /* console.log('[deriveDataSetSpec:deriveObjectPropertiesSpec]', {
   *   objSpec,
   *   ids,
   *   _objId,
   *   data,
   *   level,
   * });
   */
  return objSpec;
}

function getNewValWithOldVal(
  newVal: TDataSetDictItemValue,
  oldVal: TDataSetDictItemValue,
): TDataSetDictItemValue {
  if (newVal == null || oldVal == null) {
    return newVal;
  } else if (typeof newVal === 'object') {
    if (typeof oldVal === 'object') {
      return { ...newVal, ...oldVal };
    } else if (Array.isArray(newVal) && Array.isArray(oldVal)) {
      return newVal.concat(oldVal);
    } else {
      return newVal;
    }
  } else if (scalarValueTypes.includes(typeof newVal as TScalarValueType)) {
    if (typeof oldVal !== 'string') {
      return newVal;
    }
  } else {
    return undefined;
  }
}

export function deriveListItemSpec(
  listId: string,
  list: TDataSetDictSlot[],
  opts?: TDeriveOpts,
  level: number = 0,
): TGenericEditableSpec {
  const combo: TDataSetDictSlot = {};
  let value: TDataSetDictItemValue;
  /* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
   * const allValues: TScalarValue[] = [];
   */
  /* console.log('[deriveDataSetSpec:deriveListItemSpec] start', {
   *   listId,
   *   list,
   *   level,
   * });
   */
  list.forEach((data) => {
    if (!data) {
      return;
    }
    if (typeof data !== 'object') {
      /* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
       * if (data != null && !allValues.includes(data)) {
       *   allValues.push(data);
       * }
       */
      value = getNewValWithOldVal(data, value);
      /* console.log('[deriveDataSetSpec:deriveListItemSpec] list item: scalar', {
       *   value,
       *   data,
       *   listId,
       *   list,
       *   level,
       * });
       */
    } else {
      const ids = Object.keys(data);
      /* console.log('[deriveDataSetSpec:deriveListItemSpec] list item: object', {
       *   ids,
       *   data,
       *   listId,
       *   list,
       *   level,
       * });
       */
      ids.forEach((id) => {
        const oldVal = combo[id];
        const newVal = data[id];
        /* console.log('[deriveDataSetSpec:deriveListItemSpec] list ids item', {
         *   newVal,
         *   oldVal,
         *   id,
         *   ids,
         *   data,
         *   listId,
         *   list,
         *   level,
         *   combo,
         * });
         */
        combo[id] = getNewValWithOldVal(newVal, oldVal);
      });
    }
  });
  let result: TGenericEditableSpec;
  if (combo && Object.keys(combo).length) {
    const listObjItemsSpecs = deriveObjectPropertiesSpec(listId, combo, opts, level);
    const objSpec: TEditableObjectSpec = {
      id: listId + '-object',
      type: 'object',
      spec: listObjItemsSpecs,
    };
    result = objSpec;
  } else {
    const scalarSpec: TEditableFieldSpec = createScalarSpec(listId, value);
    /* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
     * const allValuesCount = allValues.length;
     * scalarSpec._allValuesCount = allValuesCount;
     * const maxDictListSize = opts?.maxDictListSize || defaultMaxDictListSize;
     * if (allValuesCount <= maxDictListSize) {
     *   scalarSpec._allValues = allValues;
     * }
     */
    result = scalarSpec;
  }
  return result;
}

function createScalarSpec(id: string, value: TDataSetDictItemValue) {
  const dataType = typeof value;
  const type = isScalarType(dataType) ? (dataType as TScalarValueType) : 'string';
  const scalarSpec: TEditableFieldSpec = {
    id,
    type,
  };
  return scalarSpec;
}

export function deriveDataSetSpec(
  id: string,
  data: TDataSetDictSlot,
  opts?: TDeriveOpts,
  level: number = 0,
): TGenericEditableSpec {
  /* console.log('[deriveDataSetSpec:deriveDataSetSpec]', {
   *   data,
   * });
   */
  if (data != null && Array.isArray(data)) {
    const listItemSpec = deriveListItemSpec(id, data, opts, level + 1);
    const listSpec: TEditableListSpec = {
      id: id + '-list',
      type: 'list',
      spec: listItemSpec,
    };
    return listSpec;
  } else if (typeof data === 'object') {
    const spec = deriveObjectPropertiesSpec(id, data, opts, level + 1);
    const objSpec: TEditableObjectSpec = {
      id,
      type: 'object',
      spec,
    };
    return objSpec;
  }
  // Scalar...
  const scalarSpec = createScalarSpec(id, data);
  return scalarSpec;
}
