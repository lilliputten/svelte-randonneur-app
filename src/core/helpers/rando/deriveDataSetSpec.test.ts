import { describe, it, expect } from 'vitest';

import { TGenericEditableSpec } from '@/src/core/types/editable';
import { TDataSetDictSlot } from '@/src/core/types/rando';

import { propertiesDataSample, propertiesDataSpec } from '@/src/core/constants/rando';

import { deriveDataSetSpec, TDeriveOpts } from './deriveDataSetSpec';

// TODO: Update `TDataSetDictSlot` typings to allow recursive references!

describe('deriveDataSetSpec', () => {
  describe('should derive scalar types', () => {
    it('string', () => {
      const data: TDataSetDictSlot = {
        testString: 'value',
      };
      const expectedResult: TGenericEditableSpec = {
        id: 'testObj',
        spec: [
          {
            id: 'testString',
            type: 'string',
          },
        ],
        type: 'object',
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('testObj', data);
      expect(result).toStrictEqual(expectedResult);
    });
    it('number', () => {
      const data: TDataSetDictSlot = {
        testNumber: 77,
      };
      const expectedResult: TGenericEditableSpec = {
        id: 'testObj',
        spec: [
          {
            id: 'testNumber',
            type: 'number',
          },
        ],
        type: 'object',
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('testObj', data);
      expect(result).toStrictEqual(expectedResult);
    });
  });
  describe('should derive complex types', () => {
    it('properties object', () => {
      const data: TDataSetDictSlot = propertiesDataSample;
      const expectedResult: TGenericEditableSpec = propertiesDataSpec;
      const result: TGenericEditableSpec = deriveDataSetSpec('properties', data);
      expect(result).toStrictEqual(expectedResult);
    });
    it('dataset with multi-level list', () => {
      const data: TDataSetDictSlot = {
        update: [
          {
            source: {
              name: '2-Methyl pentane',
              code: '1b4da243-3412-4425-b44e-dea22e7ebd43',
              categories: ['air', 'low population density, long-term'],
              unit: 'kilogram',
            },
            target: {
              name: '2-Methylpentane',
            },
          },
          {
            source: {
              name: 'o-Dichlorobenzene',
              code: '67070d27-426e-43e9-98e8-309952f78140',
              categories: ['water'],
              unit: 'kilogram',
            },
            target: {
              name: '1,2-Dichlorobenzene',
            },
          },
        ],
      } as unknown as TDataSetDictSlot;
      // TODO: Update `TDataSetDictSlot` typings to allow recursive references!
      const expectedResult: TGenericEditableSpec = {
        id: 'update',
        type: 'object',
        spec: [
          {
            id: 'update',
            type: 'list',
            spec: {
              id: 'update-item',
              type: 'object',
              spec: [
                {
                  id: 'source',
                  type: 'object',
                  spec: [
                    { id: 'name', type: 'string' },
                    { id: 'code', type: 'string' },
                    {
                      id: 'categories',
                      type: 'list',
                      spec: {
                        id: 'categories',
                        type: 'string',
                        /* // TODO: Issue #16: Analyze list data cardinality (including these for nested objects' properties)
                         * _allValuesCount: 2,
                         * _allValues: ['air', 'low population density, long-term'],
                         */
                      },
                    },
                    { id: 'unit', type: 'string' },
                  ],
                },
                { id: 'target', type: 'object', spec: [{ id: 'name', type: 'string' }] },
              ],
            },
          },
        ],
      };
      const opts: TDeriveOpts = {
        maxDictListSize: 2,
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('update', data, opts);
      expect(result).toStrictEqual(expectedResult);
    });
    it('dataset with a list on the first level', () => {
      const data: TDataSetDictSlot = {
        root: [
          {
            categories: ['item1'],
          },
          {
            categories: ['item2'],
          },
        ],
      } as unknown as TDataSetDictSlot;
      const expectedResult: TGenericEditableSpec = {
        id: 'sample',
        type: 'object',
        spec: [
          {
            id: 'root',
            type: 'list',
            spec: {
              id: 'root-item',
              type: 'object',
              spec: [
                { id: 'categories', type: 'list', spec: { id: 'categories', type: 'string' } },
              ],
            },
          },
        ],
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('sample', data);
      expect(result).toStrictEqual(expectedResult);
    });
    it('dataset with a list on the second level', () => {
      const data: TDataSetDictSlot = {
        root: [
          {
            object: {
              categories: ['item1'],
            },
          },
          {
            object: {
              categories: ['item2'],
            },
          },
        ],
      } as unknown as TDataSetDictSlot;
      const expectedResult: TGenericEditableSpec = {
        id: 'sample',
        type: 'object',
        spec: [
          {
            id: 'root',
            type: 'list',
            spec: {
              id: 'root-item',
              type: 'object',
              spec: [
                {
                  id: 'object',
                  type: 'object',
                  spec: [
                    { id: 'categories', type: 'list', spec: { id: 'categories', type: 'string' } },
                  ],
                },
              ],
            },
          },
        ],
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('sample', data);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
