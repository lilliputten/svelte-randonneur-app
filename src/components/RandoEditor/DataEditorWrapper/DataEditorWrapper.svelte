<script lang="ts">
  import { TRandoDataSetKey } from '@/src/core/types/rando';
  import { getAllRandoDataSets, getAvailableRandoDataSetKeys, randoDataSetsStores } from '@/src/store';

  // TODO: Get current data set id from stores?
  const dataSetKey: TRandoDataSetKey = 'delete';
  const dataSetStore = randoDataSetsStores[dataSetKey];

  const allRandoDataSets = getAllRandoDataSets();
  const availableRandoDataSetKeys = getAvailableRandoDataSetKeys();

  console.log('DataEditorWrapper:DEBUG', {
    availableRandoDataSetKeys,
    allRandoDataSets,
    dataSetKey,
    $dataSetStore,
  });
</script>

<div class="DataEditorWrapper">
  <div class="header">header</div>
  <div class="container scrollable">
    <div class="content">
      <p>Placeholder for data set: <b>{dataSetKey}</b></p>
      <!--
      <DemoTable />
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
      -->
    </div>
  </div>
</div>

<style src="./DataEditorWrapper.scss" lang="scss"></style>
