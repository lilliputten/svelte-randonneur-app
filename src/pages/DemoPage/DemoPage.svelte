<script lang="ts">
  // import { DemoEditableFields } from './DemoEditableFields';
  // import { DemoEditableTable } from './DemoEditableTable';
  // import { DemoEditableObjects } from './DemoEditableObjects';
  // import { DemoDates } from './DemoDates';
  // import { DemoEditProperties } from './DemoEditProperties';
  // import { DemoEditDataSet } from './DemoEditDataSet'; // 2024.01.19, 16:00
  import { DemoTableWithPagination } from './DemoTableWithPagination'; // 2024.01.19, 21:20

  // import styles from './DemoPage.module.scss';
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<div class="DemoPage">
  <div class="container scrollable">
    <div class="content">
      <!--
      <DemoEditableFields />
      <DemoTable />
      <DemoEditableTable />
      <DemoDates />
      <DemoEditableObjects />
      <DemoEditProperties />
      <DemoEditDataSet />
      -->
      <DemoTableWithPagination />
    </div>
  </div>
</div>

<style src="./DemoPage.scss" lang="scss"></style>
