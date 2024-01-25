<script lang="ts">
  import classNames from 'classnames';
  // @ts-expect-error: Can't find typings for this module
  import { saveAs } from 'browser-filesaver';

  import { TRandoSectionId } from '@/src/core/types/rando';
  import { saveRandoDataSets, saveRandoProperties, randoDataStore } from '@/src/store';
  import { getErrorText } from '@/src/core/helpers/basic';
  import { addToast } from '@/src/components/ui/Toasts';
  import { EditProperties } from '@/src/components/RandoEditor/EditProperties';
  import { EditDataSet } from '@/src/components/RandoEditor/EditDataSet';
  import { EditorHeader } from '@/src/components/RandoEditor/EditorHeader';

  import styles from './DataEditorWrapper.module.scss';

  export let sectionId: TRandoSectionId;

  function handleExportData() {
    // Save data parts to the general store
    saveRandoDataSets();
    saveRandoProperties();
    // Get data
    const data = $randoDataStore;
    // TODO: Save to local file
    const dataJson = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataJson], { type: 'application/json' });
    const filename = 'edited-data.json';
    console.log('[DataEditorWrapper:exportData]', {
      data,
      filename,
    });
    try {
      saveAs(dataBlob, filename);
    } catch (error) {
      const errorMsg = getErrorText(error);
      // eslint-disable-next-line no-console
      console.error('[DataEditorWrapper:handleExportData]', errorMsg, {
        error,
        data,
        dataJson,
        dataBlob,
        filename,
      });
      // eslint-disable-next-line no-debugger
      debugger;
      addToast({ message: 'Cannot export data: ' + errorMsg, type: 'error' });
    } finally {
      addToast({ message: 'File has successfully exported', type: 'success' });
    }
  }
</script>

<div class={styles.DataEditorWrapper}>
  <!-- // TODO: Reserved slot for common header -->
  <EditorHeader className={styles.header} {sectionId} {handleExportData} />
  <div class={classNames(styles.container, styles.scrollable)}>
    <div class={styles.content}>
      {#if sectionId === 'properties'}
        <EditProperties />
      {:else}
        <EditDataSet dataSetId={sectionId} />
      {/if}
      <!--
      <p>Placeholder for data set (check scrolling): <b>{sectionId}</b></p>
      <DemoTable />
      {#each Array(25) as _, idx}
        <p>{idx + 1}</p>
      {/each}
      -->
    </div>
  </div>
</div>
