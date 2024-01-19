import { Writable, writable } from 'svelte/store';

import { TRandoDataSetKey } from '@/src/core/types/rando';
import { TEditableObjectSpec } from '@/src/core/types/editable';

export type TRandoDataSetSpec = TEditableObjectSpec;
export type TRandoDataSetSpecSlot = TRandoDataSetSpec | undefined;

// TODO:
// - Initialize stores using `randoDataSetKeys`
// - Use properties as a regular data set too?

export const createDatasetsSpecStore = writable<TRandoDataSetSpecSlot>(undefined);
export const deleteSpecStore = writable<TRandoDataSetSpecSlot>(undefined);
export const disaggregateSpecStore = writable<TRandoDataSetSpecSlot>(undefined);
export const mappingSpecStore = writable<TRandoDataSetSpecSlot>(undefined);
export const replaceSpecStore = writable<TRandoDataSetSpecSlot>(undefined);
export const updateSpecStore = writable<TRandoDataSetSpecSlot>(undefined);

export const randoDataSetSpecsStores: Record<TRandoDataSetKey, Writable<TRandoDataSetSpecSlot>> = {
  'create-datasets': createDatasetsSpecStore,
  delete: deleteSpecStore,
  disaggregate: disaggregateSpecStore,
  mapping: mappingSpecStore,
  replace: replaceSpecStore,
  update: updateSpecStore,
};
