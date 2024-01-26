<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { Check, Trash, Cross2 } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import {
    TGenericEditableSpec,
    TEditableObjectData,
    TGenericEditableData,
  } from '@/src/core/types/editable';
  import {
    GenericEditable,
    TGenericEditableOnChangeCallback,
  } from '@/src/components/data/GenericEditable';

  import styles from './EditRowForm.module.scss';

  type TOnChangeCallback = TGenericEditableOnChangeCallback;

  // External parameters...
  export let className: string | undefined = undefined;
  // export let listSpec: TEditableListSpec | undefined = undefined;
  export let rowIdx: number;
  export let spec: TGenericEditableSpec;
  export let data: TEditableObjectData = {};
  export let onChange: TOnChangeCallback;
  export let onClose: () => void;
  export let onRemove: (rowIdx: number) => void;

  let localData: TEditableObjectData = data;

  function handleLocalChange(data: TGenericEditableData, _spec: TGenericEditableSpec) {
    localData = data as TEditableObjectData;
  }
  function handleSave() {
    onChange(localData, spec);
    onClose();
  }
  function handleRemove() {
    onRemove(rowIdx);
    onClose();
  }
</script>

<div
  class={classNames(className, styles.EditRowForm)}
  data-spec-id={spec.id}
  data-spec-row-idx={rowIdx}
>
  <div class={styles.Content}>
    <GenericEditable {spec} data={localData} onChange={handleLocalChange} />
  </div>
  <div class={styles.Actions}>
    <div class={styles.ActionsLeft}>
      <Button class={styles.Action} color="green" variant="filled" on:click={handleSave}>
        <Check slot="leftIcon" />
        Save
      </Button>
      <Button class={styles.Action} variant="filled" on:click={onClose}>
        <Cross2 slot="leftIcon" />
        Cancel
      </Button>
    </div>
    <div class={styles.ActionsRight}>
      <Button class={styles.Action} color="red" variant="filled" on:click={handleRemove}>
        <Trash slot="leftIcon" />
        Remove
      </Button>
    </div>
  </div>
</div>
