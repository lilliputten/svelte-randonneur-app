<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '@svelteuidev/core';
  import { Check, Cross2 } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import styles from './GenericFilterDialog.module.scss';
  import { FilterTextInput } from './FilterTextInput';
  import { FilterSelectInput } from './FilterSelectInput';
  import { TFilterParams } from '@/src/core/types/editable/TFilterParams';

  // Filter parameters...
  export let filterParams: TFilterParams;
  export let onClose: TOpenFilterCallback;
  export let onReset: TOpenFilterCallback;

  $: id = filterParams.id;
  $: filter = filterParams.filter;
  $: filterValue = filterParams.filterValue;
  $: values = filterParams.values;
  $: data = filterParams.data;

  $: console.log('[GenericFilterDialog]', id, {
    id,
    filter,
    $filterValue,
    $values,
    $data,
  });

  $: isActive = !!$filterValue;

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

  function handleClose() {
    onClose(filterParams);
  }

  function handleReset() {
    onReset(filterParams);
    handleClose();
  }

  onMount(onOpen);
</script>

<div class={classNames(styles.GenericFilterDialog, isActive && styles.active)}>
  <div class={styles.InputGroup} bind:this={inputGroupElement}>
    {#if filter === 'select'}
      <FilterSelectInput className={styles.Input} {filterValue} {values} {data} {id} />
    {:else}
      <FilterTextInput className={styles.Input} {filterValue} />
    {/if}
  </div>
  <div class={styles.Actions}>
    <div class={styles.ActionsLeft}>
      <Button class={styles.Action} color="green" variant="filled" on:click={handleClose}>
        <Check slot="leftIcon" />
        Ok
      </Button>
      <Button class={styles.Action} color="red" variant="filled" on:click={handleReset}>
        <Cross2 slot="leftIcon" />
        Reset filter
      </Button>
    </div>
  </div>
</div>
