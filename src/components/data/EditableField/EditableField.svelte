<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Switch, TextInput, NumberInput, NativeSelect } from '@svelteuidev/core';

  import { TEditableFieldSpec, TEditableFieldData } from '@/src/core/types/editable';

  import { EditableObject } from '../EditableObject';

  /* // Store self refernece in the local registry to avoild cyrcular dependencies (NOTE: The component should be readlly used)
   * import EditableField from './EditableField.svelte';
   * import { TComponent, registryStore } from '../registry';
   * registryStore.update((registry) => {
   *   return { ...registry, EditableField };
   * });
   */

  type TOnChangeCallback = (value: TEditableFieldData, spec: TEditableFieldSpec) => void;
  export let spec: TEditableFieldSpec;
  export let value: TEditableFieldData = undefined;
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, type } = spec;

  /* console.log('[EditableField:DEBUG]', {
   *   id,
   *   type,
   *   spec,
   *   value,
   *   EditableObject,
   * });
   */

  const dispatch = createEventDispatcher();

  // TODO: Store local value copy?

  function handleChange(ev: CustomEvent<number> | Event) {
    const target = ev.target as HTMLInputElement;
    let value: TEditableFieldData;
    if (type === 'boolean') {
      value = !!target.checked;
    } else if (type === 'string') {
      value = target.value;
    } else if (type === 'number') {
      if ('detail' in ev) {
        value = ev.detail;
      }
      // TODO: Check for error otherwise?
    } else if (type === 'select') {
      value = target.value;
    }
    /* console.log('[EditableField:handleChange]', {
     *   target,
     *   ev,
     *   value,
     * });
     */

    if (onChange) {
      onChange(value, spec);
    }
    dispatch('change', {
      value,
      spec,
    });
  }
</script>

<div class="EditableField" data-id={id} title={spec.title}>
  {#if type === 'boolean'}
    <Switch checked={!!value} label={spec.label} on:change={handleChange} />
  {:else if type === 'string'}
    <TextInput {value} label={spec.label} placeholder={spec.title} on:change={handleChange} />
  {:else if type === 'number'}
    <NumberInput
      value={Number(value)}
      label={spec.label}
      placeholder={spec.title}
      on:change={handleChange}
    />
  {:else if type === 'select'}
    <NativeSelect
      data={spec.selectData}
      {value}
      label={spec.label}
      placeholder={spec.title}
      on:change={handleChange}
    />
  {/if}
</div>
