type TFilterMatcherDefaultType = string | number;
interface TFilterMatcherParams<T = TFilterMatcherDefaultType> {
  filterValue: T;
  value: T;
}

export const textContainsFilter = <T = TFilterMatcherDefaultType>({
  filterValue,
  value,
}: TFilterMatcherParams<T>) => {
  if (filterValue === '') {
    return true;
  }
  return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
};
