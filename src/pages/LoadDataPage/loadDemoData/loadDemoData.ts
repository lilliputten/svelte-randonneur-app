import { demoDataFiles, demoDataPath, defaultDataFileIdx } from './constants';

import { get, writable } from 'svelte/store';

export const currentDemoDataFileIdx = writable<number>(defaultDataFileIdx);

export function getCurrentDemoDataFileIdx() {
	return get(currentDemoDataFileIdx);
}
export function getDemoDataFileUrl(idx: number) {
	// const idx = getCurrentDemoDataFileIdx();
	const filename = demoDataFiles[idx].filename;
	return demoDataPath + filename;
}
export function getDemoDataFileId(idx: number) {
	// const idx = getCurrentDemoDataFileIdx();
	return demoDataFiles[idx].id;
}

export function loadDemoDataByIdx(idx: number) {
	const dataUrl = getDemoDataFileUrl(idx);
	// const dataId = getDemoDataFileId(idx);
	console.log('[loadDemoData:loadDemoDataByIdx:start]', {
		dataUrl,
	});
	return fetch(dataUrl).then((res) => {
		const { ok, status, statusText } = res;
		if (!ok) {
			// Something went wrong?
			const reason =
				[statusText, status && 'status: ' + status].filter(Boolean).join(', ') ||
				'Unknown error';
			const error = new Error('Data loading error: ' + reason);
			// eslint-disable-next-line no-console
			console.error('[loadDemoData:loadDemoDataByIdx]: error (on then)', {
				reason,
				res,
				dataUrl,
			});
			// eslint-disable-next-line no-debugger
			debugger;
			throw error;
		}
		console.log('[loadDemoData:loadDemoDataByIdx:start] success', {
			dataUrl,
			res,
		});
		// All is ok: return json data...
		return res.json();
	});
}
