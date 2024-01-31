<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { DateInput, DatePicker } from 'date-picker-svelte';
  import { ActionIcon, Box, Button, Center, Popper, TextInput } from '@svelteuidev/core';
  import { Calendar } from 'radix-icons-svelte';
  import classNames from 'classnames';

  import { isValidDate } from '@/src/core/helpers/basic/dates';

  import styles from './DateInput.module.scss';

  export let className: string | undefined = undefined;

  /** Expected text date representation in ISO format, eg: '2023-12-22T01:23:45.67Z' */
  export let value: string | undefined = undefined;

  $: textValue = value || new Date().toISOString();
  $: dateValue = new Date(textValue);

  $: console.log('XXX dateValue', dateValue);

  let inputReference: HTMLInputElement;
  let calendarOpened = false;

  const dispatch = createEventDispatcher();

  const toggleCalendarPopup = () => {
    // TODO: On open set handlers for esc key press and outside click
    calendarOpened = !calendarOpened;
  };

  function selectDate(ev: CustomEvent<Date>) {
    const date = ev.detail;
    dateValue = date;
    textValue = date.toISOString();
    console.log('[DateInput:selectDate]', {
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
    console.log('[DateInput:handleTextDate]', {
      dateValue,
      textValue,
      text,
      ev,
    });
    dispatch('change', ev);
  }
</script>

<div class={classNames(className, styles.DateInput)}>
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
</div>
