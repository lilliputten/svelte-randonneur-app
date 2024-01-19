<script lang="ts">
  import { ActionIcon, NumberInput } from '@svelteuidev/core';
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';
  import { ArrowLeft, PinLeft, ArrowRight, PinRight } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import cssVariables from '@/src/core/assets/scss/variables.module.scss';

  import styles from './PaginationBlock.module.scss';

  export let paginationState: PaginationState;

  const { pageIndex, pageCount, pageSize, hasPreviousPage, hasNextPage } = paginationState;

  $: hasPagination = $hasPreviousPage || $hasNextPage;
  $: lastPage = $pageCount - 1;

  /* $: console.log('[PaginationBlock] state', {
   *   hasPagination,
   *   lastPage,
   *   $pageIndex,
   *   $pageCount,
   *   $pageSize,
   *   $hasPreviousPage,
   *   $hasNextPage,
   * });
   */

  const { defaultInputHeight } = cssVariables;
  const inputHeight = parseInt(defaultInputHeight);

  /** Show {showDiam} page icons before and after current one. */
  const showDiam = 2;
  $: showStart = Math.max(0, $pageIndex - showDiam);
  $: showEnd = Math.min(lastPage, $pageIndex + showDiam);
  $: showCount = showEnd - showStart + 1;

  /* $: console.log('[PaginationBlock] show', {
   *   showStart,
   *   showEnd,
   *   showCount,
   * });
   */

  function goToPage(no: number) {
    $pageIndex = no;
    // pageIndex.set(no);
  }
  function goToPageCb(no: number) {
    return goToPage.bind(null, no);
  }
</script>

<div class={classNames(styles.Icons, hasPagination && styles.hasPagination)}>
  <ActionIcon
    class={classNames(styles.Icon, styles.IconGoTo)}
    size={inputHeight}
    variant="light"
    title="First page"
    disabled={$pageIndex === 0}
    on:click={goToPageCb(0)}
  >
    <PinLeft />
  </ActionIcon>
  <ActionIcon
    class={classNames(styles.Icon, styles.IconGoTo)}
    size={inputHeight}
    variant="light"
    title="Previous page"
    disabled={!$hasPreviousPage}
    on:click={() => $pageIndex--}
  >
    <ArrowLeft />
  </ActionIcon>

  {#if showStart > 0}
    <div class={styles.Info}>...</div>
  {/if}

  {#each { length: showCount } as _, n}
    <ActionIcon
      class={classNames(
        styles.Icon,
        styles.IconPage,
        showStart + n === $pageIndex && styles.IconCurrent,
      )}
      size={inputHeight}
      variant={showStart + n === $pageIndex && styles.IconCurrent ? 'filled' : 'default'}
      title={'Page ' + (showStart + n + 1)}
      on:click={goToPageCb(showStart + n)}
    >
      {showStart + n + 1}
    </ActionIcon>
  {/each}

  {#if showEnd < lastPage}
    <div class={styles.Info}>...</div>
  {/if}

  <ActionIcon
    class={classNames(styles.Icon, styles.IconGoTo)}
    size={inputHeight}
    variant="light"
    title="Next page"
    disabled={!$hasNextPage}
    on:click={() => $pageIndex++}
  >
    <ArrowRight />
  </ActionIcon>
  <ActionIcon
    class={classNames(styles.Icon, styles.IconGoTo)}
    size={inputHeight}
    variant="light"
    title="Last page"
    disabled={$pageIndex === lastPage}
    on:click={goToPageCb(lastPage)}
  >
    <PinRight />
  </ActionIcon>
</div>
<div class={styles.Controls}>
  <label for="pageSize">Page size:</label>
  <NumberInput
    class={styles.pageSize}
    id="pageSize"
    min={1}
    bind:value={$pageSize}
    placeholder="Page size"
  />
</div>
