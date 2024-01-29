<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  import { appTitle } from '@/src/core/constants/app';
  import { currentSectionIdStore, hasDataStore } from '@/src/store';

  import { addToast } from '@/src/components/ui/Toasts';
  import SectionsNavigator from '@/src/components/RandoEditor/SectionsNavigator';
  import DataEditorWrapper from '@/src/components/RandoEditor/DataEditorWrapper';

  /** Local state: to check if we're already going out of this page and it's not required to do it one more time. */
  let goingOut = false;
  let ready = false;

  function checkReadiness(hasData: boolean) {
    if (!hasData && !goingOut) {
      const errorMsg = 'Data has not been initialized. Going to the main page.';
      const error = new Error(errorMsg);
      // eslint-disable-next-line no-console
      console.warn('[RandoPage:checkReadiness]', error.message);
      // Leave page if no data anymore...
      goingOut = true;
      if (browser) {
        addToast({ message: errorMsg, type: 'error' });
        goto('/', { replaceState: true });
      }
    } else {
      ready = true;
    }
  }

  // Check data status on change...
  const checkReadinessUnsubscribe = hasDataStore.subscribe(checkReadiness);
  onDestroy(checkReadinessUnsubscribe);

  // Mount hook to check if data has already loaded...
  onMount(() => {
    // UNUSED: Probably it's not required here: `hasDataStore.subscribe` already works as initializatior hook too.
    checkReadiness($hasDataStore);
  });
</script>

<svelte:head>
  <title>Data browser — {appTitle}</title>
</svelte:head>

{#if ready}
  <div class="RandoPage">
    <!-- // TODO: Show header
    <h2 class="header">Edit loaded data</h2>
    -->
    <div class="layout">
      <div class="column sideColumn leftColumn">
        <SectionsNavigator />
      </div>
      <div class="column mainColumn">
        {#if $currentSectionIdStore}
          <DataEditorWrapper sectionId={$currentSectionIdStore} />
        {/if}
      </div>
    </div>
  </div>
{/if}

<style src="./RandoPage.scss" lang="scss"></style>
