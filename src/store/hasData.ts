import { get, writable } from 'svelte/store';

export const hasDataStore = writable<boolean>(false);

export function setHasData(hasData: boolean) {
	hasDataStore.set(hasData);
}

export function toggleHasData() {
	hasDataStore.update((hasData) => !hasData);
}

export function getHasData() {
	return get(hasDataStore);
}
