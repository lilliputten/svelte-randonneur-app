<script lang="ts">
	import { hasData, toggleHasData } from '@/src/store/hasData';
</script>

<h1>Load data to edit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p><button on:click={toggleHasData}>Toggle data: {$hasData}</button></p>
