import { get, writable } from 'svelte/store';

import { safeParseJson } from '@/src/core/helpers/data';
import { defaultDataFileIdx, demoDataFiles, demoDataPath } from '@/src/core/constants/demoData';

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

export function loadDemoDataByIdx<T = unknown>(idx: number): Promise<T> {
  const dataUrl = getDemoDataFileUrl(idx);
  // const dataId = getDemoDataFileId(idx);
  /* console.log('[loadDemoData:loadDemoDataByIdx:start]', {
   *   dataUrl,
   * });
   */
  return fetch(dataUrl)
    .then((res) => {
      const { ok, status, statusText } = res;
      if (!ok) {
        // Something went wrong?
        const reason =
          [statusText, status && 'status: ' + status].filter(Boolean).join(', ') || 'Unknown error';
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
      /* console.log('[loadDemoData:loadDemoDataByIdx:start] success', {
       *   dataUrl,
       *   res,
       * });
       */
      // All is ok: return json data...
      // NOTE: `res.json()` could fail due to NaN in the data
      return res.text();
    })
    .then((jsonText) => {
      const data = jsonText && safeParseJson<T>(jsonText);
      if (!data) {
        throw 'Received empty data';
      }
      return data;
    });
}
