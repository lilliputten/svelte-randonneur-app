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

  import Toasts from '@/src/components/ui/Toasts';

  import AppLayout from '@/src/components/app/AppLayout';

  // import Header from '@/src/components/layout/Header';

  let opened = false;

  function toggleTheme() {
    colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
  }
  function toggleOpened() {
    opened = !opened;
  }

  // import './styles.scss';
  // import './styles-fixes.scss';
</script>

<AppLayout>
  <slot>Content</slot>
</AppLayout>
