import { get } from 'svelte/store';

import { TRandoData, TRandoProperties } from '@/src/core/types/rando';

import { randoDataStore } from '../stores/randoDataStore';
import { randoPropertiesStore } from '../stores/randoPropertiesStore';

/** Extract randoneeur properties from common data store */
export function extractRandoProperties() {
  const randoData = get(randoDataStore);
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
  const randoProperties: TRandoProperties = {
    name, // 'ecoinvent-3.8-to-3.9-biosphere-example'
    version, // '1.0.0'
    description, // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
    homepage, // 'https://github.com/Depart-de-Sentier/happy_family'
    licenses, // (4) [{…}, {…}, {…}, {…}]
    contributors, // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    created, // '2023-03-11T09:53:59.74Z'
  };
  randoPropertiesStore.set(randoProperties);
}

export function clearRandoProperties() {
  randoPropertiesStore.set(undefined);
}

/** Save randoneeur properties to common data store */
export function saveRandoProperties() {
  const randoProperties = get(randoPropertiesStore);
  const name = randoProperties?.name; // 'ecoinvent-3.8-to-3.9-biosphere-example'
  const version = randoProperties?.version; // '1.0.0'
  const description = randoProperties?.description; // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
  const homepage = randoProperties?.homepage; // 'https://github.com/Depart-de-Sentier/happy_family'
  const licenses = randoProperties?.licenses; // (4) [{…}, {…}, {…}, {…}]
  const contributors = randoProperties?.contributors; // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  const created = randoProperties?.created; // '2023-03-11T09:53:59.74Z'
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
