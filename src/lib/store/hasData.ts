import {
	get,
	writable
} from 'svelte/store';

export const hasData = writable<boolean>(false);

console.log('XXX', hasData);

export function setHasData(val: boolean) {
	hasData.set(val);
}

export function getHasData() {
	return get(hasData);
}

// const count = get(hasData);
// console.log(count); // 10

/*
 * import { writable } from 'svelte/store';
 *
 * const hasData = writable<boolean>(false, (set, update) => {
 *   set(false);
 *   // update((prevCount) => prevCount * 2); // logs 20
 * });
 *
 * hasData.subscribe((hasData) => console.log(hasData));
 */

/*
 * export function createHasData(initial: boolean = false) {
 *   let count = $state(initial)
 *
 *   function increment() {
 *     count += 1
 *   }
 *
 *   function decrement() {
 *     count -= 1
 *   }
 *
 *   function reset() {
 *     count = 0
 *   }
 *
 *   return {
 *     get count() { return count },
 *     increment,
 *     decrement,
 *     reset
 *   }
 * }
 */
