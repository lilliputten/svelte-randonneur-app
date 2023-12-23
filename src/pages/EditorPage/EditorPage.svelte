<script lang="ts">
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
	import { get } from 'svelte/store';

	import { hasData, toggleHasData } from '@/src/store/hasData';

	/** Local state: to check if we're already going out of this page and it's not required to do it one more time. */
	let goingOut = false;

	function checkReadiness(hasData: boolean) {
		console.log('checkReadiness', hasData);
		if (!hasData && !goingOut) {
			const error = new Error('Data has not been initialized. Go to the main page.');
			console.warn('[EditorPage:checkReadiness]', error.message, {
				error,
				goingOut,
			});
			// Leave page if no data anymore...
			goingOut = true;
			goto('/', { replaceState: true });
		}
	}

	// Check data status on change...
	const unsubscribe = hasData.subscribe(checkReadiness);
	onDestroy(unsubscribe);

	// Mount hook to check if data has already loaded...
	onMount(() => {
		// UNUSED: Probably it's not required here: `hasData.subscribe` already works as initializatior hook too.
	  checkReadiness(get(hasData));
	});
</script>

<h1>Edit loaded data</h1>

<p><button on:click={toggleHasData}>Toggle data: {$hasData}</button></p>
