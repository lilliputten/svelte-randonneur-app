<script lang="ts">
  import { Writable } from 'svelte/store';
  import { TextInput } from '@svelteuidev/core';
  import classNames from 'classnames';

  import styles from './FilterTextInput.module.scss';

  export let className: string | undefined = undefined;

  // Filter parameters...
  export let filterValue: Writable<string>;
</script>

<TextInput
  class={classNames(className, styles.FilterTextInput)}
  bind:value={$filterValue}
  placeholder="Filter string"
/>
