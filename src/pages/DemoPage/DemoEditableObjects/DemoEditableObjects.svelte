<script lang="ts">
  /* eslint-disable no-console */

  import {
    GenericEditable,
    // EditableList,
    // EditableObject,
    // EditableTable,
  } from '@/src/components/data';
  import {
    TEditableObjectSpec,
    TEditableListSpec,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  /* // List of strings
   * const strListSpec: TEditableListSpec = {
   *   id: 'strList',
   *   type: 'list',
   *   title: 'Strings list (strList)',
   *   label: 'Strings list (strList)',
   *   layout: 'horizontal',
   *   spec: {
   *     id: 'testString',
   *     type: 'string',
   *     // label: 'String (testString)',
   *     title: 'String (testString)',
   *   },
   * };
   */
  const strListData = [
    // prettier-ignore
    'str 1',
    'str 2',
  ];

  // List of objects
  const objListTableSpec: TEditableListSpec = {
    id: 'objListTable',
    type: 'list',
    title: 'Objects table (objListTable)',
    // label: 'Objects table (objListTable)',
    layout: 'table',
    flatObjects: true,
    editInPlace: false,
    useActionsColumn: true,
    activeRows: true,
    showFlatFields: [
      // prettier-ignore
      'id',
      'nestedObject.testString',
      'nestedObject.testBoolean',
    ],
    spec: {
      id: 'listTableObj',
      type: 'object',
      label: 'Root table object (listTableObj)',
      // layout: 'horizontal',
      spec: [
        { id: 'id', type: 'string', title: 'Id (id)' },
        // Nested object...
        {
          id: 'nestedObject',
          type: 'object',
          label: 'Nested object (nestedObject)',
          // layout: 'horizontal',
          spec: [
            {
              id: 'testString',
              type: 'string',
              title: 'String (testString)',
              label: 'XXX Boolean String (testString)',
            },
            {
              id: 'testSelect',
              type: 'select',
              title: 'Select (testSelect)',
              selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
            },
            {
              id: 'testBoolean',
              type: 'boolean',
              title: 'Boolean (testBoolean)',
              label: 'XXX Boolean (testBoolean)',
            },
          ],
        },
        /*
        // { id: 'name', type: 'string', title: 'Name (name)' },
        { id: 'check', type: 'boolean', title: 'Check (check)' },
        {
          id: 'Choice',
          type: 'select',
          title: 'Select (Choice)',
          selectData: ['A', 'B', 'C', 'D'],
        },
        */
      ],
    },
  };
  const objListTableData = [
    // prettier-ignore
    { id: 'id 1', name: 'name 1', check: false, nestedObject: { testString: 'TEST', testBoolean: true, check: 1 } },
    { id: 'id 2', name: 'name 2', check: true },
  ];

  // Nested objects and lists...
  const objSpec: TEditableObjectSpec = {
    id: 'testObject',
    type: 'object',
    // title: 'Test object (testObject)',
    label: 'Object (testObject)',
    layout: 'vertical',
    spec: [
      // Scalar values...
      {
        id: 'testBoolean1',
        type: 'boolean',
        label: 'Boolean (testBoolean1)',
        title: 'Boolean (testBoolean1)',
      },
      { id: 'testString1', type: 'string', title: 'String (testString1)' },
      // Nested object...
      {
        id: 'nestedObject2',
        type: 'object',
        label: 'Nested object (nestedObject2)',
        // layout: 'horizontal',
        spec: [
          {
            id: 'testString2',
            type: 'string',
            title: 'String (testString2)',
            label: 'String (testString2)',
          },
          {
            id: 'testSelect1',
            type: 'select',
            title: 'Select (testSelect1)',
            selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
          },
        ],
      },
      // Nested list...
      {
        id: 'nestedStrList',
        type: 'list',
        title: 'Nested strings list (nestedStrList)',
        label: 'Nested strings list (nestedStrList)',
        // layout: 'horizontal',
        spec: {
          id: 'testString',
          type: 'string',
          // label: 'String (testString)',
          // title: 'String (testString)',
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
    <EditableList spec={strListSpec} data={strListData} onChange={onRootChange} />
    <GenericEditable spec={strListSpec} data={strListData} onChange={onRootChange} />
    <EditableTable spec={objListTableSpec} data={objListTableData} onChange={onRootChange} />
    <GenericEditable spec={strListSpec} data={strListData} onChange={onRootChange} />
    -->
    <GenericEditable spec={objListTableSpec} data={objListTableData} onChange={onRootChange} />
    <GenericEditable spec={objSpec} data={objData} onChange={onRootChange} />
  </div>
</div>

<style lang="scss">
  .DemoEditableObjects {
    padding: 20px;
  }
</style>
