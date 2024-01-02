<script lang="ts">
  import { EditableList, EditableObject } from '@/src/components/data';
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
    // layout: 'horizontal',
    spec: {
      id: 'listObj',
      type: 'object',
      layout: 'horizontal',
      spec: [
        { id: 'id', type: 'string', title: 'id' },
        { id: 'name', type: 'string', title: 'name' },
      ],
    },
  };
  const objListData = [
    // prettier-ignore
    { id: 'id 1', name: 'name 1' },
    { id: 'id 2', name: 'name 2' },
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
        id: 'testObject2',
        type: 'object',
        label: 'testObject2',
        layout: 'horizontal',
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
        id: 'strList',
        type: 'list',
        title: 'strList',
        label: 'strList',
        layout: 'horizontal',
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
    strList: strListData,
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
    // prettier-ignore
    -->
    <EditableList spec={strListSpec} data={strListData} onChange={onRootChange} />
    <EditableList spec={objListSpec} data={objListData} onChange={onRootChange} />
    <EditableObject spec={objSpec} data={objData} onChange={onRootChange} />
    <hr />
  </div>
</div>

<style lang="scss">
  .DemoEditableObjects {
    padding: 20px;
  }
</style>
