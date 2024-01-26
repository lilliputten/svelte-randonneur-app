<script lang="ts">
  // import classNames from 'classnames';

  import styles from './GenericFilterControl.module.scss';
  import { FilterActionIcon } from './FilterActionIcon';
  // import { FilterTextInput } from './FilterTextInput';
  // import { FilterSelectInput } from './FilterSelectInput';
  import { TFilterParams, TOpenFilterCallback } from '@/src/core/types/editable/TFilterParams';

  // Filter parameters...
  export let filterValue: TFilterParams['filterValue']; // Writable<string>
  export let values: TFilterParams['values']; // Readable<string[]>

  // Column properties...
  export let id: TFilterParams['id']; // string
  export let filter: TFilterParams['filter']; // TFilterItem
  // export let colSpec: TGenericEditableSpec;

  // Callback...
  export let onOpenFilter: TOpenFilterCallback;

  // Data...
  export let data: TFilterParams['data']; // ReadOrWritable<TEditableObjectData[]>

  $: console.log('[GenericFilterControl]', id, {
    filter,
    $filterValue,
    $values,
  });

  $: isActive = !!$filterValue;

  // let isOpen = false;

  /* // DEBUG
   * const {
   *   // prettier-ignore
   *   type,
   *   title,
   *   label,
   * } = colSpec;
   * $: console.log('[GenericFilterControl]', type, id, filter, {
   *   $data,
   *   $filterValue,
   *   $values,
   *   filter,
   *   id,
   *   type,
   *   title,
   *   label,
   *   colSpec,
   * });
   */

  // let inputGroupElement: HTMLElement;

  function handleOpenFilterDialog() {
    const filterParams: TFilterParams = {
      id,
      filter,
      filterValue,
      values,
      data,
    };
    console.log('[GenericFilterControl:handleOpenFilterDialog]', id, {
      id,
      filterParams,
    });
    onOpenFilter(filterParams);
    /*
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
    */
  }
</script>

<FilterActionIcon
  className={styles.FilterIcon}
  {isActive}
  toggleFilter={handleOpenFilterDialog}
/>

<!--
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
      toggleFilter={handleOpenFilterDialog}
      large
    />
  </div>
{/if}
-->
