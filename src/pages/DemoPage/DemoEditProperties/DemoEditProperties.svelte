<script lang="ts">
  import {
    GenericEditable,
    // EditableList,
    // EditableObject,
    // EditableTable,
  } from '@/src/components/data';
  import { propertiesDataSample, propertiesDataSpec } from '@/src/core/constants/rando';
  import { extendPropertiesSpec } from '@/src/core/helpers/rando';
  import {
    TEditableObjectSpec,
    TEditableListSpec,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  const propertiesData = { ...propertiesDataSample };
  const propertiesSpec = { ...propertiesDataSpec };

  extendPropertiesSpec(propertiesSpec);

  /* // DEMO: Check only licenses list
   * const licensesSpec: TGenericEditableSpec = {
   *   id: 'licenses',
   *   type: 'list',
   *   label: 'Licenses',
   *   layout: 'table',
   *   flatObjects: true,
   *   editInPlace: false,
   *   useActionsColumn: true,
   *   activeRows: true,
   *   _fullId: 'properties.licenses',
   *   _level: 1,
   *   spec: {
   *     id: 'licenses-item',
   *     type: 'object',
   *     // layout: 'horizontal',
   *     _fullId: 'properties.licenses.licenses-item',
   *     _level: 2,
   *     spec: [
   *       {
   *         id: 'name',
   *         type: 'string',
   *         label: 'Name',
   *         _fullId: 'properties.licenses.licenses-item.name',
   *         _level: 3,
   *       },
   *       {
   *         id: 'path',
   *         type: 'string',
   *         label: 'Path',
   *         _fullId: 'properties.licenses.licenses-item.path',
   *         _level: 3,
   *       },
   *       {
   *         id: 'title',
   *         type: 'string',
   *         label: 'Title',
   *         _fullId: 'properties.licenses.licenses-item.title',
   *         _level: 3,
   *       },
   *     ],
   *   },
   * };
   * const licensesData = [
   *   {
   *     name: 'CC BY 4.0',
   *     path: 'https://creativecommons.org/licenses/by/4.0/',
   *     title: 'Creative Commons Attribution 4.0 International',
   *   },
   * ];
   */

  console.log('[DemoEditProperties]', {
    propertiesSpec,
    propertiesData,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[DemoEditProperties:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="DemoEditProperties">
  <h2>DemoEditProperties</h2>
  <div>
    <!--
    <GenericEditable spec={licensesSpec} data={licensesData} {onChange} />
    -->
    <GenericEditable spec={propertiesSpec} data={propertiesData} {onChange} />
  </div>
</div>

<style lang="scss">
  .DemoEditProperties {
    padding: 20px;
  }
</style>
