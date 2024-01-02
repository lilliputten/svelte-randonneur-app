import { writable } from 'svelte/store';
import { SvelteComponent, ComponentType } from 'svelte';

export type TComponent = ComponentType<SvelteComponent>;
// export type TComponent = typeof SvelteComponent;
export type TRegistry = Record<string, TComponent>;

export const registryStore = writable<TRegistry>({});

// export const registry: TRegistry = {};
