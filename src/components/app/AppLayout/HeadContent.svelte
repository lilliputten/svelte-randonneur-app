<script lang="ts">
  import { page } from '$app/stores';
  import { Group, ActionIcon, Text, Anchor, Burger, Tooltip, Box } from '@svelteuidev/core';
  import { Sun, Moon } from 'radix-icons-svelte';
  import { hotkey, useOs } from '@svelteuidev/composables';
  import classNames from 'classnames';

  import { appTitle, getMainMenu } from '@/src/core/constants/app';
  import { hasDataStore } from '@/src/store';

  import { RandoLogo } from '@/src/components/app/RandoLogo';

  import { isActiveMainMenuItem } from './helpers';

  import styles from './HeadContent.module.scss';

  $: pageUrl = $page.url.pathname;

  $: isRootPage = !pageUrl || pageUrl === '/';

  const mainMenu = getMainMenu();

  const os = useOs();
  const mod = os === 'macos' ? '⌘' : 'Ctrl';

  // const infoTitle = `${appTitle} (v.${version}, @${timestamp})`;

  export let isDark: boolean;
  export let menuOpened: boolean;
  export let toggleTheme: () => void;
  export let toggleMenu: () => void;
  export let closeMenu: () => void;
</script>

<Group
  class={classNames(
    styles.HeadContent,
    isRootPage && styles.rootPage,
    menuOpened && styles.menuOpened,
  )}
  override={{ height: '100%', px: 20 }}
  position="apart"
>
  <Burger
    opened={menuOpened}
    on:click={toggleMenu}
    override={{ d: 'block', '@sm': { d: 'none' } }}
  />
  <a class={styles.AppTitle} href="/" on:click={closeMenu}>
    <Group title={appTitle}>
      <RandoLogo size={35} />
      <Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
        {appTitle}
      </Text>
    </Group>
  </a>
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
            isActiveMainMenuItem(item, pageUrl) && styles.HeadContent_AppMenu_ItemActive,
          )}
        >
          {item.text}
        </Anchor>
      {/if}
    {/each}
  </Box>
  <ActionIcon
    variant="default"
    on:click={toggleTheme}
    size={30}
    use={[[hotkey, [['mod+J', toggleTheme]]]]}
    title={`Toggle dark theme (${mod}-J)`}
  >
    {#if isDark}
      <Moon />
    {:else}
      <Sun />
    {/if}
  </ActionIcon>
</Group>
