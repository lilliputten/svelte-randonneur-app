<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { Download, Plus } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { TRandoSectionId } from '@/src/core/types/rando';
  import { sectionTitles } from '@/src/core/constants/rando';

  import styles from './EditorHeader.module.scss';

  export let sectionId: TRandoSectionId;
  export let className: string = '';
  export let handleExportData: () => void;

  $: title = sectionTitles[sectionId];
</script>

<div class={classNames(className, styles.EditorHeader)} data-section-id={sectionId}>
  <div class={styles.Title}>
    {title}
  </div>
  <div class={styles.MiddleMenu}>
    <!-- Middle actions: Demo
    <Button class={styles.MiddleButton} variant="subtle">
      <Plus slot="leftIcon" />
      Add row
    </Button>
    -->
  </div>
  <div class={styles.RightMenu}>
    <!-- Right actions -->
    <Button class={styles.RightButton} variant="subtle" on:click={handleExportData}>
      <Download slot="leftIcon" />
      Export data
    </Button>
  </div>
</div>
