<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
  import { Check, MagnifyingGlass } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { defaultInputHeightPx } from '@/src/core/constants/app/parsedCssVariables';

  import styles from './FilterActionIcon.module.scss';

  export let className: string | undefined = undefined;
  export let toggleFilter: () => void;

  export let isOpen: boolean = false;
  export let isActive: boolean = false;
  export let large: boolean = false;

  const title = isOpen ? 'Close and apply filter' : 'Show filter';
</script>

<ActionIcon
  class={classNames(
    className,
    styles.FilterActionIcon,
    isActive && styles.active,
    isOpen && styles.open,
  )}
  {title}
  on:click={toggleFilter}
  size={large ? defaultInputHeightPx : undefined}
>
  {#if isOpen}
    <Check />
  {:else}
    <MagnifyingGlass />
  {/if}
</ActionIcon>
