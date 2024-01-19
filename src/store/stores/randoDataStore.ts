import { writable } from 'svelte/store';

import { TRandoDataSlot } from '@/src/core/types/rando';

export const randoDataStore = writable<TRandoDataSlot>(undefined);
