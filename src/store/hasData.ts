import { get, writable } from 'svelte/store';

export const hasDataStore = writable<boolean>(false);

export function setHasData(val: boolean) {
	hasDataStore.set(val);
}

export function toggleHasData() {
	hasDataStore.update((value) => !value);
}

export function getHasData() {
	return get(hasDataStore);
}
