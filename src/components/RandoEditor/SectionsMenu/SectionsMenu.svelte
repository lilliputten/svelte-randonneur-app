<script lang="ts">
  import { allSectionsStore, currentSectionIdStore } from '@/src/store';

  import { TRandoSectionId } from '@/src/core/types/rando';

  import { Section } from './Section';

  export let inSideMenu: boolean = false;
  export let onChangeSection: ((id: TRandoSectionId) => void) | undefined = undefined;

  // Set current section...
  function onSectionClick(id: TRandoSectionId) {
    currentSectionIdStore.set(id);
    if (onChangeSection) {
      onChangeSection(id);
    }
  }
</script>

<div class="SectionsMenu" data-in-side-menu={inSideMenu ? true : undefined}>
  {#if $allSectionsStore}
    {#if inSideMenu}
      <div class="SectionsTitle">Data sections</div>
    {/if}
    {#each $allSectionsStore as id}
      <Section sectionId={id} isActive={id === $currentSectionIdStore} {onSectionClick} />
      {#if id === 'properties'}
        <!-- NOTE: Adding visual delimiter after properties section -->
        <div class="delimiter section" />
      {/if}
    {/each}
  {/if}
</div>

<style src="./SectionsMenu.scss" lang="scss"></style>
