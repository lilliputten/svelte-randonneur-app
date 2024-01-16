/** @desc Update build date/time tag file with current timestamp
 *  @changed 2024.01.17, 00:06
 */
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import * as config from './config.js';

// import { format, formatInTimeZone } from 'date-fns-tz';

import dayjsUtc from 'dayjs/plugin/utc.js';
import dayjsTimezone from 'dayjs-timezone-iana-plugin'; // @see https://day.js.org/docs/en/plugin/timezone
import dayjs from 'dayjs'; // @see https://day.js.org/docs/en/display/format

dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimezone);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const currPath = path.resolve(__dirname);
const prjPath = path.dirname(path.basename(currPath));

const defaultTimeZome = config.timeZone || '';

/* // UNUSED?: Date formats for 'date-fns-tz'...
 * const tagFormat = 'yyMMdd-HHmm';
 * const timeFormat = 'yyyy.MM.dd, HH:mm';
 * const timeTzFormat = 'yyyy.MM.dd, HH:mm zzz';
 */

// Date formats for 'dayjs'...
const tagFormat = 'YYMMDD-HHmm';
// const timeFormat = 'YYYY.MM.DD, HH:mm';
const timeTzFormat = 'YYYY.MM.DD, HH:mm ZZ';

// Timezone argument should be passed as '--tz={timeZone}`
const timeZone = getTzFromArgs() || defaultTimeZome; // 'Europe/Moscow', 'GMT, etc

const now = new Date();
const buildTag = formatDate(now, timeZone, tagFormat);
// const buildTime = formatDate(now, timeZone, timeFormat);
const buildTzTime = formatDate(now, timeZone, timeTzFormat);

/* console.log('DEBUG', {
 *   config,
 *   configFileName,
 *   argv: process.argv,
 *   args: process.args,
 *   now,
 *   buildTag,
 *   // buildTime,
 *   buildTzTime,
 *   timeZone,
 * });
 */

const timestampFileName = path.resolve(prjPath, 'build-timestamp.txt');
const timetagFileName = path.resolve(prjPath, 'build-timetag.txt');
// const versionFileName = path.resolve(prjPath, 'build-version.txt');

console.log('Updating build tag/time:', buildTag, '/', buildTzTime);

fs.writeFileSync(timetagFileName, buildTag, 'utf8');
fs.writeFileSync(timestampFileName, buildTzTime, 'utf8');

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

function getTzFromArgs() {
  const args = process.argv.slice(2);
  const lookup = '--tz=';
  for (const s of args) {
    if (s.startsWith(lookup)) {
      return s.substring(lookup.length);
    }
  }
}
