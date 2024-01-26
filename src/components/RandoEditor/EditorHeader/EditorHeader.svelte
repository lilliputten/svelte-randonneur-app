<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { Download, Plus, Cross2 } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { TRandoSectionId } from '@/src/core/types/rando';
  import { sectionTitles } from '@/src/core/constants/rando';

  import styles from './EditorHeader.module.scss';

  export let sectionId: TRandoSectionId;
  export let className: string = '';
  export let hasFilters: boolean = false;
  export let handleExportData: () => void;

  type TCallback = () => void;

  export let handleResetAllFilters: TCallback | undefined = undefined;
  export let handleAddNewDataSetRow: TCallback | undefined = undefined;

  $: isProperties = sectionId === 'properties';
  $: isDataSet = !isProperties;

  $: title = sectionTitles[sectionId];
</script>

<div class={classNames(className, styles.EditorHeader)} data-section-id={sectionId}>
  <div class={styles.Title}>
    {title}
  </div>
  <div class={styles.MiddleMenu}>
    <!-- Middle actions -->
    {#if isDataSet}
      <Button
        class={styles.MiddleButton}
        color="green"
        variant="subtle"
        on:click={handleAddNewDataSetRow}
      >
        <Plus slot="leftIcon" />
        Add dataset row
      </Button>
    {/if}
    {#if isDataSet && hasFilters}
      <Button
        class={styles.MiddleButton}
        color="red"
        variant="subtle"
        on:click={handleResetAllFilters}
      >
        <Cross2 slot="leftIcon" />
        Reset all filters
      </Button>
    {/if}
  </div>
  <div class={styles.RightMenu}>
    <!-- Right actions -->
    <Button class={styles.RightButton} variant="subtle" on:click={handleExportData}>
      <Download slot="leftIcon" />
      Export data
    </Button>
  </div>
</div>
