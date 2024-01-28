<script lang="ts">
  import { page } from '$app/stores';
  import {
    // Aside,
    // Divider,
    // Title,
    // fns,
    Footer,
    AppShell,
    Header,
    Navbar,
    ShellSection,
    SvelteUIProvider,
    colorScheme,
    Anchor,
  } from '@svelteuidev/core';
  import classNames from 'classnames';

  import Toasts from '@/src/components/ui/Toasts';
  import HeadContent from './HeadContent.svelte';
  import NavContent from './NavContent.svelte';
  import {
    // appTitle,
    isDev,
  } from '@/src/core/constants/app';
  import { getApproxSize } from '@/src/core/helpers/basic/numbers';
  import { version, timestamp } from '@/src/core/constants/app';
  import { randoFileInfoStore } from '@/src/store/stores/randoFileInfoStore';

  import './global-styles.scss';
  import styles from './AppLayout.module.scss';

  const appInfo = /* `${appTitle} */ `Version: ${version} @${timestamp}`;

  $: isDark = $colorScheme === 'dark';

  $: pageUrl = $page.url.pathname;
  $: isRootPage = !pageUrl || pageUrl === '/';
  $: pageId =
    pageUrl
      .replace(/[^A-Za-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, '-') || 'root';
  $: pageClass = ['page', pageId].filter(Boolean).join('-');

  let opened = false;

  function toggleTheme() {
    colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
  }

  function toggleOpened() {
    opened = !opened;
  }

  function onMenuClick() {
    opened = false;
  }
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
  <AppShell
    class={classNames(
      styles.AppLayout,
      pageClass,
      isRootPage && styles.rootPage,
      isDark && styles.dark,
    )}
  >
    <ShellSection className={styles.AppLayout_MainContent} grow>
      <slot>This is the main content</slot>
    </ShellSection>

    <Navbar class={styles.AppLayout_Navbar} slot="navbar" hidden={!opened}>
      <NavContent {isDark} {onMenuClick} />
    </Navbar>

    <!-- // TODO: Probably will be used in the future...
    -->
    <Footer class={styles.AppLayout_Footer} height={30} slot="footer">
      <div class={styles.AppLayout_Footer_Left} id="DataInfo">
        {#if $randoFileInfoStore}
          Data file: <strong>{$randoFileInfoStore.name}</strong>
          {getApproxSize($randoFileInfoStore.size, { normalize: true }).join('')}
          ({$randoFileInfoStore.type})
          {#if pageId === 'root'}
            <Anchor href="/data">(browse)</Anchor>
          {/if}
        {:else if isDev}
          <Anchor href="/demo">Demo page</Anchor>
        {/if}
      </div>
      <div class={styles.AppLayout_Footer_Right} id="AppInfo">
        {appInfo}
      </div>
    </Footer>

    <Header class={styles.AppLayout_Header} slot="header" height={60}>
      <HeadContent {isDark} toggle={toggleTheme} toggleOpen={toggleOpened} {opened} />
    </Header>
  </AppShell>
  <Toasts />
</SvelteUIProvider>
