import {
  TEditableListSpec,
  // TEditableListData,
  // TGenericEditableData,
  TGenericEditableSpec,
  TEditableObjectData,
  TEditableObjectSpec,
  TEditableFieldSpec,
  TScalarValueType,
  scalarValueTypes,
} from '@/src/core/types/editable';

export function isScalarType(type: string): boolean {
  return scalarValueTypes.includes(type as TScalarValueType);
}

export function isScalarSpec(spec: TGenericEditableSpec): boolean {
  const { type } = spec;
  return isScalarType(type);
}

/** Create flat data object from real row data */
export function makeFlatFromFullData(
  data: TEditableObjectData,
  parentId: string = '',
): TEditableObjectData {
  let resultData: TEditableObjectData = {};
  const keys = Object.keys(data);
  for (const id of keys) {
    const flatId = [parentId, id].filter(Boolean).join('.');
    const val = data[id];
    if (val && typeof val === 'object') {
      const flatData = makeFlatFromFullData(val as TEditableObjectData, flatId);
      resultData = { ...resultData, ...flatData };
    } else {
      resultData[flatId] = val;
    }
  }
  return resultData;
}

/** Restore full data object from previously flatterned via `makeFlatFromFullData` */
export function restoreFullFromFlatData(flatData: TEditableObjectData): TEditableObjectData {
  const resultData: TEditableObjectData = {};
  const keys = Object.keys(flatData);
  for (const flatId of keys) {
    const val = flatData[flatId];
    if (flatId.includes('.')) {
      const ids = flatId.split('.');
      let obj = resultData;
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const isLast = i === ids.length - 1;
        if (isLast) {
          obj[id] = val;
          continue;
        }
        if (!obj[id] || typeof obj[id] !== 'object') {
          // Create next nested object...
          obj[id] = {} as TEditableObjectData;
        }
        // Go to the next (ensured) level...
        obj = obj[id] as TEditableObjectData;
        // Check if `obj` is object
        if (typeof obj !== 'object') {
          // prettier-ignore
          const error = new Error('Nested chain for id "' + id + '" (from the flat id: "' + flatId + '") should be an object, but it is "' + typeof obj + '".');
          // eslint-disable-next-line no-console
          console.error('[EditableTableHelpers:restoreFullFromFlatData]', error.message, {
            error,
            flatData,
            flatId,
            val,
            keys,
            id,
          });
          // eslint-disable-next-line no-debugger
          debugger;
        }
      }
    } else {
      resultData[flatId] = val;
    }
  }
  return resultData;
}

export function getFlatItemId(spec: TGenericEditableSpec): string {
  const { id, _flatId } = spec as TEditableFieldSpec;
  const flatId = _flatId || id;
  return flatId;
}

function makeSpecsFlat(
  colSpecs: TGenericEditableSpec[],
  showFlatFields?: string[],
  parentId: string = '',
): TGenericEditableSpec[] {
  const resultSpecs: TGenericEditableSpec[] = [];
  for (const item of colSpecs) {
    const flatId = [parentId, item.id].filter(Boolean).join('.');
    // TODO: Process here 'exclude' lists, including intermediate object' names?
    if (item.type === 'object') {
      const flatItems = makeSpecsFlat(item.spec, showFlatFields, flatId);
      /* console.log('[EditableTableHelpers:makeSpecsFlat] created sublist', flatId, {
       *   parentId,
       *   flatId,
       *   flatItems,
       * });
       */
      // Don't do nothing with an empty lists...
      if (!Array.isArray(flatItems) || !flatItems.length) {
        continue;
      }
      Array.prototype.push.apply(resultSpecs, flatItems);
    } else {
      // Omit field if not specified in the list to show...
      if (showFlatFields && !showFlatFields.includes(flatId)) {
        continue;
      }
      const flatItem = { ...item, _flatId: flatId };
      /* console.log('[EditableTableHelpers:makeSpecsFlat] created sublist', flatId, {
       *   flatId,
       *   flatItem,
       *   item,
       * });
       */
      resultSpecs.push(flatItem);
    }
  }
  return resultSpecs;
}

export function getPlainTableColSpecs(
  spec: TEditableListSpec,
  showFlatFields?: string[],
): TGenericEditableSpec[] {
  const { flatObjects } = spec;
  /** Row specification */
  const rowObjSpec = spec.spec as TEditableObjectSpec;
  /** Row item specifications */
  const colSpecs = rowObjSpec.spec;
  if (!flatObjects) {
    return colSpecs;
  }
  const flatSpecs = makeSpecsFlat(colSpecs, showFlatFields);
  /* console.log('[EditableTableHelpers:getPlainTableColSpecs]', {
   *   flatSpecs,
   *   rowObjSpec,
   *   colSpecs,
   *   flatObjects,
   *   spec,
   * });
   */
  return flatSpecs;
}