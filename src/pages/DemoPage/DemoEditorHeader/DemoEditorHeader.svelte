<script lang="ts">
  // @ts-expect-error: Can't find typings for this module
  import { saveAs } from 'browser-filesaver';

  import { EditorHeader } from '@/src/components/RandoEditor/EditorHeader';
  import { addToast } from '@/src/components/ui/Toasts';
  import { getErrorText } from '@/src/core/helpers/basic';

  // @see original function in `src/components/RandoEditor/DataEditorWrapper/DataEditorWrapper.svelte`
  function handleExportData() {
    const data = { test: 1 };
    // TODO: Save to local file
    const dataJson = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataJson], { type: 'application/json' });
    const filename = 'edited-data.json';
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
      addToast({ message: 'Cannot export data: ' + errorMsg, type: 'error' });
    } finally {
      addToast({ message: 'Data file has successfully exported', type: 'success' });
    }
  }
</script>

<div class="DemoEditorHeader">
  <h2>DemoEditorHeader</h2>
  <div>
    <EditorHeader sectionId="properties" {handleExportData} />
  </div>
</div>

<style lang="scss">
  .DemoEditorHeader {
    padding: 20px;
  }
</style>
