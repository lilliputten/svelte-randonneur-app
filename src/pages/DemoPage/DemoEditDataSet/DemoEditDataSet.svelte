<script lang="ts">
  import { GenericEditable } from '@/src/components/data';
  import { deriveDataSetSpec, extendDataSetSpec } from '@/src/core/helpers/rando';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { TDataSetDictSlot } from '@/src/core/types/rando';

  const dataSetData: TGenericEditableData = [
    {
      name: 'Nickel, ion',
      code: 'e030108f-2125-4bcb-a73b-ad72130fcca3',
      categories: ['water', 'ground-'],
      unit: 'kilogram',
    },
  ];
  const dataSetSpec = deriveDataSetSpec('create-datasets', dataSetData as TDataSetDictSlot);
  /* const sampleDataSetSpec: TGenericEditableSpec = {
   *   id: 'create-datasets',
   *   type: 'list',
   *   spec: {
   *     id: 'create-datasets-item',
   *     type: 'object',
   *     spec: [
   *       {
   *         id: 'name',
   *         type: 'string',
   *         label: 'Name',
   *         _fullId: 'create-datasets.create-datasets-item.name',
   *         _level: 2,
   *       },
   *       {
   *         id: 'code',
   *         type: 'string',
   *         label: 'Code',
   *         _fullId: 'create-datasets.create-datasets-item.code',
   *         _level: 2,
   *       },
   *       {
   *         id: 'categories',
   *         type: 'list',
   *         spec: {
   *           id: 'categories-item', // XXX
   *           type: 'string',
   *         },
   *         label: 'Categories',
   *         _fullId: 'create-datasets.create-datasets-item.categories',
   *         _level: 2,
   *         layout: 'horizontal',
   *       },
   *       {
   *         id: 'unit',
   *         type: 'string',
   *         label: 'Unit',
   *         _fullId: 'create-datasets.create-datasets-item.unit',
   *         _level: 2,
   *       },
   *     ],
   *     title: 'Create datasets item',
   *     _fullId: 'create-datasets.create-datasets-item',
   *     _level: 1,
   *   },
   * };
   */

  extendDataSetSpec(dataSetSpec);

  console.log('[DemoEditDataSet]', {
    dataSetSpec,
    dataSetData,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[DemoEditDataSet:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="DemoEditDataSet">
  <h2>DemoEditDataSet</h2>
  <div>
    <!--
    <GenericEditable spec={licensesSpec} data={licensesData} {onChange} />
    -->
    <GenericEditable spec={dataSetSpec} data={dataSetData} {onChange} />
  </div>
</div>

<style lang="scss">
  .DemoEditDataSet {
    padding: 20px;
  }
</style>
