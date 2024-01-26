<script lang="ts">
  import classNames from 'classnames';

  import styles from './GenericFilterDialog.module.scss';
  import { FilterActionIcon } from './FilterActionIcon';
  import { FilterTextInput } from './FilterTextInput';
  import { FilterSelectInput } from './FilterSelectInput';
  import { TFilterParams, TOpenFilterCallback } from '@/src/core/types/editable/TFilterParams';

  // Filter parameters...
  export let filterParams: TFilterParams;

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
</script>

<div class={classNames(styles.FilterControl, isActive && styles.active)}>
  <div class={styles.InputGroup} bind:this={inputGroupElement}>
    {#if filter === 'select'}
      <FilterSelectInput className={styles.Input} {filterValue} {values} {data} {id} />
    {:else}
      <FilterTextInput className={styles.Input} {filterValue} />
    {/if}
  </div>
</div>
