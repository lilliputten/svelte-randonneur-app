import { randoDataSetKeys, TDataSetDictSlot, TRandoDataSetKey } from '@/src/core/types/rando';
import { get } from 'svelte/store';

import { TEditableObjectSpec, TGenericEditableSpec } from '@/src/core/types/editable';
import { deriveDataSetSpec } from '@/src/core/helpers/rando';

import { randoDataStore } from '../stores/randoDataStore';
import { randoDataSetSpecsStores, TRandoDataSetSpecSlot } from '../stores/randoDataSetSpecsStore';

// Issue #5: Derive data typings for all the data sets...

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
  debugger; // TODO!
  setStore.set(spec);
}

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
