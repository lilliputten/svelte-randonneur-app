import { ensureArray } from '@/src/core/helpers/basic';
import { makeTitleFromPropertyId } from '@/src/core/helpers/data';
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
  const type = spec.type;
  return isScalarType(type);
}

/** Regex used to test iso dates
 * @see:
 * - [Date and Time Formats](https://www.w3.org/TR/NOTE-datetime)
 * - [4.7. Validate ISO 8601 Dates and Times - Regular Expressions Cookbook, 2nd Edition [Book]](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s07.html)
 * - [Regex to match an ISO 8601 datetime string - Stack Overflow](https://stackoverflow.com/questions/3143070/regex-to-match-an-iso-8601-datetime-string/3143231#3143231)
 * TODO: Move to constants?
 */
const isoDateRegex =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/;

/** Check for ISO date string, eg: 2023-12-22T01:23:45.67Z */
export function isDateType(value: unknown): boolean {
  if (typeof value !== 'string') {
    return false;
  }
  return isoDateRegex.test(value);
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
      if (Array.isArray(val)) {
        // TODO: What shall we do if here are nested objects?
        resultData[flatId] = [...val];
      } else {
        const flatData = makeFlatFromFullData(val as TEditableObjectData, flatId);
        resultData = { ...resultData, ...flatData };
      }
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

export function getFullItemId(spec: TGenericEditableSpec): string {
  const { id, _fullId } = spec as TEditableFieldSpec;
  const fullId = _fullId || id;
  return fullId;
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
      const flatItems = makeSpecsFlat(ensureArray(item.spec), showFlatFields, flatId);
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
  const colSpecs = ensureArray(rowObjSpec.spec);
  if (!flatObjects || !colSpecs) {
    return colSpecs;
  }
  const flatSpecs = makeSpecsFlat(colSpecs, showFlatFields);
  flatSpecs.forEach((subSpec) => {
    const { _flatId } = subSpec;
    if (_flatId?.includes('.')) {
      const hdrIds = _flatId?.split('.');
      const hdrTitles = hdrIds.map(makeTitleFromPropertyId);
      const hdrId = hdrIds.join('.');
      // @ts-expect-error: Store hidden values for local usage
      subSpec._hdrIds = hdrIds;
      // @ts-expect-error: Store hidden values for local usage
      subSpec._hdrTitles = hdrTitles;
      // @ts-expect-error: Store hidden values for local usage
      subSpec._hdrId = hdrId;
      // @ts-expect-error: Store hidden values for local usage
      subSpec._groupTitle = hdrTitles.join(' / ');
    }
  });
  /* console.log('[EditableTableHelpers:getPlainTableColSpecs]', {
   *   flatSpecs,
   *   colSpecs,
   *   // rowObjSpec,
   *   // flatObjects,
   *   // spec,
   * });
   */
  return flatSpecs;
}
