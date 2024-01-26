<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
  import { MagnifyingGlass } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { defaultInputHeightPx } from '@/src/core/constants/app/parsedCssVariables';

  import styles from './FilterActionIcon.module.scss';

  export let className: string | undefined = undefined;
  export let toggleFilter: () => void;

  export let isActive: boolean = false;
  export let large: boolean = false;

  export let filterValue: string = '';

  $: title = isActive ? `Update filter conditions (${filterValue})` : 'Set filter conditions';
</script>

<ActionIcon
  class={classNames(className, styles.FilterActionIcon, isActive && styles.active)}
  {title}
  on:click={toggleFilter}
  size={large ? defaultInputHeightPx : undefined}
>
  <MagnifyingGlass />
</ActionIcon>
