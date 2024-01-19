import { dev, browser } from '$app/environment';

export const isBrowser = browser;

export const isDev = dev;
export const isProd = !isDev;

interface TBuildInfo {
  projectName: string; // svelte-randonneur-app
  timestamp: string; // 2024.01.19, 15:26 +0700
  timetag: string; // 240119-1526
  version: string; // 0.0.2
  currentTimeStr: string; // 2024.01.19 15:49 +0700
  currentTimeTag: string; // 240119-1549
  gitCommitHash: string; // c920d90
  gitBranch: string; // 38-implement-dataset-table-pagination
  buildInfoText: string; // Project: svelte-randonneur-app\nVersion: 0.0.2\nBranch: 38-implement-dataset-table-pagination\nCommit: c920d90\nFixed: 2024.01.19, 15:26 +0700\nBuilt: 2024.01.19 15:49 +0700
}

const buildInfoJson = import.meta.env.VITE_BUILD_INFO;

const buildInfo: TBuildInfo = JSON.parse(buildInfoJson);

const {
  projectName,
  timestamp,
  timetag,
  version,
  currentTimeStr,
  currentTimeTag,
  gitCommitHash,
  gitBranch,
  buildInfoText,
} = buildInfo;

export {
  projectName,
  timestamp,
  timetag,
  version,
  currentTimeStr,
  currentTimeTag,
  gitCommitHash,
  gitBranch,
  buildInfoText,
};
