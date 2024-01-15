<script lang="ts">
  import { TRandoDataSetKey } from '@/src/core/types/rando';
  import {
    getAllRandoDataSets,
    getAvailableRandoDataSetKeys,
    randoDataSetsStores,
  } from '@/src/store';

  export let dataSetId: TRandoDataSetKey;

  // // TODO: Get current data set id from stores?
  // const dataSetKey: TRandoDataSetKey = 'delete';
  // const dataSetStore = randoDataSetsStores[dataSetKey];
  // const allRandoDataSets = getAllRandoDataSets();
  // const availableRandoDataSetKeys = getAvailableRandoDataSetKeys();

  console.log('EditDataSet:DEBUG', {
    sectionId: dataSetId,
    // availableRandoDataSetKeys,
    // allRandoDataSets,
    // dataSetKey,
    // $dataSetStore,
  });
</script>

<div class="EditDataSet">
  <!-- TODO -->
  DataSet: {dataSetId}
</div>

<style src="./EditDataSet.scss" lang="scss"></style>
