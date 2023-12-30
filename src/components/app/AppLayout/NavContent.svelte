<script lang="ts">
  import { Box, Anchor, Text, Stack } from '@svelteuidev/core';
  import { page } from '$app/stores';
  import classNames from 'classnames';

  import { mainMenu, TMainMenu } from '@/src/core/constants/app';

  import styles from './NavContent.module.scss';

  function isActive(item: TMainMenu) {
    // TODO: Implement as a common hook
    // See usage in:
    // - src/components/app/AppLayout/NavContent.svelte
    // - src/components/app/AppLayout/HeadContent.svelte
    const { pathname } = $page.url;
    const { url, compare } = item;
    if (compare === 'exact') {
      return pathname === url;
    }
    return pathname.startsWith(url);
  }

  export let isDark: boolean;
  // <Anchor href={item.url} class={`item ${isActive(item) ? 'active' : ''}`}>
</script>

<Stack class={classNames(styles.NavContent)} override={{ p: 20 }}>
  <Box css={{ bc: isDark ? '$blue400' : '$blue50', p: '$mdPX', br: '$lg', userSelect: 'none' }}>
    <Text align="center">Application menu</Text>
  </Box>
  <Stack class={classNames(styles.items)} spacing={2}>
    {#each mainMenu as item}
      <!--
        css={{ py: 12, px: 12, bc: isActive(item) ? '$blue50' : 'transparent', br: '$md' }}
      -->
      <Anchor href={item.url} class={classNames(styles.item, isActive(item) && styles.active)}>
        {item.text}
      </Anchor>
    {/each}
  </Stack>
</Stack>

<!--
<style src="./NavContent.scss" lang="scss"></style>
-->
