import {
  TRandoDataSets,
  randoDataSetKeys,
  TRandoData,
  TRandoDataSetKey,
} from '@/src/core/types/rando';
import { get } from 'svelte/store';

import { randoDataStore } from '../stores/randoDataStore';
import { randoDataSetsStores } from '../stores/randoDataSetsStore';
import { clearAllRandoDataSetSpecs, createRandoDataSetSpec } from './randoDataSetSpecsActions';

// Issue #5: Derive data typings for all the data sets...

/** Extract randoneeur data sets from common data store */
export function extractRandoDataSets() {
  const randoData = get(randoDataStore);
  randoDataSetKeys.forEach((id: TRandoDataSetKey) => {
    const setStore = randoDataSetsStores[id];
    const data = randoData?.[id];
    setStore.set(data);
    createRandoDataSetSpec(id, data);
  });
}

export function clearRandoDataSets() {
  randoDataSetKeys.forEach((id: TRandoDataSetKey) => {
    const setStore = randoDataSetsStores[id];
    setStore.set(undefined);
  });
  clearAllRandoDataSetSpecs();
}

/** Save randoneeur data sets back to common data store */
export function saveRandoDataSets() {
  const updateSets = randoDataSetKeys.reduce((updateSets, id: TRandoDataSetKey) => {
    const setStore = randoDataSetsStores[id];
    const data = get(setStore);
    updateSets[id] = data;
    return updateSets;
  }, {} as TRandoDataSets);
  randoDataStore.update((randoData) => {
    return {
      ...randoData,
      ...updateSets,
    } as TRandoData;
  });
}

export function getAvailableRandoDataSetKeys(): TRandoDataSetKey[] {
  return randoDataSetKeys
    .map((id: TRandoDataSetKey) => {
      const setStore = randoDataSetsStores[id];
      const data = get(setStore);
      return data && id;
    })
    .filter(Boolean) as TRandoDataSetKey[];
}

export function getAllRandoDataSets() {
  return randoDataSetKeys.map((id: TRandoDataSetKey) => {
    const setStore = randoDataSetsStores[id];
    return get(setStore);
  });
}
