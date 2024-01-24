<script lang="ts">
  /* eslint-disable @typescript-eslint/no-unused-vars */

  // Import all the demo components...

  // import { DemoEditableFields } from './DemoEditableFields';
  // import { DemoEditableTable } from './DemoEditableTable';
  // import { DemoEditableObjects } from './DemoEditableObjects';
  // import { DemoDates } from './DemoDates';
  import { DemoEditProperties } from './DemoEditProperties'; // 2024.01.24, 16:45
  import { DemoEditDataSet } from './DemoEditDataSet'; // 2024.01.24, 15:58
  // import { DemoTableWithPagination } from './DemoTableWithPagination'; // 2024.01.23
  import { DemoTableWithFilters } from './DemoTableWithFilters'; // 2024.01.24, 15:58

  /* eslint-enable @typescript-eslint/no-unused-vars */

  // TODO: Add demo page selector
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
      <DemoTableWithPagination />
      <DemoEditDataSet />
      <DemoTableWithFilters />
      -->
      <DemoEditProperties />
    </div>
  </div>
</div>

<style src="./DemoPage.scss" lang="scss"></style>
