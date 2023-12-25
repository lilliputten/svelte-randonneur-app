<script lang="ts">
	import { get, writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import classNames from 'classnames';

	import { hasDataStore, setHasData, toggleHasData } from '@/src/store/hasData';
	import { setRandonneurData } from '@/src/store/randonneurData';
	import { demoDataFiles, defaultDataFileIdx, loadDemoDataByIdx, getDemoDataFileId } from './loadDemoData';

	let currentDemoDataFileIdx = defaultDataFileIdx;
	let loadingDemoData = false;
	// let loading = loadingDemoData;
	$: loading = loadingDemoData;


	function loadDemoData() {
		const dataId = getDemoDataFileId(currentDemoDataFileIdx);
		console.log('[LoadDataPage:loadDemoData] start', {
			dataId,
		});
		// TODO: Show notification
		loadingDemoData = true;
		loadDemoDataByIdx(currentDemoDataFileIdx)
			.then((data) => {
				console.log('[LoadDataPage:loadDemoData] sucess', {
					dataId,
					data
				});
				setRandonneurData(data);
				setHasData(true);
				// TODO: Show notification
			})
			.catch((error) => {
				console.error('[LoadDataPage:loadDemoData] error', {
					error,
					dataId,
				});
				debugger;
				// TODO: Show an error?
			})
			.finally(() => {
				loadingDemoData = false;
			});
	}

	function goToEditor() {
		if (get(hasDataStore)) {
			goto('/editor');
		}
	}
</script>

<div class={classNames("LoadDataPage", loading && 'loading')}>
	<h1>Load data to edit</h1>
	<section id="loadDemoData">
		<h2>Load demo data</h2>
		<div>
			<select id="demoDataFile" bind:value={currentDemoDataFileIdx}>
				{#each demoDataFiles as file, idx}
					<option value={idx} selected={idx === currentDemoDataFileIdx}>
						{file.id}
					</option>
				{/each}
			</select>
			<button id="loadDemoData" on:click={loadDemoData}>Load demo data</button>
		</div>
	</section>
	<section id="actions">
		<button id="goToEditor" on:click={goToEditor} disabled={!$hasDataStore}>Go to editor</button>
	</section>
</div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p><button on:click={toggleHasData}>Toggle data: {$hasDataStore}</button></p>
<p>idx: {currentDemoDataFileIdx}</p>

<style src="./LoadDataPage.scss"></style>
