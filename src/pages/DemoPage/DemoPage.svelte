<script lang="ts">
  import { DemoEditableFields } from './DemoEditableFields';
  import { DemoEditableTable } from './DemoEditableTable';
  import { DemoEditableObjects } from './DemoEditableObjects';
  import { DemoDates } from './DemoDates';
  import DataEditorWrapper from '@/src/components/RandoEditor/DataEditorWrapper';
  import { DemoEditProperties } from './DemoEditProperties';
  // import DemoTable from '@/src/components/RandoEditor/DataEditorWrapper/DemoTable';

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
      -->
      <DemoEditProperties />
    </div>
  </div>
</div>

<style src="./DemoPage.scss" lang="scss"></style>
