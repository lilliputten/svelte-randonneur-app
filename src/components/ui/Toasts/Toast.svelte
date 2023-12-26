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

<style lang="scss">
	article {
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 0.2rem;
		display: flex;
		gap: .3em;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 20rem;
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.text {
		margin-left: 1rem;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
