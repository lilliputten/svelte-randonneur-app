<script lang="ts">
  import { EditableObject } from '@/src/components/data';
  import {
    TEditableFieldSpec,
    TEditableObjectData,
    TEditableObjectSpec,
  } from '@/src/core/types/editable';

  const objSpec: TEditableObjectSpec = {
    id: 'testObject',
    type: 'object',
    title: 'Test object',
    label: 'Test object',
    layout: 'vertical',
    // label:
    // displayLayout: 'vertical',
    specs: [
      { id: 'testBoolean', type: 'boolean', label: 'Test boolean', title: 'Test boolean' },
      { id: 'testString1', type: 'string', title: 'String 1' },
      {
        id: 'testObject2',
        type: 'object',
        label: 'Test object2',
        layout: 'horizontal',
        specs: [
          { id: 'testString2', type: 'string' },
          {
            id: 'testSelect',
            type: 'select',
            title: 'Test select',
            selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
          },
        ],
      },
    ],
  };

  const objData = {
    // testString1: 'testString1',
  };

  function onObjChange(data: TEditableObjectData, spec: TEditableObjectSpec) {
    console.log('[DemoEditableObjects:onObjChange]', {
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
    <EditableObject spec={objSpec} data={objData} onChange={onObjChange} />
    <hr />
  </div>
</div>

<style lang="scss">
  .DemoEditableObjects {
    padding: 20px;
  }
</style>
