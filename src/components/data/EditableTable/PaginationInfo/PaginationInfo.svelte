<script lang="ts">
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';

  import styles from './PaginationInfo.module.scss';

  export let paginationState: PaginationState;
  /** Total records count */
  export let totalCount: number;

  const {
    /** Filtered records count store */
    itemCount,
    // NOTE: We're using patch to have access to items count store. see:
    // `node_modules/svelte-headless-table/plugins/addPagination.js`,
    // `node_modules/svelte-headless-table/lib/plugins/addPagination.d.ts`.

    /** Filtered pages count store */
    pageCount,

    /** Current page index */
    pageIndex,

    /** Page size */
    pageSize,
  } = paginationState;

  $: totalPagesCount = Math.ceil(totalCount / $pageSize);

  $: showTotalPages = totalPagesCount !== $pageCount;
  $: showTotalRecords = $itemCount !== totalCount;
</script>

<div class={styles.PaginationInfo}>
  {#if $pageCount}
    Displayed page <strong>{$pageIndex + 1}</strong> out of <strong>{$pageCount}</strong>, records:
    <strong>{$itemCount}</strong>
  {:else}
    Nothing to display
  {/if}
  {#if totalCount && (showTotalPages || showTotalRecords)}
    (total
    {#if showTotalPages}pages: <strong>{totalPagesCount}</strong
      >{/if}{#if showTotalPages && showTotalRecords},
    {/if}
    {#if showTotalRecords}records: <strong>{totalCount}</strong>{/if})
  {/if}
</div>
