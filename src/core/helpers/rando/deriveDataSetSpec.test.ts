import { TGenericEditableSpec } from '@/src/core/types/editable';
import { TDataSetDictSlot } from '@/src/core/types/rando';
import { deriveObjectPropertiesSpec, deriveDataSetSpec } from './deriveDataSetSpec';

import { describe, it, expect } from 'vitest';

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
  describe('should derive comples types', () => {
    it('properties-like object', () => {
      const data: TDataSetDictSlot = {
        name: 'ecoinvent-3.8-to-3.9-biosphere-example',
        licenses: [
          {
            name: 'CC BY 4.0',
            path: 'https://creativecommons.org/licenses/by/4.0/',
            title: 'Creative Commons Attribution 4.0 International',
          },
        ],
        created: '2023-03-11T09:53:59.74Z',
      };
      const expectedResult: TGenericEditableSpec = {
        id: 'testObj',
        type: 'object',
        spec: [
          { id: 'name', type: 'string' },
          {
            id: 'licenses-list',
            type: 'list',
            spec: {
              id: 'licenses',
              type: 'object',
              spec: [
                { id: 'name', type: 'string' },
                { id: 'path', type: 'string' },
                { id: 'title', type: 'string' },
              ],
            },
          },
          { id: 'created', type: 'string' }, // TODO: It should be a 'date' later (see Issue #8)
        ],
      };
      const result: TGenericEditableSpec = deriveDataSetSpec('testObj', data);
      expect(result).toStrictEqual(expectedResult);
    });
    it('update dataset with list', () => {
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
            id: 'update-list',
            type: 'list',
            spec: {
              id: 'update-object',
              type: 'object',
              spec: [
                {
                  id: 'source',
                  type: 'object',
                  spec: [
                    { id: 'name', type: 'string' },
                    { id: 'code', type: 'string' },
                    {
                      id: 'categories-list',
                      type: 'list',
                      spec: { id: 'categories', type: 'string' },
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
      const result: TGenericEditableSpec = deriveDataSetSpec('update', data);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
