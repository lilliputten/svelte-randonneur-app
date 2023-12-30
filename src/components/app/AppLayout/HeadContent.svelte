<script lang="ts">
  import { page } from '$app/stores';
  import { Group, ActionIcon, Text, Anchor, Burger, Tooltip, Box } from '@svelteuidev/core';
  import { Sun, Moon } from 'radix-icons-svelte';
  import { hotkey, useOs } from '@svelteuidev/composables';
  import classNames from 'classnames';

  import { appTitle, mainMenu, TMainMenu } from '@/src/core/constants/app';

  import Logo from './Logo.svelte';

  import styles from './HeadContent.module.scss';

  const os = useOs();
  const mod = os === 'macos' ? '⌘' : 'ctrl';

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
  export let opened: boolean;
  export let toggle: () => void;
  export let toggleOpen: () => void;
</script>

<Group
  class={classNames(styles.HeadContent)}
  override={{ height: '100%', px: 20 }}
  position="apart"
>
  <Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@sm': { d: 'none' } }} />
  <Anchor
    underline={false}
    href="/"
    override={{ '&:hover': { textDecoration: 'none !important' } }}
  >
    <Tooltip label={appTitle}>
      <Group>
        <Logo size={35} />
        <Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
          {appTitle}
        </Text>
      </Group>
    </Tooltip>
  </Anchor>
  <Box class={styles.HeadContent_AppMenu}>
    {#each mainMenu as item}
      <!--
        For `Button` elements (doesn't work: makes hard reload instead internal navigation, TODO?):
        _variant={isActive(item) ? 'filled' : 'subtle'}
      -->
      <Anchor
        href={item.url}
        class={classNames(
          styles.HeadContent_AppMenu_Item,
          isActive(item) && styles.HeadContent_AppMenu_ItemActive,
        )}
      >
        {item.text}
      </Anchor>
    {/each}
  </Box>
  <Tooltip label={`Toggle theme (${mod}-J)`}>
    <ActionIcon variant="default" on:click={toggle} size={30} use={[[hotkey, [['mod+J', toggle]]]]}>
      {#if isDark}
        <Moon />
      {:else}
        <Sun />
      {/if}
    </ActionIcon>
  </Tooltip>
</Group>
