<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import classNames from 'classnames';

  import { TRandoSectionId } from '@/src/core/types/rando';
  import { sectionTitles } from '@/src/core/constants/rando';

  import styles from './Section.module.scss';

  export let className: string = '';
  export let isActive: boolean = false;
  export let sectionId: TRandoSectionId;
  export let onSectionClick: (sectionId: TRandoSectionId) => void;

  const title = sectionTitles[sectionId];
</script>

<Button
  class={classNames(className, styles.Section)}
  id={sectionId}
  {title}
  variant={isActive ? 'filled' : 'light'}
  on:click={onSectionClick.bind(null, sectionId)}
  fullSize
>
  {title}
</Button>
