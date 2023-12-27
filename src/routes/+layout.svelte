<script lang="ts">
  import Toasts from '@/src/components/ui/Toasts';

  import Header from '@/src/components/layout/Header';

  import './styles.css';
  import './styles-fixes.scss';
</script>

<div class="AppLayout">
  <Header className="AppLayout-Header" />

  <main class="AppLayout-Main">
    <slot />
  </main>

  <footer class="AppLayout-Footer">
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>

  <Toasts />
</div>

<style src="./AppLayout.scss"></style>
