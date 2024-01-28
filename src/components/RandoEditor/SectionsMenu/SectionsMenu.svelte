<script lang="ts">
  import { allSectionsStore, currentSectionIdStore } from '@/src/store';

  import { TRandoSectionId } from '@/src/core/types/rando';

  import { Section } from './Section';

  // Set current section...
  function onChangeSection(id: TRandoSectionId) {
    currentSectionIdStore.set(id);
  }
</script>

<div class="SectionsMenu">
  {#if $allSectionsStore}
    {#each $allSectionsStore as id}
      <Section sectionId={id} isActive={id === $currentSectionIdStore} {onChangeSection} />
      {#if id === 'properties'}
        <!-- Add visual delimiter after properties section -->
        <div class="delimiter section" />
      {/if}
    {/each}
  {/if}
</div>

<style src="./SectionsMenu.scss" lang="scss"></style>
