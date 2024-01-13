<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import classNames from 'classnames';

  import {
    TEditableObjectSpec,
    TEditableObjectData,
    defaultDisplayLayout,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';

  import styles from './EditableObject.module.scss';

  type TOnChangeCallback = (data: TEditableObjectData, spec: TEditableObjectSpec) => void;

  // External parameters...
  export let className: string | undefined = undefined;
  export let spec: TEditableObjectSpec;
  export let data: TEditableObjectData = {};
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, spec: fieldsSpec, layout } = spec;

  $: localData = { ...data };

  /* console.log('[EditableObject:DEBUG]', {
   *   spec,
   *   id,
   *   fieldsSpec,
   *   data,
   * });
   */

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
  class={classNames(className, styles.EditableObject)}
  data-layout={layout || defaultDisplayLayout}
  data-id={id}
  title={spec.title}
>
  {#if spec.label}
    <div class={styles.EditableObject_Label}>
      {spec.label}
    </div>
  {/if}
  {#each fieldsSpec as item}
    <GenericEditable spec={item} data={data[item.id]} onChange={handleItemChange} />
  {/each}
</div>
