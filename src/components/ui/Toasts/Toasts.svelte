<script lang="ts">
	import Toast from './Toast.svelte';

	import { dismissToast, toasts } from './toastsStore';
</script>

{#if $toasts}
	<section class="Toasts">
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id)}
			>
				{toast.message}
			</Toast>
		{/each}
	</section>
{/if}

<style lang="scss" src="./Toasts.scss"></style>
