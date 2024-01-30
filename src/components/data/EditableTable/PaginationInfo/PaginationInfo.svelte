<script lang="ts">
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';

  import styles from './PaginationInfo.module.scss';

  export let paginationState: PaginationState;
  export let totalCount: number;

  const { pageIndex, pageCount, pageSize } = paginationState;

  $: totalPagesCount = Math.ceil(totalCount / $pageSize);
</script>

<div class={styles.PaginationInfo}>
  {#if $pageCount}
    Displayed page <strong>{$pageIndex + 1}</strong> out of <strong>{$pageCount}</strong>
  {:else}
    Nothing to display
  {/if}
  {#if totalCount}
  (total {#if totalPagesCount !== $pageCount}pages: <strong>{totalPagesCount}</strong>,
  {/if} records:
  <strong>{totalCount}</strong>)
  {/if}
</div>
