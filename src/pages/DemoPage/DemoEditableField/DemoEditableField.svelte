<script lang="ts">
  import { EditableField } from '@/src/components/data';
  import { TEditableFieldSpec } from '@/src/core/types/editable';

  // TODO: Render EditableField
  const specs: TEditableFieldSpec = {
    type: 'boolean',
  };
</script>

<div class="DemoEditableField">
  <h2>DemoEditableField</h2>
  <div>
    <EditableField
      specs={{ type: 'boolean', label: 'Test boolean' }}
      value={false}
    />
    <EditableField
      specs={{ type: 'string', label: 'Test string' }}
    />
    <EditableField
      specs={{ type: 'number', label: 'Test number' }}
      value={1}
    />
  </div>
</div>

<style lang="scss">
  .DemoEditableField {
    padding: 20px;
  }
</style>
