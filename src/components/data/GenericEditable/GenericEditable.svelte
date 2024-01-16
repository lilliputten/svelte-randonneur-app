<script context="module" lang="ts">
  export type TGenericEditableOnChangeCallback = (
    data: TGenericEditableData,
    spec: TGenericEditableSpec,
  ) => void;
</script>

<script lang="ts">
  import {
    TGenericEditableSpec,
    TGenericEditableData,
    TEditableObjectData,
    TEditableListData,
  } from '@/src/core/types/editable';

  import { EditableField } from '../EditableField';
  import { EditableList } from '../EditableList';
  import { EditableObject } from '../EditableObject';
  import { EditableTable } from '../EditableTable';
  import classNames from 'classnames';

  export let className: string | undefined = undefined;
  export let spec: TGenericEditableSpec;
  export let data: TGenericEditableData | undefined = undefined;
  export let onChange: TGenericEditableOnChangeCallback | undefined = undefined;

  const nextClassName = classNames(className, 'GenericEditable');

  const objectData = data as TEditableObjectData;
  const listData = data as TEditableListData;

  /* $: console.log('[GenericEditable]', spec?.id, spec?.type, {
   *   spec,
   *   data,
   * });
   */
</script>

{#if spec.type === 'object'}
  <EditableObject className={nextClassName} {spec} data={objectData} {onChange} />
{:else if spec.type === 'list'}
  {#if spec.layout === 'table'}
    <EditableTable className={nextClassName} {spec} data={listData} {onChange} />
  {:else}
    <EditableList className={nextClassName} {spec} data={listData} {onChange} />
  {/if}
{:else}
  <EditableField className={nextClassName} {spec} value={data} {onChange} />
{/if}
