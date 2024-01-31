<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Switch, TextInput, NumberInput, NativeSelect } from '@svelteuidev/core';
  import classNames from 'classnames';

  import { TEditableFieldSpec, TEditableFieldData } from '@/src/core/types/editable';
  import { DateInput } from '@/src/components/forms/DateInput';

  import styles from './EditableField.module.scss';

  /* // Old approach (unused): Store self refernece in the local registry to avoild cyrcular dependencies (NOTE: The component should be REALLY used)
   * import EditableField from './EditableField.svelte';
   * import { TComponent, registryStore } from '../registry';
   * registryStore.update((registry) => {
   *   return { ...registry, EditableField };
   * });
   */

  type TOnChangeCallback = (value: TEditableFieldData, spec: TEditableFieldSpec) => void;

  // External parameters...
  export let className: string | undefined = undefined;
  export let spec: TEditableFieldSpec;
  export let value: TEditableFieldData = undefined;
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, type } = spec;

  /* $: console.log('[EditableField]', type, id, {
   *   value,
   *   type,
   *   id,
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
    } else if (type === 'number' || type === 'date') {
      if ('detail' in ev) {
        value = ev.detail;
      }
      // TODO: Check for error otherwise?
    } else if (type === 'select') {
      value = target.value;
    }
    if (onChange) {
      onChange(value, spec);
    }
    dispatch('change', {
      value,
      spec,
    });
  }
</script>

<div
  class={classNames(className, styles.EditableField)}
  data-id={id}
  data-type={spec.type}
  title={spec.title}
>
  {#if type === 'boolean'}
    <Switch class={styles.Switch} checked={!!value} label={spec.label} on:change={handleChange} />
  {:else if type === 'string'}
    <TextInput {value} label={spec.label} placeholder={spec.title} on:change={handleChange} />
  {:else if type === 'date'}
    <DateInput
      label={spec.label}
      placeholder={spec.title}
      value={String(value)}
      on:change={handleChange}
    />
  {:else if type === 'number'}
    <NumberInput
      value={value != null ? Number(value) : undefined}
      label={spec.label}
      placeholder={spec.title}
      on:change={handleChange}
      hideControls
    />
  {:else if type === 'select'}
    <NativeSelect
      data={spec.selectData}
      value={value || ''}
      label={spec.label}
      placeholder={spec.title}
      on:change={handleChange}
    />
  {/if}
</div>
