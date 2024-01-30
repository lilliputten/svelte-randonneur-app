<script lang="ts">
  import { DateInput, DatePicker } from 'date-picker-svelte';
  import { Month } from '@svelteuidev/dates';
  import { Box, Button, Center, Popper } from '@svelteuidev/core';
  import dayjs from 'dayjs';

  // @see:
  // - https://www.svelteui.org/dates/month
  // - https://www.svelteui.org/dates/getting-started
  // - https://www.npmjs.com/package/date-picker-svelte

  import { EditableField } from '@/src/components/data';
  // import { TEditableFieldSpec } from '@/src/core/types/editable';

  let reference: HTMLAnchorElement | HTMLButtonElement;
  let mounted = false;

  const toggleMount = () => {
    mounted = !mounted;
  };

  const createdDateStrZ = '2023-12-22T01:23:45.67Z';

  let value = new Date(createdDateStrZ);
  const dateFormat = 'YYYY-MM-DD HH:mm:ss'; // TODO: To use iso format (above)
  const dayjsDate = dayjs(value);
  const fmtDate = dayjsDate.format(dateFormat);
  // eslint-disable-next-line no-console
  console.log('[DemoDates] Test', {
    dayjsDate,
    fmtDate,
  });

  function selectDate(ev: CustomEvent<Date>) {
    const date = ev.detail;
    console.log('selectDate', {
      date,
      ev,
    });
    value = date;
  }
</script>

<div class="DemoDates">
  <h2>DemoDates</h2>
  <div>
    <!--
    <EditableField spec={{ id: 'testString', type: 'string' }} />

    <h2>DateInput:</h2>
    <DateInput bind:value />
    -->

    <h2>DatePicker:</h2>
    <DatePicker {value} timePrecision="second" on:select={selectDate} />

    <!--
    <h2>Month:</h2>
    <Month bind:value month={value} onChange={(val) => (value = val)} />
    -->

    <h2>Button & Popper:</h2>
    <Button bind:element={reference} on:click={toggleMount}>{value.toISOString()}</Button>
    <Popper
      title="Select date"
      {mounted}
      {reference}
      position="bottom"
      placement="start"
      gutter={4}
    >
      <DatePicker {value} timePrecision="second" on:select={selectDate} />
    </Popper>

    <!--
      TODO: To create `DateInput` input type. Use in `EditableField`.
    -->

    <EditableField spec={{ id: 'testDate', type: 'date' }} value={value.toISOString()} />

    <!--
    // prettier-ignore
    <EditableField
      spec={{ id: 'testBoolean', type: 'boolean', title: 'Test boolean' }}
      value={false}
    />
    <EditableField spec={{ id: 'testString', type: 'string' }} />
    <EditableField spec={{ id: 'testNumber', type: 'number', title: 'Test number' }} value={1} />
    <EditableField
      spec={{
        id: 'testSelect',
        type: 'select',
        title: 'Test select',
        selectData: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, 'C', 'D'],
      }}
      value={'C'}
    />
    -->
  </div>
</div>

<style lang="scss">
  .DemoDates {
    padding: 20px;
  }
</style>
