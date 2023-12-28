/**
 * @see [randonneur documentation](https://randonneur.readthedocs.io/en/latest/#data-format)
 */

/** Randonneur data properties
 * @see https://specs.frictionlessdata.io/data-package/#metadata
 */
export interface TRandoProperties {
  // Properties...
  name: string; // 'ecoinvent-3.8-to-3.9-biosphere-example'
  version: string; // '1.0.0'
  description: string; // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
  homepage: string; // 'https://github.com/Depart-de-Sentier/happy_family'
  licenses: unknown[]; // (4) [{…}, {…}, {…}, {…}]
  contributors: unknown[]; // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  created: string; // '2023-03-11T09:53:59.74Z'
}

/** Randonneur data sets */
export interface TRandoSets {
  /*
   * Data sets regexp: \<\(create-datasets\|create-exchanges\|replace\|update\|delete\|disaggregate\)\>
   */

  // Data sets...
  'create-datasets': unknown[]; // (1) [{…}]
  'create-exchanges': unknown[]; // (1) [{…}]
  delete: unknown[]; // (1) [{…}]
  mapping: unknown[]; // (4800) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
  replace: unknown[]; // (854) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
  update: unknown[]; // (2) [{…}, {…}]
}

/** Full randoneeur data */
export type TRandoData = TRandoProperties & TRandoSets;

/* // Sample data object
 * const testData: TRandoData = {
 *   // Properties...
 *   name: '', // 'ecoinvent-3.8-to-3.9-biosphere-example'
 *   version: '', // '1.0.0'
 *   description: '', // 'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.'
 *   homepage: '', // 'https://github.com/Depart-de-Sentier/happy_family'
 *   licenses: [], // (4) [{…}, {…}, {…}, {…}]
 *   contributors: [], // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
 *   created: '', // '2023-03-11T09:53:59.74Z'
 *   // Data sets...
 *   'create-datasets': [], // (1) [{…}]
 *   'create-exchanges': [], // (1) [{…}]
 *   delete: [], // (1) [{…}]
 *   mapping: [], // (4800) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
 *   replace: [], // (854) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
 *   update: [], // (2) [{…}, {…}]
 * };
 */
