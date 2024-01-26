import { Readable, Writable } from 'svelte/store';
import { ReadOrWritable } from 'svelte-headless-table/lib/utils/store';

import { TEditableObjectData, TFilterItem } from '@/src/core/types/editable';

export interface TFilterParams {
  id: string;
  filter: TFilterItem;
  filterValue: Writable<string>;
  values: Readable<string[]>;
  data: ReadOrWritable<TEditableObjectData[]>;
}
export type TOpenFilterCallback = (filterParams: TFilterParams) => void;
