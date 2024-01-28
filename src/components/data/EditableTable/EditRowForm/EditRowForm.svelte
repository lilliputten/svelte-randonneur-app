<script lang="ts">
  import { onMount } from 'svelte';
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

  let inputGroupElement: HTMLElement;

  function onOpen() {
    // Try to find input and focus it (with delay to update dom)...
    setTimeout(() => {
      requestAnimationFrame(() => {
        const input =
          inputGroupElement?.getElementsByTagName('input')[0] ||
          inputGroupElement?.getElementsByTagName('select')[0];
        if (input) {
          input.focus();
        }
      });
    }, 50);
  }

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

  onMount(onOpen);
</script>

<div
  class={classNames(className, styles.EditRowForm)}
  data-spec-id={spec.id}
  data-spec-row-idx={rowIdx}
>
  <div class={styles.Content} bind:this={inputGroupElement}>
    <GenericEditable {spec} data={localData} onChange={handleLocalChange} />
  </div>
  <div class={styles.Actions}>
    <div class={styles.ActionsLeft}>
      <Button class={styles.Action} color="red" variant="filled" on:click={handleRemove}>
        <Trash slot="leftIcon" />
        Remove
      </Button>
    </div>
    <div class={styles.ActionsRight}>
      <Button class={styles.Action} variant="default" on:click={onClose}>
        <Cross2 slot="leftIcon" />
        Cancel
      </Button>
      <Button class={styles.Action} color="green" variant="filled" on:click={handleSave}>
        <Check slot="leftIcon" />
        Save
      </Button>
    </div>
  </div>
</div>
