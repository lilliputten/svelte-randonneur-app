<script lang="ts">
  import { DatePicker } from 'date-picker-svelte';
  import { Month } from '@svelteuidev/dates';
  import { ActionIcon, Box, Button, Center, Popper, TextInput } from '@svelteuidev/core';
  import { Calendar } from 'radix-icons-svelte';
  import dayjs from 'dayjs';

  // @see:
  // - https://www.svelteui.org/dates/month
  // - https://www.svelteui.org/dates/getting-started
  // - https://www.npmjs.com/package/date-picker-svelte

  import { EditableField } from '@/src/components/data';
  import { isValidDate } from '@/src/core/helpers/basic/dates';
  import { DateInput } from '@/src/components/forms/DateInput';
  // import { TEditableFieldSpec } from '@/src/core/types/editable';

  // let buttonReference: HTMLAnchorElement | HTMLButtonElement;
  let inputReference: HTMLInputElement;
  let calendarOpened = false;

  const toggleCalendarPopup = () => {
    // TODO: On open set handlers for esc key press and outside click
    calendarOpened = !calendarOpened;
  };

  const createdDateStrZ = '2023-12-22T01:23:45.67Z';

  let textValue = createdDateStrZ;
  let dateValue = new Date(textValue);

  /*
   * const dateFormat = 'YYYY-MM-DD HH:mm:ss'; // TODO: To use iso format (above)
   * const dayjsDate = dayjs(dateValue);
   * const fmtDate = dayjsDate.format(dateFormat);
   * // eslint-disable-next-line no-console
   * console.log('[DemoDates] Test', {
   *   dayjsDate,
   *   fmtDate,
   * });
   */

  function selectDate(ev: CustomEvent<Date>) {
    const date = ev.detail;
    dateValue = date;
    textValue = date.toISOString();
    console.log('selectDate', {
      dateValue,
      textValue,
      date,
      ev,
    });
  }

  function handleTextDate(ev: CustomEvent<string>) {
    const input = ev.currentTarget as HTMLInputElement;
    const text = input?.value;
    // const text = ev.detail;
    textValue = text;
    const newDate = new Date(text);
    if (isValidDate(newDate)) {
      dateValue = newDate;
    }
    console.log('selectDate', {
      dateValue,
      textValue,
      text,
      ev,
    });
    debugger;
  }

  // function dateInputChange(ev: unknown) {
  //   console.log('[DemoDates:dateInputChange]', {
  //     ev,
  //   });
  // }
</script>

<div class="DemoDates">
  <h2>DemoDates</h2>
  <div>
    <!--
    <EditableField spec={{ id: 'testString', type: 'string' }} />

    <h2>DateInput:</h2>
    <DateInput bind:dateValue />
    -->

    <h2>DatePicker:</h2>
    <DatePicker value={dateValue} timePrecision="second" on:select={selectDate} />

    <!--
    <h2>Month:</h2>
    <Month bind:dateValue month={dateValue} onChange={(val) => (dateValue = val)} />
    -->

    <!-- // NOTE: Already implemented in `DateInput`...
    <h2>Button & Popper:</h2>
    <TextInput
      bind:element={inputReference}
      value={dateValue.toISOString()}
      on:change={handleTextDate}
    >
      <svelte:fragment slot="rightSection">
        <ActionIcon on:click={toggleCalendarPopup} title="Toggle date selector">
          <Calendar />
        </ActionIcon>
      </svelte:fragment>
    </TextInput>
    <Popper
      title="Select date"
      mounted={calendarOpened}
      reference={inputReference}
      position="bottom"
      placement="start"
      gutter={4}
    >
      <DatePicker value={dateValue} timePrecision="second" on:select={selectDate} />
    </Popper>

      TODO: To create `DateInput` input type. Use in `EditableField`.
    -->

    <DateInput value={textValue} on:change={handleTextDate} />

    <EditableField spec={{ id: 'testDate', type: 'date' }} value={textValue} />
  </div>
</div>

<style lang="scss">
  .DemoDates {
    padding: 20px;
  }
</style>
