<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import classNames from 'classnames';

	import { TToastType } from './toastsTypes';

	import SuccessIcon from './icons/SuccessIcon.svelte';
	import ErrorIcon from './icons/ErrorIcon.svelte';
	import InfoIcon from './icons/InfoIcon.svelte';
	import CloseIcon from './icons/CloseIcon.svelte';

	const dispatch = createEventDispatcher();

	// @see https://svelte.dev/docs/svelte-transition
	const fadeTimeout = 250; // ms

	const iconWidth = '1.1em';

	export let type: TToastType = 'error';
	export let dismissible = true;
</script>

<article class={classNames('Toast', type)} role="alert" transition:fade={{ duration: fadeTimeout }}>
	{#if type === 'success'}
		<SuccessIcon width={iconWidth} />
	{:else if type === 'error'}
		<ErrorIcon width={iconWidth} />
	{:else}
		<InfoIcon width={iconWidth} />
	{/if}

	<div class="text">
		<slot />
	</div>

	{#if dismissible}
		<button class="close" on:click={() => dispatch('dismiss')}>
			<CloseIcon width="0.8em" />
		</button>
	{/if}
</article>

<style lang="scss" src="./Toast.scss"></style>
