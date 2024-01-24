<script lang="ts">
  /* eslint-disable no-console */

  import { GenericEditable } from '@/src/components/data';
  import { deriveDataSetSpec, extendDataSetSpec } from '@/src/core/helpers/rando';
  import { extendDataSetWithFilters } from '@/src/core/helpers/rando/extendDataSetWithFilters';
  import {
    TEditableListSpec,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';
  import { TDataSetDictSlot } from '@/src/core/types/rando';

  const itemsCount = 3;
  const dataSetData: TGenericEditableData = Array.apply(null, Array(itemsCount)).map((_, n) => ({
    value: 'v' + n,
    object: {
      test: 'x' + n,
      categories: ['item-' + n],
    },
    // categories: ['item-' + n],
  }));

  // @ts-expect-error: Debug value
  dataSetData[0].object.categories.push('X');

  const dataSetSpec = deriveDataSetSpec(
    'sample',
    dataSetData as TDataSetDictSlot,
  ) as TEditableListSpec;

  const setCustomFilters = false;
  if (setCustomFilters) {
    dataSetSpec.filters = {
      value: true,
      'object.test': true,
      'object.categories': 'select',
    };
  }
  extendDataSetWithFilters(dataSetSpec);

  const origDataSetSpec = { ...dataSetSpec };

  console.log('[DemoTableWithFilters]', {
    origDataSetSpec,
    dataSetSpec,
  });

  extendDataSetSpec(dataSetSpec);

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[DemoTableWithFilters:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="DemoTableWithFilters">
  <h2>DemoTableWithFilters</h2>
  <div class="Content">
    <!--
    <GenericEditable spec={licensesSpec} data={licensesData} {onChange} />
    -->
    <GenericEditable spec={dataSetSpec} data={dataSetData} {onChange} />
  </div>
</div>

<style lang="scss">
  .DemoTableWithFilters {
    padding: 20px;
  }
</style>
