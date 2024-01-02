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

  type TOnChangeCallback = (data: TGenericEditableData, spec: TGenericEditableSpec) => void;

  export let spec: TGenericEditableSpec;
  export let data: TGenericEditableData | undefined = undefined;
  export let onChange: TOnChangeCallback | undefined = undefined;

  const objectData = data as TEditableObjectData;
  const listData = data as TEditableListData;

  const { id } = spec;

  console.log('[GenericEditable:DEBUG]', {
    id,
    type: spec.type,
    data,
    spec,
  });
</script>

{#if spec.type === 'object'}
  <EditableObject {spec} data={objectData} {onChange} />
{:else if spec.type === 'list'}
  <EditableList {spec} data={listData} {onChange} />
{:else}
  <EditableField {spec} value={data} {onChange} />
{/if}
