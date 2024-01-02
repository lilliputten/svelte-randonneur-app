<script lang="ts">
  import { SvelteComponent, createEventDispatcher } from 'svelte';

  import {
    TEditableObjectSpec,
    TEditableValueScalar,
    TEditableObjectData,
    TEditableFieldSpec,
    defaultDisplayLayout,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';

  /* // Store self refernece in the local registry to avoild cyrcular dependencies (NOTE: The component should be readlly used)
   * import EditableObject from './EditableObject.svelte';
   * import { TComponent, registryStore } from '../registry';
   * registryStore.update((registry) => ({ ...registry, EditableObject }));
   */

  type TOnChangeCallback = (data: TEditableObjectData, spec: TEditableObjectSpec) => void;

  export let spec: TEditableObjectSpec;
  export let data: TEditableObjectData = {};
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, spec: fieldsSpec, layout } = spec;

  $: localData = { ...data };

  console.log('[EditableObject:DEBUG]', {
    spec,
    id,
    fieldsSpec,
    data,
  });

  const dispatch = createEventDispatcher();

  function triggerChange() {
    console.log('[EditableObject:triggerChange]', {
      localData,
    });
    if (onChange) {
      onChange(localData, spec);
    }
    dispatch('change', { data: localData, spec });
  }

  function handleItemChange(value: TGenericEditableData, itemSpec: TGenericEditableSpec) {
    const { id, type } = itemSpec;
    console.log('[EditableObject:handleItemChange]', {
      id,
      value,
      type,
      itemSpec,
    });
    localData[id] = value;
    triggerChange();
  }
</script>

<div
  class="EditableObject"
  data-layout={layout || defaultDisplayLayout}
  data-id={id}
  title={spec.title}
>
  {#if spec.label}
    <div class="EditableObject_Label">
      {spec.label}
    </div>
  {/if}
  {#each fieldsSpec as item}
    <GenericEditable spec={item} data={data[item.id]} onChange={handleItemChange} />
  {/each}
</div>

<style lang="scss">
  .EditableObject {
    &[data-layout='horizontal'] {
      border: 4px solid $demoColor;
    }
    .EditableObject_Label {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }
  }
</style>
