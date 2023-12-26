import { writable } from 'svelte/store';

import { TToast, TToastParams, TToastId } from './toastsTypes';

export const toasts = writable<TToast[]>([]);

export const addToast = (toast: TToastParams) => {
	// Create a unique ID so we can easily find/remove it
	// if it is dismissible/has a timeout.
	const id = Math.floor(Math.random() * 10000);

	// Setup some sensible defaults for a toast.
	const defaults: TToast = {
		id,
		type: 'info',
		dismissible: true,
		timeout: 3000,
		message: '',
	};

	const combinedToast: TToast = { ...defaults, ...toast };

	// Push the toast to the top of the list of toasts
	toasts.update((all) => [combinedToast, ...all]);

	// If toast is dismissible, dismiss it after "timeout" amount of time.
	if (combinedToast.timeout) {
		setTimeout(() => dismissToast(id), combinedToast.timeout);
	}
};

export const dismissToast = (id: TToastId) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
