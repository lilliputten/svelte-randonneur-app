/** @module gulp-helpers
 *  @since 2023.04.07, 00:00
 *  @changed 2024.01.17, 00:05
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

import * as config from './config.js';

// import { format, formatInTimeZone } from 'date-fns-tz';

import dayjsUtc from 'dayjs/plugin/utc.js';
import dayjsTimezone from 'dayjs-timezone-iana-plugin'; // @see https://day.js.org/docs/en/plugin/timezone
import dayjs from 'dayjs'; // @see https://day.js.org/docs/en/display/format

dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimezone);

const now = new Date();

const tagFormat = 'YYMMDD-HHmm';
const timeFormat = 'YYYY-MM-DD HH:mm ZZ';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const currPath = path.resolve(__dirname);
const prjPath = path.resolve(path.dirname(path.basename(currPath)));
// const prjPathHasFinalFlash = prjPath.endsWith('/') || prjPath.endsWith('\\');

const envData = readProjectEnv();

const timeZone = config.timeZone || '';

// // UNUSED: These parameters retrieving from `package.json` (prjConfig)
// const timestampFileName = path.resolve(prjPath, 'build-timestamp.txt');
// const timetagFileName = path.resolve(prjPath, 'build-timetag.txt');
// const versionFileName = path.resolve(prjPath, 'build-version.txt');

const configFile = path.resolve(prjPath, 'package.json');
const configJson = fs.readFileSync(configFile, { encoding: 'utf8', flag: 'r' });
const prjConfig = JSON.parse(configJson);

function getProjectName() {
  return prjConfig.name;
}

function getTimestamp() {
  return prjConfig.timestamp;
  // const buf = fs.readFileSync(timestampFileName);
  // return buf.toString().trim();
}

function getTimetag() {
  return prjConfig.timetag;
  // const buf = fs.readFileSync(timetagFileName);
  // return buf.toString().trim();
}

function getVersion() {
  return prjConfig.version;
  // const buf = fs.readFileSync(versionFileName);
  // return buf.toString().trim();
}

function getCurrentTimeStr() {
  return formatDate(now, timeZone, timeFormat);
}

function getCurrentTimeTag() {
  return formatDate(now, timeZone, tagFormat);
}

function getGitCommitHash() {
  const buf = execSync('git rev-parse --short HEAD');
  return buf.toString().trim();
}

function getGitBranch() {
  const buf = execSync('git rev-parse --abbrev-ref HEAD');
  return buf.toString().trim();
}

function getBuildInfoText() {
  const projectName = getProjectName();
  const timestamp = getTimestamp();
  const version = getVersion();
  const currentTimeStr = getCurrentTimeStr();
  const gitCommitHash = getGitCommitHash();
  const gitBranch = getGitBranch();
  return [
    'Project: ' + projectName,
    'Version: ' + version,
    'Branch: ' + gitBranch,
    'Commit: ' + gitCommitHash,
    'Fixed: ' + timestamp,
    'Built: ' + currentTimeStr,
  ].join('\n');
}

function allData() {
  const projectName = getProjectName();
  const timestamp = getTimestamp();
  const timetag = getTimetag();
  const version = getVersion();
  const currentTimeStr = getCurrentTimeStr();
  const currentTimeTag = getCurrentTimeTag();
  const gitCommitHash = getGitCommitHash();
  const gitBranch = getGitBranch();
  const buildInfoText = getBuildInfoText();
  const allData = {
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
  // console.log('allData', allData);
  return allData;
}

function formatDate(date, timeZone, fmt) {
  let dayjsDate = dayjs(date);
  if (timeZone) {
    dayjsDate = dayjsDate.tz(timeZone);
  }
  const fmtDate = dayjsDate.format(fmt);
  return fmtDate;
  /* // OLD_CODE: Using 'date-fns-tz'
  if (timeZone) {
    return formatInTimeZone(date, timeZone, fmt);
  } else {
    return format(date, fmt);
  }
  */
}

function getRelativeFileName(file, basePath) {
  if (file && file.startsWith(basePath)) {
    const basePathHasFinalFlash = basePath.endsWith('/') || basePath.endsWith('\\');
    const basePathLen = basePath.length;
    const basePathLenWithSlash = basePathLen + (basePathHasFinalFlash ? 0 : 1);
    file = file.substring(basePathLenWithSlash);
  }
  return file;
}

function getProjectRelativeFileName(file) {
  return getRelativeFileName(file, prjPath);
}

function truthyValue(val) {
  // Process value
  if (!isNaN(val)) {
    val = Number(val);
  } else if (val === 'false') {
    val = false;
  } else if (val === 'true') {
    val = true;
  }
  return val;
}

function readProjectEnv() {
  const filename = path.resolve(prjPath, '.env');
  if (!fs.existsSync(filename)) {
    return {};
  }
  // TODO: Parse `.env.local` too?
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split(/\r?\n/);
  const data = lines.reduce((data, s) => {
    const match = s.match(/^\s*(.*?)\s*=\s*(.*)\s*$/);
    if (match) {
      const key = match[1];
      const val = match[2];
      /* // Process value
       * if (!isNaN(val)) {
       *   val = Number(val);
       * } else if (val === 'false') {
       *   val = false;
       * } else if (val === 'true') {
       *   val = true;
       * }
       */
      data[key] = val;
    }
    return data;
  }, {});
  return data;
}

function getEnvVariable(key) {
  return process.env[key] != undefined ? process.env[key] : envData[key];
}

export {
  prjPath,
  getBuildInfoText,
  allData,
  getProjectRelativeFileName,
  truthyValue,
  getEnvVariable,
  // readProjectEnv,
};
