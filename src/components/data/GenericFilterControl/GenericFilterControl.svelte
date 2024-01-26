<script lang="ts">
  import styles from './GenericFilterControl.module.scss';
  import { FilterActionIcon } from './FilterActionIcon';
  import { TFilterParams, TOpenFilterCallback } from '@/src/core/types/editable/TFilterParams';

  // Filter parameters...
  export let filterValue: TFilterParams['filterValue']; // Writable<string>
  export let values: TFilterParams['values']; // Readable<string[]>

  // Column properties...
  export let id: TFilterParams['id']; // string
  export let filter: TFilterParams['filter']; // TFilterItem

  // Callback...
  export let onOpenFilter: TOpenFilterCallback;

  // Data...
  export let data: TFilterParams['data']; // ReadOrWritable<TEditableObjectData[]>

  $: isActive = !!$filterValue;

  function handleOpenFilterDialog() {
    const filterParams: TFilterParams = {
      id,
      filter,
      filterValue,
      values,
      data,
    };
    onOpenFilter(filterParams);
  }
</script>

<FilterActionIcon
  className={styles.FilterIcon}
  {isActive}
  toggleFilter={handleOpenFilterDialog}
  filterValue={$filterValue}
/>
