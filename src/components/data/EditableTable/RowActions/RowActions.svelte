<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
  import { Trash } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import cssVariables from '@/src/core/assets/scss/variables.module.scss';

  import styles from './RowActions.module.scss';

  const { defaultInputHeight } = cssVariables;
  const inputHeight = parseInt(defaultInputHeight);

  type TCallback = () => void;

  export let className: string | undefined = undefined;
  export let onRemoveRow: TCallback | undefined = undefined;
</script>

<div class={classNames(className, styles.RowActions)}>
  <ActionIcon
    class={styles.removeRowIcon}
    on:click={onRemoveRow}
    size={inputHeight}
    variant="hover"
    title="Remove row"
  >
    <Trash />
  </ActionIcon>
</div>
