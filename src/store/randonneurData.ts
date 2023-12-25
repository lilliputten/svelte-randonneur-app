import { get, writable } from 'svelte/store';

export const randonneurData = writable<TRandonneurData | undefined>(undefined);

export function setRandonneurData(val: TRandonneurData) {
	// TODO: Split full dataset to specific parts
	randonneurData.set(val);
}

export function getRandonneurData() {
	return get(randonneurData);
}
