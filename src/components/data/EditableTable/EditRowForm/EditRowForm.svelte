<script lang="ts">
  import classNames from 'classnames';

  import { TGenericEditableSpec, TEditableObjectData } from '@/src/core/types/editable';
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
