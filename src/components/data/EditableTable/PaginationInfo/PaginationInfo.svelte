<script lang="ts">
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';

  import styles from './PaginationInfo.module.scss';

  export let paginationState: PaginationState;
  export let totalCount: number;

  const { pageIndex, pageCount } = paginationState;
</script>

<div class={styles.PaginationInfo}>
  Displayed page <strong>{$pageIndex + 1}</strong> out of <strong>{$pageCount}</strong> (records:
  <strong>{totalCount}</strong>)
</div>
