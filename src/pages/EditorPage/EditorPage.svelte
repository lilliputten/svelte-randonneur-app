<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';

  import { hasDataStore } from '@/src/store';

  import { addToast } from '@/src/components/ui/Toasts';
  import SectionsNavigator from '@/src/components/RandoEditor/SectionsNavigator';
  import DataEditorWrapper from '@/src/components/RandoEditor/DataEditorWrapper';

  /** Local state: to check if we're already going out of this page and it's not required to do it one more time. */
  let goingOut = false;

  function checkReadiness(hasData: boolean) {
    if (!hasData && !goingOut) {
      const errorMsg = 'Data has not been initialized. Going to the main page.';
      const error = new Error(errorMsg);
      // eslint-disable-next-line no-console
      console.warn('[EditorPage:checkReadiness]', error.message);
      // Leave page if no data anymore...
      goingOut = true;
      if (browser) {
        addToast({ message: errorMsg, type: 'error' });
        goto('/', { replaceState: true });
      }
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

<div class="EditorPage">
  <h1 class="header">Edit loaded data</h1>

  <div class="layout">
    <div class="column sideColumn leftColumn">
      <SectionsNavigator />
    </div>
    <div class="column mainColumn">
      <DataEditorWrapper />
    </div>
  </div>
</div>

<style src="./EditorPage.scss" lang="scss"></style>
