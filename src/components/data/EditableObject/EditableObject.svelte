<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import {
    TEditableObjectSpec,
    TEditableValueScalar,
    TEditableObjectData,
    TEditableFieldSpec,
    defaultDisplayLayout,
  } from '@/src/core/types/editable';
  import { EditableField } from '../EditableField';

  // TODO: Create typings, render EditableObject internals

  type TOnChangeCallback = (data: TEditableObjectData, spec: TEditableObjectSpec) => void;
  export let spec: TEditableObjectSpec;
  export let data: TEditableObjectData = {};
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, specs, layout } = spec;
  // $: id = spec.id;
  // $: specs = spec.specs;

  $: localData = { ...data };

  console.log('[EditableObject:DEBUG 1]', {
    spec,
    id,
    specs,
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

  function handleFieldChange(value: TEditableValueScalar, fieldSpec: TEditableFieldSpec) {
    const { id } = fieldSpec;
    console.log('[EditableObject:handleFieldChange]', {
      id,
      value,
    });
    localData[id] = value;
    triggerChange();
  }

  function handleObjectChange(data: TEditableObjectData, objectSpec: TEditableObjectSpec) {
    const { id } = objectSpec;
    console.log('[EditableObject:handleObjectChange]', {
      id,
      data,
    });
    localData[id] = data;
    triggerChange();
  }

  /* function handleChange(ev: CustomEvent<number> | Event) {
   *   const target = ev.target as HTMLInputElement;
   *   let value: TEditableValueScalar;
   *   if (type === 'boolean') {
   *     value = !!target.checked;
   *   } else if (type === 'string') {
   *     value = target.value;
   *   } else if (type === 'number') {
   *     if ('detail' in ev) {
   *       value = ev.detail;
   *     }
   *     // TODO: Check for error otherwise?
   *   } else if (type === 'select') {
   *     value = target.value;
   *   }
   *   console.log('[EditableObject:handleChange]', {
   *     target,
   *     ev,
   *     value,
   *   });
   *   if (onChange) {
   *     onChange(value, spec);
   *   }
   * }
   */
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
  {#each specs as item}
    {#if item.type === 'object'}
      <svelte:self spec={item} data={data[item.id]} onChange={handleObjectChange} />
    {:else}
      <EditableField spec={item} value={data[item.id]} onChange={handleFieldChange} />
    {/if}
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
