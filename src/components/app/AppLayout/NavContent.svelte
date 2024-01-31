<script lang="ts">
  import { Box, Text, Stack } from '@svelteuidev/core';
  import { page } from '$app/stores';
  import classNames from 'classnames';

  import { getMainMenu } from '@/src/core/constants/app';
  import { hasDataStore } from '@/src/store';
  import { SectionsMenu } from '@/src/components/RandoEditor/SectionsMenu';

  import { isActiveMainMenuItem } from './helpers';

  import styles from './NavContent.module.scss';

  const mainMenu = getMainMenu();

  $: pageUrl = $page.url.pathname;

  export let handleMenuClose: () => void;
</script>

<Stack class={classNames(styles.NavContent)} override={{ p: 20 }}>
  <!--
  <Box css={{ bc: isDark ? '$blue400' : '$blue50', p: '$mdPX', br: '$md', userSelect: 'none' }}>
    <Text align="center">Application menu</Text>
  </Box>
  -->
  <Stack class={classNames(styles.items)} spacing={4}>
    {#each mainMenu as item}
      <!-- Use hook for process menu conditions? -->
      {#if item.conditions !== 'hasData' || $hasDataStore}
        <a
          href={item.url}
          class={classNames(styles.item, isActiveMainMenuItem(item, pageUrl) && styles.active)}
          on:click={handleMenuClose}
        >
          {item.text}
        </a>
      {/if}
    {/each}
    {#if pageUrl === '/data'}
      <SectionsMenu inSideMenu onChangeSection={handleMenuClose} />
    {/if}
  </Stack>
</Stack>
