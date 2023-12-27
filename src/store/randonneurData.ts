import { get, writable } from 'svelte/store';

import { TRandonneurData } from '@/src/core/types/randonneur';

export const randonneurData = writable<TRandonneurData | undefined>(undefined);

export function setRandonneurData(val: TRandonneurData) {
  // TODO: Split full dataset to specific parts
  randonneurData.set(val);
}

export function clearRandonneurData() {
  randonneurData.set(undefined);
}

export function getRandonneurData() {
  return get(randonneurData);
}
