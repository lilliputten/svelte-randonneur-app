<!--
  TODO:
  - 2024.01.18, 14:19: Add loading spinner to load data buttons while the data is loading.
-->

<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { Text, NativeSelect, Button } from '@svelteuidev/core';
  import { Loader } from '@svelteuidev/core';
  import { Paper } from '@svelteuidev/core';
  import classNames from 'classnames';

  import { RandoLogo } from '@/src/components/app/RandoLogo';

  import { addToast } from '@/src/components/ui/Toasts';
  import { getApproxSize, getErrorText } from '@/src/core/helpers/basic';
  import { defaultDataFileIdx, demoDataFiles } from '@/src/core/constants/demoData';
  import { TRandoData } from '@/src/core/types/rando';
  import { hasDataStore } from '@/src/store';
  import { setRandData } from '@/src/store/actions/randoDataActions';
  import { appTitle } from '@/src/core/constants/app';

  import { loadDemoDataByIdx, getDemoDataFileId, getDemoDataName } from './loadDemoData';
  import { loadDataFile } from './loadLocalData';

  import styles from './LoadDataPage.module.scss';
  import { randoFileInfoStore } from '@/src/store/stores/randoFileInfoStore';

  let demoDataFileIdx = defaultDataFileIdx;
  let loadingDemoData = false;

  let localDataFile: File | undefined = undefined;
  let loadingLocalData = false;

  const demoDataFilesSelectData = demoDataFiles.map(({ id /* , filename */ }, idx) => {
    return { label: id, value: String(idx) };
  });

  $: loading = loadingDemoData || loadingLocalData;

  let localFileText = 'Select and upload local file';

  function loadDemoData() {
    const dataId = getDemoDataFileId(demoDataFileIdx);
    const fileName = getDemoDataName(demoDataFileIdx);
    /* console.log('[LoadDataPage:loadDemoData] start', {
     *   dataId,
     * });
     */
    loadingDemoData = true;
    // Show notification
    // addToast({ message: 'Demo data loading started', type: 'info' });
    loadDemoDataByIdx<TRandoData>(demoDataFileIdx)
      .then(({ data, size }) => {
        console.log('[LoadDataPage:loadDemoData] success', {
          dataId,
          data,
          size,
        });
        setRandData(data);
        randoFileInfoStore.set({
          name: fileName,
          type: 'demo',
          size,
        });
        // Show notification
        addToast({ message: 'Demo data loading successfully finished', type: 'success' });
        goToMainAppPage(); // Issue #22: Immediatelly go to main page
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
    loadLocalData();
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
    // addToast({ message: 'Local data loading started', type: 'info' });
    loadingLocalData = true;
    loadDataFile<TRandoData>(localDataFile, {
      timeout: 5000,
      // onProgress: handleLoadingProgress,
    })
      .then(({ data, size }) => {
        console.log('[LoadDataPage:loadLocalData] success', {
          localDataFile,
          data,
          size,
        });
        setRandData(data);
        if (localDataFile) {
          randoFileInfoStore.set({
            name: localDataFile.name,
            type: 'uploaded',
            size: localDataFile.size,
          });
        }
        // Show notification
        addToast({ message: 'Local data loading successfully finished', type: 'success' });
        goToMainAppPage(); // Issue #22: Immediatelly go to main page
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
        goToMainAppPage(); // Issue #22: Immediatelly go to main page
      })
      .finally(() => {
        loadingLocalData = false;
      });
  }

  const initedStore = writable(false);
  let goingOutStore = writable(false);
  // let goingOut = false;

  onMount(() => {
    initedStore.set(true);
  });

  /** Go to the data data */
  function goToMainAppPage() {
    if ($hasDataStore) {
      goingOutStore.set(true);
      goto('/data');
    }
  }
</script>

<svelte:head>
  <title>Load data</title>
</svelte:head>

<div
  class={classNames(
    styles.LoadDataPage,
    loading && styles.loading,
    goingOutStore && styles.goingOut && $initedStore && styles.inited,
  )}
>
  <div class={styles.Wrapper}>
    <div class={styles.SplashSection}>
      <div class={styles.SplashBackground}></div>
      <div class={styles.SplashContent}>
        <!-- Splash -->
        <RandoLogo size={50} />
        <Text class={styles.AppTitle} color="blue" size="xl">
          {appTitle}
        </Text>
      </div>
    </div>

    <div class={styles.LoadSection}>
      <!--
      <h1 class={styles.header}>Load data to edit</h1>
      -->

      <section id="loadDemoData" class={styles.delimited}>
        <div class={styles.SectionLabel}>Load demo data</div>
        <div class={styles.formGroup}>
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
            placeholder="Select demo dataset"
          />
          <Button id="loadDemoDataAction" on:click={loadDemoData}>Load demo data</Button>
        </div>
      </section>

      <section id="loadLocalData" class={styles.delimited}>
        <div class={styles.SectionLabel}>Load local data</div>
        <div class={styles.formGroup}>
          <Button
            class={styles.FileUploadField}
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
          <!--
          <Button id="loadLocalDataAction" on:click={loadLocalData} disabled={!localDataFile}>
            Load local data
          </Button>
          -->
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

      <!-- // Issue #22: Immediatelly go to main page
      <section id="actions" class={classNames('delimited', 'vpadded')}>
        <div class={styles.formGroup}>
          <Button id="goToMainAppPage" on:click={goToMainAppPage} disabled={!$hasDataStore}>
            Go to the data browser
          </Button>
        </div>
      </section>
      -->

      <Paper class={styles.WaiterPanel} radius={0} shadow={undefined}>
        <Loader />
      </Paper>
    </div>
  </div>
</div>
