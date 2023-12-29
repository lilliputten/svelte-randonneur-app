import { writable } from 'svelte/store';

import { TRandoPropertiesSlot } from '@/src/core/types/rando';

export const randoPropertiesStore = writable<TRandoPropertiesSlot>(undefined);
