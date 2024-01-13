<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Modal, Group, Button } from '@svelteuidev/core';
  import { writable } from 'svelte/store';
  import {
    Render,
    Subscribe,
    createTable,
    createRender,
    DataLabel,
    HeaderLabel,
  } from 'svelte-headless-table';
  import classNames from 'classnames';

  import {
    TEditableListSpec,
    TEditableListData,
    TGenericEditableData,
    TGenericEditableSpec,
    TEditableObjectData,
    // TEditableObjectSpec,
    // TEditableFieldSpec,
  } from '@/src/core/types/editable';
  import {
    GenericEditable,
    TGenericEditableOnChangeCallback,
  } from '@/src/components/data/GenericEditable';

  // import styles from './EditableTable.module.scss';

  type TOnChangeCallback = TGenericEditableOnChangeCallback;

  // External parameters...
  export let className: string | undefined = undefined;
  // export let listSpec: TEditableListSpec | undefined = undefined;
  export let spec: TGenericEditableSpec;
  export let data: TEditableObjectData = {};
  export let onChange: TOnChangeCallback | undefined = undefined;
</script>

<div class={classNames(className, 'EditRowForm')} data-spec-id={spec.id}>
  <GenericEditable {spec} {data} {onChange} />
</div>
