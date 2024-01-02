<script lang="ts">
  import { Switch, TextInput, NumberInput, NativeSelect } from '@svelteuidev/core';

  import { TEditableFieldSpec, TEditableValueScalar } from '@/src/core/types/editable';

  // TODO: Create typings, render EditableField internals

  type TOnChangeCallback = (value: TEditableValueScalar, spec: TEditableFieldSpec) => void;
  export let spec: TEditableFieldSpec;
  export let value: TEditableValueScalar = undefined;
  export let onChange: TOnChangeCallback | undefined = undefined;

  $: type = spec.type;

  // TODO: Store local value copy?

  function handleChange(ev: CustomEvent<number> | Event) {
    const target = ev.target as HTMLInputElement;
    let value: TEditableValueScalar;
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
      // TODO: Preserve option for numeric keys?
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
  }
</script>

<div class="EditableField" title={spec.title}>
  <!--
  <h2>DemoEditable</h2>
  <div>type: {type}</div>
  <div>value: {value}</div>
  -->
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

<style lang="scss">
</style>
