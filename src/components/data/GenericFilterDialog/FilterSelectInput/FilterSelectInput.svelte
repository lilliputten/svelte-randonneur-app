<!-- svelte-ignore unused-export-let -->

<script lang="ts">
  import { Readable, Writable } from 'svelte/store';
  import { NativeSelect, SelectItem } from '@svelteuidev/core';
  import { ReadOrWritable } from 'svelte-headless-table/lib/utils/store';
  import classNames from 'classnames';

  import { TEditableObjectData } from '@/src/core/types/editable';

  import styles from './FilterSelectInput.module.scss';

  export let className: string | undefined = undefined;

  // Filter parameters...
  export let filterValue: Writable<string>;
  export let values: Readable<string[]>; // Reserved!

  // Column properties...
  export let id: string;

  // Data...
  export let data: ReadOrWritable<TEditableObjectData[]>;

  $: columnData = getColumnData($data);
  // const optionsData = getOptionsData($values);
  $: optionsData = getOptionsData(columnData);

  function getOptionsData(values: unknown[]): SelectItem[] {
    // values = [...values];
    // Create flat list (it's possible to have `[...]` for items
    let list = values
      .flat()
      .filter(Boolean)
      // Leave only unique values...
      .filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
    list.sort();
    // Create extended options (list of a pairs of label and value)...
    const itemsList: SelectItem[] = list.map((id) => ({
      label: id as string,
      value: id as string,
    }));
    // Add default item (to reset filter)...
    const defaultOptionName = 'Select filter value';
    itemsList.unshift({ label: defaultOptionName, value: '' });
    return itemsList;
  }

  function getColumnData(data: TEditableObjectData[]) {
    const colData = data.map((row) => {
      return row[id];
    });
    return colData;
  }
</script>

<NativeSelect
  class={classNames(className, styles.FilterSelectInput)}
  data={optionsData}
  bind:value={$filterValue}
  placeholder="Filter by value"
/>
