<script lang="ts">
  import Toasts from '@/src/components/ui/Toasts';

	// import Header from './Header.svelte';
	import Header from '@/src/components/layout/Header';

	import './styles.css';
	import './styles-fixes.scss';

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>

	<Toasts />
</div>

<style src="./layout.scss"></style>
