import { TRandoDataSets, randoDataSetKeys, TRandoData } from '@/src/core/types/rando';
import { get } from 'svelte/store';

import { getRandoData, randoDataStore } from '../stores/randoDataStore';
import { randoDataSetsStores } from '../stores/randoDataSetsStore';

/** Extract randoneeur data sets from common data store */
export function extractRandoDataSets() {
  const randoData = getRandoData();
  randoDataSetKeys.forEach((key) => {
    const setStore = randoDataSetsStores[key];
    const setValue = randoData?.[key];
    setStore.set(setValue);
  });
}

/** Save randoneeur data sets to common data store */
export function saveRandoDataSets() {
  const updateSets = randoDataSetKeys.reduce((updateSets, key) => {
    const setStore = randoDataSetsStores[key];
    const setValue = get(setStore);
    updateSets[key] = setValue;
    return updateSets;
  }, {} as TRandoDataSets);
  randoDataStore.update((randoData) => {
    return {
      ...randoData,
      ...updateSets,
    } as TRandoData;
  });
}
