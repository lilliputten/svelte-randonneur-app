<script lang="ts">
  import { Readable, Writable } from 'svelte/store';
  import { ReadOrWritable } from 'svelte-headless-table/lib/utils/store';
  import classNames from 'classnames';

  import {
    TEditableObjectData,
    TFilterItem,
    TGenericEditableSpec,
  } from '@/src/core/types/editable';

  /* import cssVariables from '@/src/core/assets/scss/variables.module.scss';
   * const { defaultInputHeight } = cssVariables;
   * const inputHeight = parseInt(defaultInputHeight);
   */

  import styles from './GenericFilter.module.scss';
  import { FilterActionIcon } from './FilterActionIcon';
  import { FilterTextInput } from './FilterTextInput';
  import { FilterSelectInput } from './FilterSelectInput';

  // Filter parameters...
  export let filterValue: Writable<string>;
  export let values: Readable<string[]>;

  // Column properties...
  export let id: string;
  export let colSpec: TGenericEditableSpec;
  export let filter: TFilterItem;

  // Data...
  export let data: ReadOrWritable<TEditableObjectData[]>;

  $: isActive = !!$filterValue;

  let isOpen = false;

  const {
    // prettier-ignore
    type,
    title,
    label,
  } = colSpec;

  $: console.log('[GenericFilter]', type, id, filter, {
    $data,
    $filterValue,
    $values,
    filter,
    id,
    type,
    title,
    label,
    colSpec,
  });

  let inputGroupElement: HTMLElement;

  function toggleOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      // Try to find input and focus it (with delay to update dom)...
      requestAnimationFrame(() => {
        // TODO: Use `requestAnimationFrame`?
        const input = inputGroupElement?.getElementsByTagName('input')[0];
        if (input) {
          input.focus();
        }
      });
    }
  }
</script>

<FilterActionIcon className={styles.FilterIcon} {isOpen} {isActive} toggleFilter={toggleOpen} />

{#if isOpen}
  <div class={classNames(styles.FilterControl, isActive && styles.active)}>
    <div class={styles.InputGroup} bind:this={inputGroupElement}>
      {#if filter === 'select'}
        <FilterSelectInput className={styles.Input} {filterValue} {values} {data} {id} />
      {:else}
        <FilterTextInput className={styles.Input} {filterValue} />
      {/if}
    </div>
    <FilterActionIcon
      className={styles.FilterIcon}
      {isOpen}
      {isActive}
      toggleFilter={toggleOpen}
      large
    />
  </div>
{/if}
<!--
<input
class={styles.GenericFilter}
  type="text"
  bind:value={$filterValue}
  on:click|stopPropagation
  placeholder="Search {$values.length} records..."
/>
-->
