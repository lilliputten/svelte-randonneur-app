<script lang="ts">
  import { DemoEditableFields } from './DemoEditableFields';
  import { DemoEditableTable } from './DemoEditableTable';
  import { DemoEditableObjects } from './DemoEditableObjects';
  import DataEditorWrapper from '@/src/components/RandoEditor/DataEditorWrapper';
  // import DemoTable from '@/src/components/RandoEditor/DataEditorWrapper/DemoTable';

  // import styles from './DemoPage.module.scss';
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<div class="DemoPage">
  <!--
  <DemoEditableFields />
  <DemoTable />
  <DemoEditableTable />
  -->
  <DemoEditableObjects />
</div>

<!--
<style src="./DemoPage.scss" lang="scss"></style>
-->
