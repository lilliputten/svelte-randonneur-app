<script lang="ts">
  import { BodyRow, DataColumn } from 'svelte-headless-table';

  // eslint-disable-next-line no-undef
  type Item = $$Generic; // TDataSetDict

  export let row: BodyRow<Item>; /*: BodyRow<Item>*/
  export let column: DataColumn<Item>; /*: DataColumn<Item>*/
  export let value: unknown; /*: unknown;*/
  export let onUpdateValue: (
    rowDataId: string,
    columnId: string,
    newValue: unknown,
  ) => void; /*: (rowDataId: string, columnId: string, newValue: unknown) => void*/

  let isEditing = false;

  let inputElement: HTMLInputElement; /*: HTMLInputElement | undefined*/
  $: if (isEditing) {
    inputElement?.focus();
  }

  const handleCancel = () => {
    isEditing = false;
  };
  const handleSubmit = () => {
    isEditing = false;
    if (row.isData()) {
      onUpdateValue(row.dataId, column.id, value);
    }
  };
</script>

<div>
  {#if !isEditing}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <span on:click={() => (isEditing = true)}>
      {value}
    </span>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <input bind:this={inputElement} type="text" bind:value />
      <button type="submit">✅</button>
      <button on:click={handleCancel}>❌</button>
    </form>
  {/if}
</div>

<style>
  form {
    display: flex;
    gap: 0.5rem;
  }

  button {
    padding: 0;
    border: none;
    background: transparent;
  }
</style>
