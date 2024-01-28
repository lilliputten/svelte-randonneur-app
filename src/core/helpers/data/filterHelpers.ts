type TFilterMatcherDefaultType = string | number;
interface TFilterMatcherParams<T = TFilterMatcherDefaultType> {
  filterValue: T;
  value: T;
}

export const textContainsFilter = <T = TFilterMatcherDefaultType>({
  filterValue,
  value,
}: TFilterMatcherParams<T>) => {
  if (value === '' || value == null) {
    return false;
  }
  if (filterValue === '') {
    return true;
  }
  if (Array.isArray(value)) {
    return value.includes(filterValue);
  }
  const cmpFilterValue = String(filterValue).toLowerCase();
  return String(value).toLowerCase().includes(cmpFilterValue);
};
