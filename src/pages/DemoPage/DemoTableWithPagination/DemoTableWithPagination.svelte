<script lang="ts">
  /* eslint-disable no-console */

  import { GenericEditable } from '@/src/components/data';
  import { deriveDataSetSpec, extendDataSetSpec } from '@/src/core/helpers/rando';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { TDataSetDictSlot } from '@/src/core/types/rando';

  const dataSetData: TGenericEditableData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
    { value: 26 },
    { value: 27 },
    { value: 28 },
    { value: 29 },
    { value: 30 },
    { value: 31 },
    { value: 32 },
    { value: 33 },
    { value: 34 },
    { value: 35 },
  ];
  const dataSetSpec = deriveDataSetSpec('sample', dataSetData as TDataSetDictSlot);

  extendDataSetSpec(dataSetSpec);

  console.log('[DemoTableWithPagination]', {
    dataSetSpec,
    dataSetData,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[DemoTableWithPagination:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="DemoTableWithPagination">
  <h2>DemoTableWithPagination</h2>
  <div class="Content">
    <!--
    <GenericEditable spec={licensesSpec} data={licensesData} {onChange} />
    -->
    <GenericEditable spec={dataSetSpec} data={dataSetData} {onChange} />
  </div>
</div>

<style lang="scss">
  .DemoTableWithPagination {
    padding: 20px;
  }
</style>
