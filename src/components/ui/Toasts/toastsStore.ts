import { get, writable } from 'svelte/store';

import { TToast, TToastParams, TToastId } from './toastsTypes';

export const toasts = writable<TToast[]>([]);

const dismissHandlers: Record<TToastId, NodeJS.Timeout> = {};

export function addToast(toast: TToastParams) {
  // Setup some sensible defaults for a toast.
  const defaults: TToast = {
    id: 0,
    type: 'info',
    dismissible: true,
    timeout: 3000,
    message: '',
  };

  const combinedToast: TToast = { ...defaults, ...toast };

  if (!combinedToast.id) {
    // Create a unique ID so we can easily find/remove it
    // if it is dismissible/has a timeout.
    const toastsList = get(toasts);
    do {
      combinedToast.id = Math.floor(Math.random() * 10000);
    } while (toastsList.find((t) => t.id === combinedToast.id));
  }

  const id = combinedToast.id;

  // Push the toast to the top of the list of toasts
  toasts.update((all) => [combinedToast, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (combinedToast.timeout) {
    if (dismissHandlers[id]) {
      clearTimeout(dismissHandlers[id]);
    }
    dismissHandlers[id] = setTimeout(() => dismissToast(id), combinedToast.timeout);
  }
}

export function dismissToast(id: TToastId) {
  // Remove toast...
  toasts.update((all) => all.filter((t) => t.id !== id));
  // Remove dismiss handler...
  if (dismissHandlers[id]) {
    clearTimeout(dismissHandlers[id]);
    delete dismissHandlers[id];
  }
}

export function pauseDismissToast(id: TToastId) {
  // Remove dismiss handler...
  if (dismissHandlers[id]) {
    clearTimeout(dismissHandlers[id]);
    delete dismissHandlers[id];
  }
}

export function resumeDismissToast(id: TToastId) {
  // Find toast and add toast dismiss handler...
  const toast = get(toasts).find((t) => t.id === id);
  if (toast?.timeout) {
    if (dismissHandlers[id]) {
      clearTimeout(dismissHandlers[id]);
    }
    dismissHandlers[id] = setTimeout(() => dismissToast(id), toast.timeout);
  }
}
