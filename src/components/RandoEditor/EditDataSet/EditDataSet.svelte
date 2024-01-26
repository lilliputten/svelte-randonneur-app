<script context="module" lang="ts">
  type TCallback = () => void;
  export interface TEditDataSetApi {
    resetFilters: TCallback;
    addDataRow: TCallback;
  }
</script>

<script lang="ts">
  import { TDataSetDictSlot, TRandoDataSetKey } from '@/src/core/types/rando';
  import { TRandoDataSetSpecSlot, randoDataSetSpecsStores, randoDataSetsStores } from '@/src/store';
  import {
    TEditableListData,
    TEditableListSpec,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';
  import { EditableTable } from '@/src/components/data';
  import { extendDataSetSpec } from '@/src/core/helpers/rando';
  import { TEditableTableApi } from '@/src/components/data/EditableTable';

  export let dataSetId: TRandoDataSetKey;
  export let setHasFilters: ((hasFilters: boolean) => void) | undefined = undefined;

  $: dataSetSpecStore = randoDataSetSpecsStores[dataSetId];
  $: dataSetDataStore = randoDataSetsStores[dataSetId];

  function makeSpec(srcSpec: TRandoDataSetSpecSlot): TGenericEditableSpec {
    const spec = { ...srcSpec } as TGenericEditableSpec;
    extendDataSetSpec(spec); // TODO!
    return spec;
  }

  // NOTE: Assuming that dataset top level data is always a table...
  $: spec = makeSpec($dataSetSpecStore) as TEditableListSpec;
  $: data = $dataSetDataStore as unknown as TEditableListData;

  let editableTableApi: TEditableTableApi;

  function onChange(data: TGenericEditableData, _spec: TGenericEditableSpec) {
    dataSetDataStore.set(data as TDataSetDictSlot);
    // TODO: Set 'changed' flag?
  }

  function resetFilters() {
    editableTableApi.resetFilters();
  }

  function addDataRow() {
    editableTableApi.addDataRow();
  }

  export const api: TEditDataSetApi = {
    resetFilters,
    addDataRow,
  };
</script>

<div class="EditDataSet" data-set-id={dataSetId}>
  {#if $dataSetSpecStore}
    <!-- NOTE: Force update of subcomponent depending on changed dataSetId -->
    {#key dataSetId}
      <!--
      // NOTE: Assuming that dataset top level data is always a table...
        Alternate way: to use generic component:
        <GenericEditable {spec} data={$dataSetDataStore} {onChange} />
      -->
      <EditableTable {spec} {data} {onChange} {setHasFilters} bind:api={editableTableApi} />
    {/key}
  {/if}
</div>

<style src="./EditDataSet.scss" lang="scss"></style>
