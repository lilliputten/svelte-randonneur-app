import { writable } from 'svelte/store';

import { TDataFileInfo } from '@/src/core/types/data';

export const randoFileInfoStore = writable<TDataFileInfo | undefined>(undefined);
