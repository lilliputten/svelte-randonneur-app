<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
  import { Plus } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import cssVariables from '@/src/core/assets/scss/variables.module.scss';

  import styles from './HeaderActions.module.scss';

  const { defaultInputHeightPx } = cssVariables;
  const inputHeight = parseInt(defaultInputHeightPx);

  type TCallback = () => void;

  export let className: string | undefined = undefined;
  export let onAddRow: TCallback | undefined = undefined;
</script>

<div class={classNames(className, styles.HeaderActions)}>
  <ActionIcon
    class={styles.addRowIcon}
    on:click={onAddRow}
    size={inputHeight}
    variant="hover"
    title="Add row"
  >
    <Plus />
  </ActionIcon>
</div>
