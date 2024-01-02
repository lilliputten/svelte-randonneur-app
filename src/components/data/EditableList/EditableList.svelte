<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import {
    TEditableListSpec,
    TEditableListData,
    defaultDisplayLayout,
    TGenericEditableData,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  import { GenericEditable } from '../GenericEditable';

  type TOnChangeCallback = (data: TEditableListData, spec: TEditableListSpec) => void;

  export let spec: TEditableListSpec;
  export let data: TEditableListData = [];
  export let onChange: TOnChangeCallback | undefined = undefined;

  const { id, spec: itemSpec, layout } = spec;

  $: localList = [...data];

  console.log('[EditableList:DEBUG]', {
    spec,
    id,
    itemSpec,
    data,
    // EditableField,
  });

  const dispatch = createEventDispatcher();

  function triggerChange() {
    console.log('[EditableList:triggerChange]', {
      localList,
    });
    if (onChange) {
      onChange(localList, spec);
    }
    dispatch('change', { data: localList, spec });
  }

  function handleItemChange(
    idx: number,
    value: TGenericEditableData,
    itemSpec: TGenericEditableSpec,
  ) {
    const { id, type } = itemSpec;
    console.log('[EditableList:handleItemChange]', {
      idx,
      id,
      value,
      type,
      itemSpec,
    });
    localList[idx] = value;
    triggerChange();
  }
</script>

<div
  class="EditableList"
  data-layout={layout || defaultDisplayLayout}
  data-id={id}
  title={spec.title}
>
  {#if spec.label}
    <div class="EditableList_Label">
      {spec.label}
    </div>
  {/if}
  {#each localList as itemValue, idx}
    <GenericEditable spec={itemSpec} data={itemValue} onChange={handleItemChange.bind(null, idx)} />
  {/each}
</div>

<style lang="scss">
  .EditableList {
    &[data-layout='horizontal'] {
      border: 4px solid $demoColor;
    }
    .EditableList_Label {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }
  }
</style>
