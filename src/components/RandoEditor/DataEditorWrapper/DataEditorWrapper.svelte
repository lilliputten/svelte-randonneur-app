<script lang="ts">
  import DemoTable from './DemoTable';
</script>

<div class="DataEditorWrapper">
  <div class="header">header</div>
  <div class="container scrollable">
    <div class="content">
      <DemoTable />
      <!--
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
      -->
    </div>
  </div>
</div>

<style src="./DataEditorWrapper.scss" lang="scss"></style>
