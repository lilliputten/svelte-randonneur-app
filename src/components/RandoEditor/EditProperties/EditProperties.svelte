<script lang="ts">
  import { propertiesDataSpec } from '@/src/core/constants/rando';
  import { randoPropertiesStore } from '@/src/store';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { GenericEditable } from '@/src/components/data';

  console.log('[EditProperties] DEBUG', {
    $randoPropertiesStore,
    propertiesDataSpec,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[EditProperties:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
  }
</script>

<div class="EditProperties">
  <GenericEditable spec={propertiesDataSpec} data={$randoPropertiesStore} {onChange} />
</div>

<style src="./EditProperties.scss" lang="scss"></style>
