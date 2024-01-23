<script lang="ts">
  import classNames from 'classnames';

  import { TGenericEditableSpec } from '@/src/core/types/editable';
  import { makeTitleFromPropertyId } from '@/src/core/helpers/data';

  import styles from './HeaderCellComponent.module.scss';

  export let className: string | undefined = undefined;
  export let id: string;
  export let spec: TGenericEditableSpec;

  $: title = spec.title || spec.label || makeTitleFromPropertyId(spec.id);
</script>

<div class={classNames(className, styles.HeaderCellComponent)} data-header-cell-id={id}>
  {title}
</div>
