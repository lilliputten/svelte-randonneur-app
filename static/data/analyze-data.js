import fs from 'fs';
import {
  resolve,
  dirname,
  // basename,
} from 'path';
import { fileURLToPath } from 'url';

const fileUrl = import.meta.url;
const __filename = fileURLToPath(fileUrl);
const __dirname = dirname(__filename);

const currPath = resolve(__dirname);
// const prjPath = resolve(dirname(basename(currPath)));

function getErrorText(err) {
  return err ? (err instanceof Error ? err.message : String(err)) : '';
}

function safeParseJson(jsonText) {
  if (!jsonText) {
    return undefined;
  }
  /* console.log('[loadDemoData:safeParseJson:start] text', {
   *   jsonText,
   * });
   */
  if (jsonText.includes('NaN')) {
    jsonText = jsonText.replace(/(:\s*)NaN($|,)/g, '$1null$2');
  }
  // TODO: Check json validity
  try {
    return JSON.parse(jsonText);
  } catch (error) {
    const errMsg = getErrorText(error);
    const reason = ['Failed to parse json data', errMsg].filter(Boolean).join(': ');
    const nextError = new Error(reason);
    // eslint-disable-next-line no-console
    console.error('[loadDemoData:safeParseJson]: error', reason, {
      reason,
      error,
      jsonText,
    });
    // eslint-disable-next-line no-debugger
    debugger;
    throw nextError;
  }
}

const filesData = {};

// Read all json files in curent folder...
fs.readdirSync(currPath).forEach((filename) => {
  if (filename.endsWith('.json')) {
    const filepath = resolve(currPath, filename);
    const jsonText = fs.readFileSync(filepath, 'utf8');
    const data = safeParseJson(jsonText);
    /* console.log('file', {
     *   data,
     *   jsonText,
     *   filepath,
     *   filename,
     * });
     */
    filesData[filename] = data;
  }
});

function combineObjects(a, b) {
  // TODO: Check cyclic references?
  const type = typeof a;
  if (!a) {
    return b;
  } else if (!b) {
    return a;
  } else if (type !== typeof b || type === 'boolean') {
    return a;
  } else if (type === 'string' || type === 'number') {
    return a; // + b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else if (type === 'object') {
    const keys = [];
    [...Object.keys(a), ...Object.keys(b)].forEach((k) => {
      if (!keys.includes(k)) {
        keys.push(k);
      }
    });
    const result = {};
    keys.forEach((k) => {
      result[k] = combineObjects(a[k], b[k]);
    });
    return result;
  }
  // ???
  return a;
}

function combineAllObjects(a, ...objs) {
  let result = a;
  objs.forEach((b) => {
    result = combineObjects(result, b);
  });
  return result;
}

/* // DEBUG: Test combineAllObjects...
 * const result = combineAllObjects(
 *   { x: { y: true } },
 *   { x: { z: true, a: [1, 2] }, y: { a: true } },
 *   { x: { a: [1, 2, 3] }, y: { test: 1 } },
 * );
 * console.log('Check combineAllObjects', {
 *   result,
 * });
 */

const allData = Object.values(filesData);
const combinedData = combineAllObjects.apply(null, allData);
const firstLevelKeys = Object.keys(combinedData);
const firstLevelData = firstLevelKeys.reduce((res, k) => {
  res[k] = combinedData[k];
  return res;
}, {});

// eslint-disable-next-line no-console
console.log('combinedData', {
  firstLevelKeys,
  firstLevelData,
  // allData,
  // combinedData,
});
// eslint-disable-next-line no-debugger
debugger;
