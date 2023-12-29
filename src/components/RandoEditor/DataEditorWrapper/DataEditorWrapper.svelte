<script lang="ts">
  // import { browser } from '$app/environment';
  // import { goto } from '$app/navigation';
  // import { onDestroy, onMount } from 'svelte';
  //
  // import { addToast } from '@/src/components/ui/Toasts';
  // import { hasDataStore, toggleHasData } from '@/src/store';
</script>

<svelte:head>
  <title>Edit data</title>
</svelte:head>

<div class="DataEditorWrapper">
  <div class="header">header</div>
  <div class="container scrollable">
    <div class="content">
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
    </div>
  </div>
</div>

<style src="./DataEditorWrapper.scss" lang="scss"></style>
