<script lang="ts">
  import { Readable, Writable } from 'svelte/store';

  export let filterValue: Writable<string>;
  export let values: Readable<string[]>;

  $: console.log('[TextFilter]', {
    filterValue,
    values,
  });
</script>

<input
  class="TextFilter"
  type="text"
  bind:value={$filterValue}
  on:click|stopPropagation
  placeholder="Search {$values.length} records..."
/>

<style lang="scss">
  .TextFilter {
    border: 1px solid blue;
  }
</style>
