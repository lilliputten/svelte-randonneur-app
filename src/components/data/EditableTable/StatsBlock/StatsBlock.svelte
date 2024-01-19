<script lang="ts">
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';

  export let paginationState: PaginationState;

  const {
    pageIndex,
    pageCount,
    // pageSize,
    // hasPreviousPage,
    // hasNextPage,
  } = paginationState;

  /* $: console.log('[StatsBlock] state', {
   *   $pageIndex,
   *   $pageCount,
   *   $pageSize,
   *   $hasPreviousPage,
   *   $hasNextPage,
   * });
   */
</script>

Displayed page <strong>{$pageIndex + 1}</strong> out of <strong>{$pageCount}</strong>
