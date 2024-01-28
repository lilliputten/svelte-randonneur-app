<script lang="ts">
  import { TRandoSectionId } from '@/src/core/types/rando';

  import { SectionsMenu } from '../SectionsMenu';
</script>

<div class="SectionsNavigator">
  <!-- // TODO: Reserved slot for common header
    <div class={styles.header}>header</div>
  -->
  <div class="container scrollable">
    <div class="content">
      <!-- // DEMO: Check scrolling
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
      -->
      <SectionsMenu />
    </div>
  </div>
</div>

<style src="./SectionsNavigator.scss" lang="scss"></style>
