import fs from 'fs';
import gulp from 'gulp';
// import prettify from 'gulp-html-prettify';
/* // UNUSED: For relative paths processing...
 * import path from 'path';
 * import replace from 'gulp-replace';
 * import sourcemaps from 'gulp-sourcemaps';
 * import tap from 'gulp-tap';
 */

import {
  getBuildInfoText,
  /* // UNUSED: For relative paths processing...
   * getProjectRelativeFileName,
   * truthyValue,
   * getEnvVariable,
   */
} from './utils/gulp-helpers.js';

/* // UNUSED: For relative paths processing...
 * const cssPath = 'build/_next/static/css';
 * const useRelativePaths = truthyValue(getEnvVariable('USE_RELATIVE_PATHS'));
 * function processRelativeStyleUrls() {
 *   // build/_next/static/css/5c20234126dae04a.css
 *   return (
 *     gulp
 *       .src([cssPath + '[>.css'])
 *       .pipe(
 *         tap(function (file) {
 *           const name = getProjectRelativeFileName(file.path).replace(/\\/g, '/');
 *           // eslint-disable-next-line no-console
 *           console.log('Processing relative urls in', name);
 *         }),
 *       )
 *       .pipe(sourcemaps.init({ loadMaps: true }))
 *       // Replace pseudo-absolute font (and mother media?) paths to relative ones...
 *       .pipe(replace(/(url\()(?:\.\/|)_next\/static\/(media\/)/g, '$1../$2'))
 *       .pipe(replace(/[\n\r\s]*\/\*# sourceMappingURL=.*\*\/[\n\r\s]<]g, ''))
 *       .pipe(sourcemaps.write('./'))
 *       .pipe(gulp.dest(cssPath))
 *   );
 * }
 * function processRelativeHtmlUrls() {
 *   // Process current urls for deep ('build/XXX[>*[>.html') html files to '../...' (or '../../......'):
 *   // `<link rel="preload" href="./_next/static/...`
 *   // `<script src="./_next/static/...`
 *   return (
 *     gulp
 *       .src(['build[>[>*[>.html'])
 *       // Replace relative paths to current folder to parent ones ('./' -> '../') -- it will work only for 1st level files ('build/XXX[>.html')...
 *       .pipe(
 *         tap(function (file) {
 *           const name = getProjectRelativeFileName(file.path).replace(/\\/g, '/');
 *           const dirname = path.dirname(name);
 *           const parts = name.split('/');
 *           const depth = parts.length - 2;
 *           const enoughDepth = depth >= 1;
 *           const prefix = enoughDepth ? '../'.repeat(depth) : './';
 *           if (enoughDepth) {
 *             // eslint-disable-next-line no-console
 *             console.log('Processing relative urls in', name);
 *             return gulp
 *               .src(name)
 *               .pipe(
 *                 replace(
 *                   /(<link[^<>]* href="|<(?:img|script)[^<>]* src=")\.\/(_next\/)/g,
 *                   '$1' + prefix + '$2',
 *                 ),
 *               )
 *               .pipe(gulp.dest(dirname));
 *           }
 *         }),
 *       )
 *     // .pipe(gulp.dest('build'))
 *   );
 * }
 */

/* // UNUSED: Prettify html
 * function prettifyHtml() {
 *   return gulp
 *     .src('build[>*[>.html')
 *     .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
 *     .pipe(gulp.dest('build'));
 * }
 */

function writeBuildInfo(cb) {
  const buildInfoText = getBuildInfoText();
  // eslint-disable-next-line no-console
  console.log('Build info:\n' + buildInfoText);
  fs.writeFile('build/build.txt', buildInfoText, cb);
}

function copyPythonScripts() {
  return gulp
    .src([
      // prettier-ignore
      '*.py',
      'requirements-general.txt',
    ])
    .pipe(gulp.dest('build/'));
}

gulp.task('writeBuildInfo', writeBuildInfo);
/* // UNUSED: For relative paths processing...
 * gulp.task('processRelativeStyleUrls', processRelativeStyleUrls);
 * gulp.task('processRelativeHtmlUrls', processRelativeHtmlUrls);
 */

// gulp.task('prettifyHtml', prettifyHtml); // NOTE: This patch causes nextjs hydration error
gulp.task('copyPythonScripts', copyPythonScripts);

const patchBuildTasks = [
  /* // UNUSED: For relative paths processing...
   * useRelativePaths && 'processRelativeStyleUrls',
   * useRelativePaths && 'processRelativeHtmlUrls',
   */
  'writeBuildInfo',
  // 'prettifyHtml',
  // 'copyPythonScripts',
].filter(Boolean);

gulp.task('patchBuild', gulp.parallel.apply(gulp, patchBuildTasks));
