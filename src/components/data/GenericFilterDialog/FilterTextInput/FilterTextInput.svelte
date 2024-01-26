<script lang="ts">
  import { Readable, Writable } from 'svelte/store';
  import { TextInput } from '@svelteuidev/core';
  import classNames from 'classnames';

  import styles from './FilterTextInput.module.scss';

  export let className: string | undefined = undefined;

  // Filter parameters...
  export let filterValue: Writable<string>;
  // export let values: Readable<string[]>;
</script>

<TextInput
  class={classNames(className, styles.FilterTextInput)}
  bind:value={$filterValue}
  placeholder="Filter string"
/>
<!--
<input
  class={classNames(className, styles.FilterTextInput)}
  type="text"
  bind:value={$filterValue}
  on:click|stopPropagation
  placeholder="Search {$values.length} records..."
/>
-->
