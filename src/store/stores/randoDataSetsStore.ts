import { Writable, writable } from 'svelte/store';

import { TDataSetDictSlot, TRandoDataSetKey, TRandoSectionId } from '@/src/core/types/rando';

// TODO:
// - Initialize stores using `randoDataSetKeys`
// - Use properties as a regular data set too?

/** All datasets */
export const createDatasetsSetStore = writable<TDataSetDictSlot>(undefined);
export const deleteSetStore = writable<TDataSetDictSlot>(undefined);
export const disaggregateSetStore = writable<TDataSetDictSlot>(undefined);
export const mappingSetStore = writable<TDataSetDictSlot>(undefined);
export const replaceSetStore = writable<TDataSetDictSlot>(undefined);
export const updateSetStore = writable<TDataSetDictSlot>(undefined);

/** All datasets hash (including empty ones) */
export const randoDataSetsStores: Record<TRandoDataSetKey, Writable<TDataSetDictSlot>> = {
  'create-datasets': createDatasetsSetStore,
  delete: deleteSetStore,
  disaggregate: disaggregateSetStore,
  mapping: mappingSetStore,
  replace: replaceSetStore,
  update: updateSetStore,
};

/** All available sections in the current dataset */
export const allSectionsStore = writable<TRandoSectionId[] | undefined>(undefined);

/** Saved section id key: Get section id from local storage */
const storageSectionIdKey = 'randoDataSetsStore:currentSectionId';
/** Previously saved section id */
const defaultSectionId: TRandoSectionId | undefined =
  (typeof localStorage !== 'undefined' &&
    (localStorage.getItem(storageSectionIdKey) as TRandoSectionId)) ||
  undefined;

/** Current section id */
export const currentSectionIdStore = writable<TRandoSectionId | undefined>(defaultSectionId);

/** Store section id to the local storage */
currentSectionIdStore.subscribe((sectionId) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(storageSectionIdKey, sectionId || '');
  }
});
