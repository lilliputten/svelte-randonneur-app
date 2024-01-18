<script lang="ts">
  import { TRandoSectionId } from '@/src/core/types/rando';
  import { EditProperties } from '@/src/components/RandoEditor/EditProperties';
  import { EditDataSet } from '@/src/components/RandoEditor/EditDataSet';
  import { sectionTitles } from '@/src/core/constants/rando';

  export let sectionId: TRandoSectionId;

  $: title = sectionTitles[sectionId];
</script>

<div class="DataEditorWrapper">
  <!-- // TODO: Reserved slot for common header -->
  <div class="header">Edit: {title}</div>
  <div class="container scrollable">
    <div class="content">
      {#if sectionId === 'properties'}
        <EditProperties />
      {:else}
        <EditDataSet dataSetId={sectionId} />
      {/if}
      <!--
      <p>Placeholder for data set: <b>{sectionId}</b></p>
      <DemoTable />
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
      -->
    </div>
  </div>
</div>

<style src="./DataEditorWrapper.scss" lang="scss"></style>
