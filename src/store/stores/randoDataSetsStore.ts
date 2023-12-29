import { Writable, writable } from 'svelte/store';

import { TDataSetDictSlot, TRandoDataSetKey } from '@/src/core/types/rando';

// TODO:
// - Initialize stores using `randoDataSetKeys`
// - Use properties as a regular data set too?

export const createDatasetsSetStore = writable<TDataSetDictSlot>(undefined);
export const deleteSetStore = writable<TDataSetDictSlot>(undefined);
export const disaggregateSetStore = writable<TDataSetDictSlot>(undefined);
export const mappingSetStore = writable<TDataSetDictSlot>(undefined);
export const replaceSetStore = writable<TDataSetDictSlot>(undefined);
export const updateSetStore = writable<TDataSetDictSlot>(undefined);

export const randoDataSetsStores: Record<TRandoDataSetKey, Writable<TDataSetDictSlot>> = {
  'create-datasets': createDatasetsSetStore,
  delete: deleteSetStore,
  disaggregate: disaggregateSetStore,
  mapping: mappingSetStore,
  replace: replaceSetStore,
  update: updateSetStore,
};
