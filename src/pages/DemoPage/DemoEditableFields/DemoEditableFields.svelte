<script lang="ts">
  import { EditableField } from '@/src/components/data';
</script>

<div class="DemoEditableFields">
  <h2>DemoEditableFields</h2>
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
        selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
      }}
      value={'C'}
    />
    <hr />
  </div>
</div>

<style lang="scss">
  .DemoEditableFields {
    padding: 20px;
  }
</style>
