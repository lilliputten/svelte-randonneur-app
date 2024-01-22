<script lang="ts">
  /* eslint-disable no-console */

  import { GenericEditable } from '@/src/components/data';
  import { deriveDataSetSpec, extendDataSetSpec } from '@/src/core/helpers/rando';
  import { TEditableListSpec, TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { TDataSetDictSlot } from '@/src/core/types/rando';

  const itemsCount = 35;
  const dataSetData: TGenericEditableData = Array.apply(null, Array(itemsCount)).map((_, n) => ({
    value: n,
  }));

  const dataSetSpec = deriveDataSetSpec('sample', dataSetData as TDataSetDictSlot) as TEditableListSpec;

  dataSetSpec.filters = {
    value: true,
  };

  console.log('[DemoTableWithPagination]', {
    dataSetSpec,
  });

  extendDataSetSpec(dataSetSpec);

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
