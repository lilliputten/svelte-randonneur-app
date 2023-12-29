import { get, writable } from 'svelte/store';

import { TRandoDataSlot } from '@/src/core/types/rando';

export const randoDataStore = writable<TRandoDataSlot>(undefined);

export function setRandData(data: TRandoDataSlot) {
  // TODO: Split full dataset to specific parts
  randoDataStore.set(data);
}

export function clearRandoData() {
  setRandData(undefined);
}

export function getRandoData() {
  return get(randoDataStore);
}
