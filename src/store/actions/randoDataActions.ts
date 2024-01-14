import { get } from 'svelte/store';

import { TRandoDataSlot } from '@/src/core/types/rando';
import { randoDataStore } from '../stores/randoDataStore';
import { setHasData } from '../stores/hasDataStore';
import { extractRandoDataSets } from './randoDataSetsActions';
import { extractRandoProperties } from './randoPropertiesActions';

export function setRandData(data: TRandoDataSlot) {
  // TODO: Split full dataset to specific parts
  randoDataStore.set(data);
  const hasData = !!data;
  /* console.log('[randoDataActions:setRandData]', {
   *   data,
   *   hasData,
   * });
   */
  extractRandoDataSets();
  extractRandoProperties();
  setHasData(hasData);
}

export function clearRandoData() {
  setRandData(undefined);
}

export function getRandoData() {
  return get(randoDataStore);
}
