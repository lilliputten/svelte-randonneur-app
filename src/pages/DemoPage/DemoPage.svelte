<script lang="ts">
  /* eslint-disable @typescript-eslint/no-unused-vars */

  // Import all the demo components...

  import { DemoEditableFields } from './DemoEditableFields';
  import { DemoEditableTable } from './DemoEditableTable';
  import { DemoEditableObjects } from './DemoEditableObjects'; // 2024.01.25, 23:30
  import { DemoDates } from './DemoDates';
  import { DemoEditProperties } from './DemoEditProperties'; // 2024.01.24, 16:45
  import { DemoEditDataSet } from './DemoEditDataSet'; // 2024.01.28, 20:42
  import { DemoTableWithPagination } from './DemoTableWithPagination'; // 2024.01.23
  import { DemoTableWithFilters } from './DemoTableWithFilters'; // 2024.01.24, 15:58
  import { DemoEditorHeader } from './DemoEditorHeader'; // 2024.01.26, 14:01
  import { DemoDataEditorWrapper } from './DemoDataEditorWrapper'; // 2024.01.28, 20:42

  /* eslint-enable @typescript-eslint/no-unused-vars */

  import { appTitle } from '@/src/core/constants/app';

  // TODO: Add demo page selector
</script>

<svelte:head>
  <title>Demo — {appTitle}</title>
</svelte:head>

<div class="DemoPage">
  <div class="container scrollable">
    <div class="content">
      <!--
      <DemoEditableFields />
      <DemoTable />
      <DemoEditableTable />
      <DemoDates />
      <DemoTableWithPagination />
      <DemoTableWithFilters />
      <DemoEditProperties />
      <DemoEditableObjects />
      <DemoEditorHeader />
      <DemoDataEditorWrapper />
      -->
      <DemoEditDataSet />
    </div>
  </div>
</div>

<style src="./DemoPage.scss" lang="scss"></style>
