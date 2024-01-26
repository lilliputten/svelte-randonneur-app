<script lang="ts">
  import {
    // Aside,
    // Divider,
    // Title,
    // fns,
    // Footer,
    AppShell,
    Header,
    Navbar,
    ShellSection,
    SvelteUIProvider,
    colorScheme,
  } from '@svelteuidev/core';

  import Toasts from '@/src/components/ui/Toasts';

  import HeadContent from './HeadContent.svelte';
  import NavContent from './NavContent.svelte';

  $: isDark = $colorScheme === 'dark';

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

  import styles from './AppLayout.module.scss';

  import './global-styles.scss';
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
  <AppShell class={styles.AppLayout}>
    <ShellSection className={styles.AppLayout_MainContent} grow>
      <slot>This is the main content</slot>
    </ShellSection>

    <Navbar class={styles.AppLayout_Navbar} slot="navbar" hidden={!opened}>
      <NavContent {isDark} {onMenuClick} />
    </Navbar>

    <!-- // TODO: Probably will be used in the future...
    <Footer class={styles.AppLayout_Footer} height={30} slot="footer">
      FooterContent
    </Footer>
    -->

    <Header class={styles.AppLayout_Header} slot="header" height={60}>
      <HeadContent {isDark} toggle={toggleTheme} toggleOpen={toggleOpened} {opened} />
    </Header>
  </AppShell>
  <Toasts />
</SvelteUIProvider>
