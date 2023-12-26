<script>
	import { page } from '$app/stores';
	import logo from '@/src/lib/images/svelte-logo.svg';
	import github from '@/src/lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev" target="_blank">
			<img src={logo} alt="Based on SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' && 'page'}>
				<a href="/">Start</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/editor') && 'page'}>
				<a href="/editor">Editor</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/lilliputten/svelte-randonneur-app" target="_blank">
			<img src={github} alt="GitHub repository" />
		</a>
	</div>
</header>

<style src="./Header.scss"></style>
