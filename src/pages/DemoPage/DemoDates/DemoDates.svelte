<script lang="ts">
  import { DateInput } from 'date-picker-svelte';
  import { Month } from '@svelteuidev/dates';
  import { Box, Button, Center, Popper } from '@svelteuidev/core';
  import dayjs from 'dayjs';

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
  console.log('XXX', {
    dayjsDate,
    fmtDate,
  });
</script>

<div class="DemoDates">
  <h2>DemoDates</h2>
  <div>
    <EditableField spec={{ id: 'testString', type: 'string' }} />
    <!--
    -->
    <DateInput bind:value />

    <Month bind:value month={value} onChange={(val) => (value = val)} />

    <Button bind:element={reference} on:click={toggleMount}>{value.toISOString()}</Button>
    <Popper
      {mounted}
      {reference}
      withArrow={true}
      position="bottom"
      placement="start"
      gutter={10}
      override={{ '& .arrow': { backgroundColor: '$gray100' } }}
    >
      <Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
        <Center>Popper content</Center>
      </Box>
    </Popper>

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
