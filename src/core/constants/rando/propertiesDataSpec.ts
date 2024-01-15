import { TGenericEditableSpec } from '@/src/core/types/editable';

/** Type definition (generated via `deriveDataSetSpec` from real randonneur data) */
export const propertiesDataSpec: TGenericEditableSpec = {
  id: 'properties',
  type: 'object',
  spec: [
    { id: 'name', type: 'string' },
    {
      id: 'licenses-list',
      type: 'list',
      spec: {
        id: 'licenses-item',
        type: 'object',
        spec: [
          { id: 'name', type: 'string' },
          { id: 'path', type: 'string' },
          { id: 'title', type: 'string' },
        ],
      },
    },
    { id: 'version', type: 'string' },
    { id: 'description', type: 'string' },
    { id: 'homepage', type: 'string' },
    { id: 'created', type: 'string' }, // Should be a 'date' type
    {
      id: 'contributors-list',
      type: 'list',
      spec: {
        id: 'contributors-item',
        type: 'object',
        spec: [
          { id: 'title', type: 'string' },
          { id: 'path', type: 'string' },
          { id: 'role', type: 'string' },
        ],
      },
    },
  ],
};

// TODO: Create extended spec with user-friendly entries titles
