import {
	get,
	writable
} from 'svelte/store';

export const hasData = writable<boolean>(false);

export function setHasData(val: boolean) {
	hasData.set(val);
}

export function toggleHasData() {
	hasData.update((value) => !value);
}

export function getHasData() {
	return get(hasData);
}
