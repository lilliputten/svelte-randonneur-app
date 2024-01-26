<script lang="ts">
  import DataEditorWrapper from '@/src/components/RandoEditor/DataEditorWrapper';
  import { propertiesDataSample } from '@/src/core/constants/rando';
  import {
    deriveDataSetSpec,
    extendDataSetSpec,
    extendDataSetWithFilters,
  } from '@/src/core/helpers/rando';
  import {
    TDataSetDictSlot,
    TRandoData,
    TRandoDataSets,
    TRandoSectionId,
  } from '@/src/core/types/rando';
  import { setRandData } from '@/src/store';

  const dataSetData = [
    {
      // test_value: 1,
      source: {
        name: '1,4-Butanediol',
        categories: ['Emissions to water', 'river'],
        unit: 'kg',
      },
      // target: {
      //   uuid: 'd6911d36-3fec-41fe-8ef9-540f6543a240',
      //   name: '1,4-Butanediol',
      //   context: 'water/surface water',
      //   unit: 'kg',
      // },
      // conversion_factor: 1.0,
      comment: 'Identical names',
    },
    {
      source: {
        categories: ['Extra category'],
        unit: 'pound',
      },
    },
  ];

  const sectionId: TRandoSectionId = 'replace';
  const dataSets = {
    [sectionId]: dataSetData,
  } as unknown as TRandoDataSets;
  const data = {
    ...propertiesDataSample,
    ...dataSets,
  } as TRandoData;

  const dataSetSpec = deriveDataSetSpec('sample', dataSetData as unknown as TDataSetDictSlot);
  extendDataSetWithFilters(dataSetSpec);

  extendDataSetSpec(dataSetSpec);

  setRandData(data);
</script>

<div class="DemoDataEditorWrapper">
  <h2>DemoDataEditorWrapper</h2>
  <div>
    <!--
    <GenericEditable spec={licensesSpec} data={licensesData} {onChange} />
    <GenericEditable spec={dataSetSpec} data={dataSetData} {onChange} />
    -->
    <DataEditorWrapper {sectionId} />
  </div>
</div>

<style lang="scss">
  .DemoDataEditorWrapper {
    h2 {
      padding: 0 20px;
    }
  }
</style>
