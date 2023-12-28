/** Basic randonneur data properties
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

// Specific set types...

/* Expected datasets:
 *
 * @see https://github.com/brightway-lca/randonneur#migrating-exchanges
 * @see https://randonneur.readthedocs.io/en/latest/#data-format
 *
 * // (key, varaiable, type)
 *
 * create-datasets	createDatasetsSetItem	TCreateDatasetsSetItem
 * delete	deleteSetItem	TDeleteSetItem
 * disaggregate	disaggregateSetItem	TDisaggregateSetItem
 * mapping	mappingSetItem	TMappingSetItem
 * replace	replaceSetItem	TReplaceSetItem
 * update	updateSetItem	TUpdateSetItem
 *
 * Unused sets:
 *
 * create-exchanges	createExchangesSetItem	TCreateExchangesSetItem
 *
 * // Parse regexp: ^ \* \(\S\+\)\t\(\w\+\)\t\(\w\+\)
 */

type TDataSetItemValue = string | number | boolean;
type TDataSetItemSlot = TDataSetItemValue | TDataSetItemValue[] | undefined;
type TDataSetDict = Record<string, TDataSetItemSlot>;

// Exchange data set types...
type TCreateDatasetsSetItem = TDataSetDict;
type TCreateExchangesSetItem = TDataSetDict; // UNUSED
type TDeleteSetItem = TDataSetDict;
interface TMappingSetItem {
  conversion_factor: number; // 1;
  comment: string; // 'Identical names'
  source: TDataSetDict;
  target: TDataSetDict;
}
interface TReplaceSetItem {
  source: TDataSetDict;
  target: TDataSetDict;
  dataset?: TDataSetDict;
}
interface TDisaggregateSetItem {
  source: TDataSetDict;
  target: TDataSetDict[];
  dataset?: TDataSetDict;
}
interface TUpdateSetItem {
  source: TDataSetDict;
  target: TDataSetDict;
  dataset?: TDataSetDict;
}

/** Randonneur data sets */
export interface TRandoDataSets {
  /*
   * Data sets regexp: \<\(create-datasets\|create-exchanges\|replace\|update\|delete\|disaggregate\|mapping\)\>
   */
  'create-datasets'?: TCreateDatasetsSetItem[];
  'create-exchanges'?: TCreateExchangesSetItem[];
  delete?: TDeleteSetItem[];
  disaggregate?: TDisaggregateSetItem[];
  mapping?: TMappingSetItem[];
  replace?: TReplaceSetItem[];
  update?: TUpdateSetItem[];
}

/** Full randoneeur data */
export type TRandoData = TRandoProperties & TRandoDataSets;

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
 *   disaggregate: [],
 *   delete: [], // (1) [{…}]
 *   mapping: [], // (4800) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
 *   replace: [], // (854) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
 *   update: [], // (2) [{…}, {…}]
 * };
 */
