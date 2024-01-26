<script lang="ts">
  import { TDataSetDictSlot, TRandoDataSetKey } from '@/src/core/types/rando';
  import { TRandoDataSetSpecSlot, randoDataSetSpecsStores, randoDataSetsStores } from '@/src/store';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { GenericEditable } from '@/src/components/data';
  import { extendDataSetSpec } from '@/src/core/helpers/rando';

  export let dataSetId: TRandoDataSetKey;

  $: dataSetSpecStore = randoDataSetSpecsStores[dataSetId];
  $: dataSetDataStore = randoDataSetsStores[dataSetId];

  function makeSpec(srcSpec: TRandoDataSetSpecSlot): TGenericEditableSpec {
    const spec = { ...srcSpec } as TGenericEditableSpec;
    extendDataSetSpec(spec); // TODO!
    /* console.log('[EditDataSet:makeSpec]', {
     *   srcSpec,
     *   spec,
     * });
     */
    return spec;
  }

  $: spec = makeSpec($dataSetSpecStore);

  function onChange(data: TGenericEditableData, _spec: TGenericEditableSpec) {
    /* console.log('[EditDataSet:onChange]', spec.id, {
     *   id: spec.id,
     *   data,
     *   _spec,
     * });
     */
    dataSetDataStore.set(data as TDataSetDictSlot);
    // TODO: Update data
  }
</script>

<div class="EditDataSet" data-set-id={dataSetId}>
  {#if $dataSetSpecStore}
    <!-- NOTE: Force update of GenericEditable depending on changed dataSetId -->
    {#key dataSetId}
      <GenericEditable {spec} data={$dataSetDataStore} {onChange} />
    {/key}
  {/if}
</div>

<style src="./EditDataSet.scss" lang="scss"></style>