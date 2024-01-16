<script lang="ts">
  import { propertiesDataSpec } from '@/src/core/constants/rando';
  import { randoPropertiesStore } from '@/src/store';
  import { TGenericEditableData, TGenericEditableSpec } from '@/src/core/types/editable';
  import { GenericEditable } from '@/src/components/data';
  import { extendPropertiesSpec } from '@/src/core/helpers/rando';
  import { TRandoPropertiesSlot } from '@/src/core/types/rando';

  const propertiesSpec = { ...propertiesDataSpec };

  extendPropertiesSpec(propertiesSpec);

  $: console.log('[EditProperties] DEBUG', {
    $randoPropertiesStore,
    propertiesSpec,
  });

  function onChange(data: TGenericEditableData, spec: TGenericEditableSpec) {
    console.log('[EditProperties:onChange]', spec.id, {
      id: spec.id,
      data,
      spec,
    });
    // TODO: Update data
    randoPropertiesStore.set(data as TRandoPropertiesSlot);
  }
</script>

<div class="EditProperties">
  <GenericEditable spec={propertiesSpec} data={$randoPropertiesStore} {onChange} />
</div>

<style src="./EditProperties.scss" lang="scss"></style>
