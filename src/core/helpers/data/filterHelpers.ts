import { TGenericEditableSpec } from '@/src/core/types/editable';
import { useSelectFilterForColumns } from '@/src/core/constants/rando';

type TFilterMatcherDefaultType = string | number;
interface TFilterMatcherParams<T = TFilterMatcherDefaultType> {
  filterValue: T;
  value: T;
}

export const textContainsFilter = <T = TFilterMatcherDefaultType>(
  spec: TGenericEditableSpec,
  { filterValue, value }: TFilterMatcherParams<T>,
) => {
  const { id } = spec;
  const useStrictComparsion = useSelectFilterForColumns.includes(id);
  /* console.log('[filterHelpers:textContainsFilter]', type, id, {
   *   useStrictComparsion,
   *   type,
   *   id,
   *   spec,
   *   filterValue,
   *   value,
   * });
   */
  if (value === '' || value == null) {
    return false;
  }
  if (filterValue === '') {
    return true;
  }
  if (Array.isArray(value)) {
    return value.includes(filterValue);
  }
  if (useStrictComparsion) {
    return value === filterValue;
  }
  const cmpFilterValue = String(filterValue).toLowerCase();
  return String(value).toLowerCase().includes(cmpFilterValue);
};
