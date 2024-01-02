<script lang="ts">
  import { Switch, TextInput } from '@svelteuidev/core';

  import { TEditableFieldSpec, TEditableValueType, TEditableValueScalar } from '@/src/core/types/editable';

  // TODO: Create typings, render EditableField internals

  type TOnChangeCallback = (value: TEditableValueScalar) => void;
  export let specs: TEditableFieldSpec;
  export let value: TEditableValueScalar = undefined;
  export let onChange: TOnChangeCallback | undefined = undefined;

  $: type = specs.type;
  // $: isList = specs.isList;

  // TODO: Store local value copy?

  function handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    let value: TEditableValueScalar;
    if (type === 'boolean') {
      value = !!target.checked;
    } else if (type === 'string') {
      value = target.value;
    } else if (type === 'number') {
      value = Number(target.value);
    }
    console.log('[EditableField:handleChange]', {
      target,
      ev,
      value,
    });
    if (onChange) {
      onChange(value);
    }
  }
</script>

<div class="DemoEditable">
  <h2>DemoEditable</h2>
  <div>type: {type}</div>
  <div>value: {value}</div>
  {#if type === 'boolean'}
    <!-- TODO:
      - Use text for label
    -->
    <Switch
      checked={!!value}
      label={specs.label}
      on:change={handleChange}
     />
  {:else if type === 'string'}
    <TextInput
      {value}
      label={specs.label}
      on:change={handleChange}
    />
  {:else if type === 'number'}
    <TextInput
      {value}
      label={specs.label}
      on:change={handleChange}
    />
  {/if}
</div>

<style lang="scss">
</style>
