<script lang="ts">
  import { PaginationState } from 'svelte-headless-table/lib/plugins/addPagination';

  import styles from './StatsBlock.module.scss';

  export let paginationState: PaginationState;

  const { pageIndex, pageCount } = paginationState;
</script>

<div class={styles.StatsBlock}>
  Displayed page <strong>{$pageIndex + 1}</strong> out of <strong>{$pageCount}</strong>
</div>
