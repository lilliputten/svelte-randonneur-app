<script lang="ts">
  import { SvelteUIProvider, colorScheme } from '@svelteuidev/core';

  import Toasts from '@/src/components/ui/Toasts';

  import './global-styles.scss';

  import styles from './AppLayoutDev.module.scss';
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
  <div class={styles.AppLayout}>
    <div class={styles.AppLayout_Header}>
      <!-- Header to no notify about dev mode -->
      Dev layout (trying to avoid dev environment bug)
    </div>
    <div class={styles.AppLayout_MainContent}>
      <slot>This is the main content</slot>
    </div>
  </div>
  <Toasts />
</SvelteUIProvider>

<style lang="scss">
  .Header {
    background-color: $errorColor;
    color: white;
    padding: 4px 8px;
  }
</style>
