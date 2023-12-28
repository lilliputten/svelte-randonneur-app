import { get, writable } from 'svelte/store';

import { TRandoData } from '@/src/core/types/randonneur';

export const randoDataStore = writable<TRandoData | undefined>(undefined);

export function setRandonneurData(data: TRandoData | undefined) {
  // TODO: Split full dataset to specific parts
  randoDataStore.set(data);
}

export function clearRandonneurData() {
  randoDataStore.set(undefined);
}

export function getRandonneurData() {
  return get(randoDataStore);
}
