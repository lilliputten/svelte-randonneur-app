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
    {#if isDataSet}
      Data set: <strong>{title}</strong>
    {:else}
      {title}
    {/if}
  </div>
  <div class={styles.MiddleMenu}>
    <!-- Middle actions -->
    {#if isDataSet}
      <Button
        class={styles.MiddleButton}
        color="green"
        variant="subtle"
        on:click={handleAddNewDataSetRow}
        title="Add dataset row"
      >
        <Plus slot="leftIcon" />
        <span class={styles.text}>Add dataset row</span>
      </Button>
    {/if}
    {#if isDataSet && hasFilters}
      <Button
        class={styles.MiddleButton}
        color="red"
        variant="subtle"
        on:click={handleResetAllFilters}
        title="Reset all filters"
      >
        <Cross2 slot="leftIcon" />
        <span class={styles.text}>Reset all filters</span>
      </Button>
    {/if}
  </div>
  <div class={styles.RightMenu}>
    <!-- Right actions -->
    <Button
      class={styles.RightButton}
      variant="subtle"
      on:click={handleExportData}
      title="Export data"
    >
      <Download slot="leftIcon" />
      <span class={styles.text}>Export data</span>
    </Button>
  </div>
</div>
