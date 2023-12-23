<script lang="ts">
	import { hasData, getHasData } from '@/src/store/hasData';
	// TODO: Mount hook to check if data has already loaded
</script>

<h1>Edit loaded data</h1>
<p><button on:click={() => hasData.update((value) => !value)}>Toggle data: {$hasData}</button></p>
