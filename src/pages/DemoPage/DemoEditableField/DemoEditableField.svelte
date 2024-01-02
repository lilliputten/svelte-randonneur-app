<script lang="ts">
  import { EditableField } from '@/src/components/data';
  import { TEditableFieldSpec } from '@/src/core/types/editable';
</script>

<div class="DemoEditableField">
  <h2>DemoEditableField</h2>
  <div>
    <!--
    // prettier-ignore
    -->
    <EditableField
      spec={{ id: 'testBoolean', type: 'boolean', title: 'Test boolean' }}
      value={false}
    />
    <EditableField spec={{ id: 'testString', type: 'string' }} />
    <EditableField spec={{ id: 'testNumber', type: 'number', title: 'Test number' }} value={1} />
    <EditableField
      spec={{
        id: 'testSelect',
        type: 'select',
        title: 'Test select',
        selectData: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 2 },
        ],
      }}
      value={2}
    />
    <hr />
  </div>
</div>

<style lang="scss">
  .DemoEditableField {
    padding: 20px;
  }
</style>
