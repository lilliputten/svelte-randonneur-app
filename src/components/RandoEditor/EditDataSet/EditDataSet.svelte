<script lang="ts">
  import { TRandoDataSetKey } from '@/src/core/types/rando';
  import { randoDataSetSpecsStores, randoDataSetsStores } from '@/src/store';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { GenericEditable } from '@/src/components/data';

  export let dataSetId: TRandoDataSetKey;

  const dataSetSpecStore = randoDataSetSpecsStores[dataSetId];
  const dataSetDataStore = randoDataSetsStores[dataSetId];

  console.log('[EditDataSet] DEBUG', {
    dataSetId,
    $dataSetSpecStore,
    $dataSetDataStore,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[EditDataSet:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="EditDataSet">
  {#if $dataSetSpecStore}
    <GenericEditable spec={$dataSetSpecStore} data={$dataSetDataStore} {onChange} />
  {/if}
</div>

<style src="./EditDataSet.scss" lang="scss"></style>
