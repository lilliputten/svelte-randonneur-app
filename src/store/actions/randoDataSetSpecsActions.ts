import { randoDataSetKeys, TDataSetDictSlot, TRandoDataSetKey } from '@/src/core/types/rando';
import { get } from 'svelte/store';

import { TEditableObjectSpec } from '@/src/core/types/editable';
import { deriveDataSetSpec } from '@/src/core/helpers/rando';

import { randoDataStore } from '../stores/randoDataStore';
import { randoDataSetSpecsStores } from '../stores/randoDataSetSpecsStore';

/** Derive data typings for the specific data set from the provided data object... */
export function createRandoDataSetSpec(id: TRandoDataSetKey, data: TDataSetDictSlot) {
  const setStore = randoDataSetSpecsStores[id];
  if (!data) {
    setStore.set(undefined);
    return;
  }
  const spec = deriveDataSetSpec(id, data) as TEditableObjectSpec; // TEditableObjectSpec | TEditableListSpec | TEditableFieldSpec;
  console.log('[randoDataSetSpecsActions:createRandoDataSetSpec]', {
    id,
    data,
    spec,
  });
  // TODO: Tune-up just created dataset (fix top-level list types, add titles, etc...)
  setStore.set(spec);
}

/** Derive data typings for all the data sets... */
export function createAllRandoDataSetSpecs() {
  const randoData = get(randoDataStore);
  randoDataSetKeys.forEach((id: TRandoDataSetKey) => {
    createRandoDataSetSpec(id, randoData?.[id]);
  });
}

export function clearAllRandoDataSetSpecs() {
  randoDataSetKeys.forEach((key) => {
    const setStore = randoDataSetSpecsStores[key];
    setStore.set(undefined);
  });
}
