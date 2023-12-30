<script lang="ts">
  import {
    AppShell,
    Aside,
    Divider,
    Footer,
    Header,
    Navbar,
    ShellSection,
    SvelteUIProvider,
    Title,
    colorScheme,
    fns,
  } from '@svelteuidev/core';
  import classNames from 'classnames';

  import Toasts from '@/src/components/ui/Toasts';

  // import Header from '@/src/components/layout/Header';

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

  import styles from './AppLayout.module.scss';

  // import './styles.scss';
  // import './styles-fixes.scss';
</script>

<!--
<div class="AppLayout">
  <Header className="AppLayout-Header" />

  <main class={classNames(styles.AppLayout_Main)}>
    <slot />
  </main>

  <footer class={classNames(styles.AppLayout_Footer)}>
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>

  <Toasts />
</div>
-->

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={$colorScheme}>
  <AppShell class={classNames(styles.AppLayout)}>
    <ShellSection grow>
      <slot>This is the main content</slot>
    </ShellSection>

    <Footer class={classNames(styles.AppLayout_Footer)} height={30} slot="footer"
      >FooterContent</Footer
    >

    <Header class={classNames(styles.AppLayout_Header)} slot="header" fixed height={60}>
      <HeadContent {isDark} toggle={toggleTheme} toggleOpen={toggleOpened} {opened} />
    </Header>

    <Navbar class={classNames(styles.AppLayout_Navbar)} slot="navbar" hidden={!opened}>
      <NavContent {isDark} />
    </Navbar>

    <Toasts />
  </AppShell>
</SvelteUIProvider>

<!--
<style src="./AppLayout.scss"></style>
<style src="./AppLayout-UNUSED.scss"></style>
-->
