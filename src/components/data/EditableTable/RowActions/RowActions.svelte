<script lang="ts">
  import { ActionIcon } from '@svelteuidev/core';
  import { Trash } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { TEditableListSpec } from '@/src/core/types/editable';
  import cssVariables from '@/src/core/assets/scss/variables.module.scss';

  import styles from './RowActions.module.scss';

  const { defaultInputHeightPx } = cssVariables;
  const inputHeight = parseInt(defaultInputHeightPx);

  type TCallback = () => void;

  export let className: string | undefined = undefined;
  export let spec: TEditableListSpec;
  export let onRemoveRow: TCallback | undefined = undefined;

  const { hideRemoveButton } = spec;
</script>

<div class={classNames(className, styles.RowActions)}>
  {#if !hideRemoveButton}
    <ActionIcon
      class={styles.removeRowIcon}
      on:click={onRemoveRow}
      size={inputHeight}
      variant="hover"
      title="Remove row"
    >
      <Trash />
    </ActionIcon>
  {/if}
</div>
