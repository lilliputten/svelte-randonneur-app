<script lang="ts">
	import { hasData, getHasData } from '@/src/store/hasData';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p><button on:click={() => hasData.update((value) => !value)}>Toggle data: {$hasData}</button></p>
