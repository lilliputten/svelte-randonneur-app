import { get } from 'svelte/store';

import { TRandoData, TRandoProperties } from '@/src/core/types/rando';

import { randoPropertiesStore, getRandoData, randoDataStore } from '../stores';

/** Extract randoneeur properties from common data store */
export function extractRandoProperties() {
  const randoData = getRandoData();
  if (!randoData) {
    randoPropertiesStore.set(undefined);
    return;
  }
  const {
    name, // 'ecoinvent-3.8-to-3.9-biosphere-example'
    version, // '1.0.0'
    description, // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
    homepage, // 'https://github.com/Depart-de-Sentier/happy_family'
    licenses, // (4) [{…}, {…}, {…}, {…}]
    contributors, // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    created, // '2023-03-11T09:53:59.74Z'
  } = randoData;
  const randoPropertiesActions: TRandoProperties = {
    name, // 'ecoinvent-3.8-to-3.9-biosphere-example'
    version, // '1.0.0'
    description, // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
    homepage, // 'https://github.com/Depart-de-Sentier/happy_family'
    licenses, // (4) [{…}, {…}, {…}, {…}]
    contributors, // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    created, // '2023-03-11T09:53:59.74Z'
  };
  randoPropertiesStore.set(randoPropertiesActions);
}

/** Save randoneeur properties to common data store */
export function saveRandoProperties() {
  const randoPropertiesActions = get(randoPropertiesStore);
  const name = randoPropertiesActions?.name; // 'ecoinvent-3.8-to-3.9-biosphere-example'
  const version = randoPropertiesActions?.version; // '1.0.0'
  const description = randoPropertiesActions?.description; // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
  const homepage = randoPropertiesActions?.homepage; // 'https://github.com/Depart-de-Sentier/happy_family'
  const licenses = randoPropertiesActions?.licenses; // (4) [{…}, {…}, {…}, {…}]
  const contributors = randoPropertiesActions?.contributors; // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  const created = randoPropertiesActions?.created; // '2023-03-11T09:53:59.74Z'
  randoDataStore.update((randoData) => {
    return {
      ...randoData,
      name,
      version,
      description,
      homepage,
      licenses,
      contributors,
      created,
    } as TRandoData;
  });
}
