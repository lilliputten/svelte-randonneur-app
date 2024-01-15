<script lang="ts">
  import { TRandoSectionId } from '@/src/core/types/rando';

  import { Section } from './Section';

  export let allSections: TRandoSectionId[];
  export let sectionId: TRandoSectionId;
  export let onChangeSection: (sectionId: TRandoSectionId) => void;
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
      {#each allSections as id}
        <Section sectionId={id} isActive={id === sectionId} {onChangeSection} />
        {#if id === 'properties'}
          <!-- Add visual delimiter after properties section -->
          <div class="delimiter section" />
        {/if}
      {/each}
    </div>
  </div>
</div>

<style src="./SectionsNavigator.scss" lang="scss"></style>
