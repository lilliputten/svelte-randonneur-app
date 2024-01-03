<script lang="ts">
  import { EditableList, EditableObject, EditableTable } from '@/src/components/data';
  import {
    TEditableObjectSpec,
    TEditableListSpec,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  // List of strings
  const strListSpec: TEditableListSpec = {
    id: 'strList',
    type: 'list',
    title: 'strList',
    label: 'strList',
    // layout: 'horizontal',
    spec: {
      id: 'testString',
      type: 'string',
      // label: 'testString',
      // title: 'testString',
    },
  };
  const strListData = [
    // prettier-ignore
    'str 1',
    'str 2',
  ];

  // List of objects
  const objListSpec: TEditableListSpec = {
    id: 'objList',
    type: 'list',
    title: 'objList',
    label: 'objList',
    layout: 'table',
    spec: {
      id: 'listObj',
      type: 'object',
      layout: 'horizontal',
      spec: [
        { id: 'id', type: 'string', title: 'Id' },
        // { id: 'name', type: 'string', title: 'name' },
        { id: 'check', type: 'boolean', title: 'Check' },
        {
          id: 'Choice',
          type: 'select',
          title: 'Select',
          selectData: ['A', 'B', 'C', 'D'],
        },
      ],
    },
  };
  const objListData = [
    // prettier-ignore
    { id: 'id 1', name: 'name 1', check: false },
    { id: 'id 2', name: 'name 2', check: true },
  ];

  // Nested objects and lists...
  const objSpec: TEditableObjectSpec = {
    id: 'testObject',
    type: 'object',
    // title: 'testObject',
    label: 'testObject',
    layout: 'vertical',
    spec: [
      // Scalar values...
      { id: 'testBoolean1', type: 'boolean', label: 'testBoolean1', title: 'testBoolean1' },
      { id: 'testString1', type: 'string', title: 'testString1' },
      // Nested object...
      {
        id: 'nestedObject2',
        type: 'object',
        label: 'nestedObject2',
        // layout: 'horizontal',
        spec: [
          { id: 'testString2', type: 'string', title: 'testString2' },
          {
            id: 'testSelect1',
            type: 'select',
            title: 'testSelect1',
            selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
          },
        ],
      },
      // Nested list...
      {
        id: 'nestedStrList',
        type: 'list',
        title: 'nestedStrList',
        label: 'nestedStrList',
        // layout: 'horizontal',
        spec: {
          id: 'testString',
          type: 'string',
          // label: 'testString',
          // title: 'testString',
        },
      },
    ],
  };

  const objData = {
    testString1: 'testString1',
    nestedStrList: strListData,
  };

  function onRootChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[DemoEditableObjects:onRootChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
  }
</script>

<div class="DemoEditableObjects">
  <h2>DemoEditableObjects</h2>
  <div>
    <!--
    -->
    <EditableList spec={strListSpec} data={strListData} onChange={onRootChange} />
    <EditableTable spec={objListSpec} data={objListData} onChange={onRootChange} />
    <EditableObject spec={objSpec} data={objData} onChange={onRootChange} />
  </div>
</div>

<style lang="scss">
  .DemoEditableObjects {
    padding: 20px;
  }
</style>
