<script lang="ts">
  import { Box, Anchor, Text, Stack } from '@svelteuidev/core';
  import { page } from '$app/stores';
  import classNames from 'classnames';

  import { mainMenu } from '@/src/core/constants/app';

  import { isActiveMainMenuItem } from './helpers';

  import styles from './NavContent.module.scss';

  // TODO: Close navbar on menu click

  /* // TODO: To use anchor element reference to catch click to close nav pane?
   * Using:
   *   `let tableComponent: HTMLElement;`
   *   with `bind:this={tableComponent}`
   */

  export let isDark: boolean;
  export let onMenuClick: () => void;
</script>

<Stack class={classNames(styles.NavContent)} override={{ p: 20 }}>
  <Box css={{ bc: isDark ? '$blue400' : '$blue50', p: '$mdPX', br: '$md', userSelect: 'none' }}>
    <Text align="center">Application menu</Text>
  </Box>
  <Stack class={classNames(styles.items)} spacing={4}>
    {#each mainMenu as item}
      <!--
        css={{ py: 12, px: 12, bc: isActive(item) ? '$blue50' : 'transparent', br: '$md' }}
      -->
      <a
        href={item.url}
        class={classNames(
          styles.item,
          isActiveMainMenuItem(item, $page.url.pathname) && styles.active,
        )}
        on:click={onMenuClick}
      >
        {item.text}
      </a>
    {/each}
  </Stack>
</Stack>
