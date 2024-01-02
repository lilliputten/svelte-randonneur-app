<script lang="ts">
  import { page } from '$app/stores';
  import { Group, ActionIcon, Text, Anchor, Burger, Tooltip, Box } from '@svelteuidev/core';
  import { Sun, Moon } from 'radix-icons-svelte';
  import { hotkey, useOs } from '@svelteuidev/composables';
  import classNames from 'classnames';

  import { appTitle, getMainMenu, TMainMenu } from '@/src/core/constants/app';
  import { hasDataStore } from '@/src/store';

  import { isActiveMainMenuItem } from './helpers';

  import Logo from './Logo.svelte';

  import styles from './HeadContent.module.scss';

  const mainMenu = getMainMenu();

  const os = useOs();
  const mod = os === 'macos' ? '⌘' : 'Ctrl';

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
      <!-- Use hook for process menu conditions? -->
      {#if item.conditions !== 'hasData' || $hasDataStore}
        <!--
        For `Button` elements (doesn't work: makes hard reload instead internal navigation, TODO?):
        _variant={isActive(item) ? 'filled' : 'subtle'}
      -->
        <Anchor
          href={item.url}
          class={classNames(
            styles.HeadContent_AppMenu_Item,
            isActiveMainMenuItem(item, $page.url.pathname) && styles.HeadContent_AppMenu_ItemActive,
          )}
        >
          {item.text}
        </Anchor>
      {/if}
    {/each}
  </Box>
  <Tooltip label={`Toggle dark theme (${mod}-J)`}>
    <ActionIcon variant="default" on:click={toggle} size={30} use={[[hotkey, [['mod+J', toggle]]]]}>
      {#if isDark}
        <Moon />
      {:else}
        <Sun />
      {/if}
    </ActionIcon>
  </Tooltip>
</Group>
