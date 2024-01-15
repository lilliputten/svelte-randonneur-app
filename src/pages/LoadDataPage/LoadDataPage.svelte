<script lang="ts">
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { NativeSelect, Button } from '@svelteuidev/core';
  import classNames from 'classnames';

  import { addToast } from '@/src/components/ui/Toasts';
  import { getApproxSize, getErrorText } from '@/src/core/helpers/basic';

  import { TRandoData } from '@/src/core/types/rando';
  import { hasDataStore } from '@/src/store';
  import { loadDemoDataByIdx, getDemoDataFileId } from './loadDemoData';
  import { loadDataFile } from './loadLocalData';

  import styles from './LoadDataPage.module.scss';
  import { setRandData } from '@/src/store/actions/randoDataActions';
  import { defaultDataFileIdx, demoDataFiles } from '@/src/core/constants/demoData';

  let demoDataFileIdx = defaultDataFileIdx;
  let loadingDemoData = false;

  let localDataFile: File | undefined = undefined;
  let loadingLocalData = false;

  const demoDataFilesSelectData = demoDataFiles.map(({ id /* , filename */ }, idx) => {
    return { label: id, value: String(idx) };
  });

  /* // DEBUG
   * $: console.log('[LoadDataPage] demoDataFileIdx', demoDataFileIdx);
   * $: console.log('localDataFile', localDataFile);
   */

  $: loading = loadingDemoData || loadingLocalData;

  let localFileText = 'Upload file';

  function loadDemoData() {
    const dataId = getDemoDataFileId(demoDataFileIdx);
    /* console.log('[LoadDataPage:loadDemoData] start', {
     *   dataId,
     * });
     */
    loadingDemoData = true;
    // Show notification
    addToast({ message: 'Demo data loading started', type: 'info' });
    loadDemoDataByIdx<TRandoData>(demoDataFileIdx)
      .then((data) => {
        /* console.log('[LoadDataPage:loadDemoData] success', {
         *   dataId,
         *   data,
         * });
         */
        setRandData(data);
        // Show notification
        addToast({ message: 'Demo data loading successfully finished', type: 'success' });
      })
      .catch((error) => {
        // TODO: Append explaining message...
        const errorMsg = getErrorText(error);
        // eslint-disable-next-line no-console
        console.error('[LoadDataPage:loadDemoData] error', errorMsg, {
          error,
          dataId,
        });
        // eslint-disable-next-line no-debugger
        debugger;
        // TODO: Show an error?
        addToast({ message: errorMsg, type: 'error' });
      })
      .finally(() => {
        loadingDemoData = false;
      });
  }

  function handleLocalFile(ev: Event) {
    const target = ev.target as HTMLInputElement;
    //
    const files = target.files;
    const file = files && files[0];
    if (!file) {
      // Error...
      const error = new Error('No file selected!');
      // eslint-disable-next-line no-console
      console.warn('[LoadDataPage:handleLocalFile] error', {
        error,
      });
      return;
    }
    const {
      // prettier-ignore
      name: fileName,
      type: fileType,
      size: fileSize,
    } = file;
    // const fileInfo = { fileName, fileType, fileSize };
    if (!/\.json$/.test(fileName) || fileType !== 'application/json') {
      // Error...
      const error = new Error('Expected json data file!');
      // eslint-disable-next-line no-console
      console.warn('[LoadDataPage:handleLocalFile] error', {
        error,
      });
      return;
    }
    /* console.log('[LoadDataPage:handleLocalFile]', {
     *   fileInfo,
     *   files,
     *   file,
     *   ev,
     * });
     */
    localDataFile = file;
    const size = getApproxSize(fileSize, { normalize: true }).join('');
    localFileText = `${fileName} (${size})`;
  }

  function loadLocalData() {
    if (!localDataFile) {
      const error = new Error('No local file defined');
      // eslint-disable-next-line no-console
      console.warn('[LoadDataPage:loadLocalData] error', {
        error,
      });
      // eslint-disable-next-line no-debugger
      debugger;
      return;
    }
    /* console.log('[LoadDataPage:loadLocalData] start', {
     *   localDataFile,
     * });
     */
    // Show notification
    addToast({ message: 'Local data loading started', type: 'info' });
    loadingLocalData = true;
    loadDataFile<TRandoData>(localDataFile, {
      timeout: 5000,
      // onProgress: handleLoadingProgress,
    })
      .then((data) => {
        /* console.log('[LoadDataPage:loadLocalData] success', {
         *   localDataFile,
         *   data,
         * });
         */
        setRandData(data);
        // Show notification
        addToast({ message: 'Local data loading successfully finished', type: 'success' });
      })
      .catch((error) => {
        const errorMsg = getErrorText(error);
        // eslint-disable-next-line no-console
        console.error('[LoadDataPage:loadLocalData] error', errorMsg, {
          error,
          localDataFile,
        });
        // eslint-disable-next-line no-debugger
        debugger;
        // Show an error?
        addToast({ message: errorMsg, type: 'error' });
      })
      .finally(() => {
        loadingLocalData = false;
      });
  }

  /** Go to the data editor */
  function goToEditor() {
    if (get(hasDataStore)) {
      goto('/editor');
    }
  }
</script>

<svelte:head>
  <title>Load data</title>
</svelte:head>

<div class={classNames(styles.LoadDataPage, loading && 'loading')}>
  <div class={classNames(styles.LoadDataPage_Wrapper)}>
    <h1 class={classNames(styles.header)}>Load data to edit</h1>

    <section id="loadDemoData" class={classNames(styles.delimited)}>
      <h2>Load demo data</h2>
      <div class={classNames(styles.formGroup)}>
        <!--
        <select id="demoDataFile" bind:value={demoDataFileIdx}>
          {#each demoDataFiles as file, idx}
            <option value={idx} selected={idx === demoDataFileIdx}>
              {file.id}
            </option>
          {/each}
        </select>
        -->
        <NativeSelect
          data={demoDataFilesSelectData}
          id="demoDataFile"
          bind:value={demoDataFileIdx}
          placeholder="Pick one"
        />
        <Button id="loadDemoDataAction" on:click={loadDemoData}>Load demo data</Button>
      </div>
    </section>

    <section id="loadLocalData" class={classNames(styles.delimited)}>
      <h2>Load local data</h2>
      <div class={classNames(styles.formGroup)}>
        <Button
          class={classNames(styles.FileUploadField)}
          id="localDataFile"
          name="localDataFile"
          title={localFileText}
        >
          <span>
            {localFileText}
          </span>
          <input
            type="file"
            id="localDataFile"
            name="localDataFile"
            accept="application/json"
            on:change={handleLocalFile}
          />
        </Button>
        <Button id="loadLocalDataAction" on:click={loadLocalData} disabled={!localDataFile}>
          Load local data
        </Button>
      </div>
    </section>

    <!--
    <section id="debug">
      <div><button on:click={toggleHasData}>Toggle data: {$hasDataStore}</button></div>
      <div>idx: {demoDataFileIdx}</div>
    </section>
    -->

    <!--
      TODO: Show loaded data info?
    -->

    <section id="actions" class={classNames('delimited', 'vpadded')}>
      <div class={classNames(styles.formGroup)}>
        <Button id="goToEditor" on:click={goToEditor} disabled={!$hasDataStore}>
          Go to editor
        </Button>
      </div>
    </section>
  </div>
</div>

<!--
<style src="./LoadDataPage.scss" lang="scss"></style>
-->
