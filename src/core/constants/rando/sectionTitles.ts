import { TRandoSectionId } from '@/src/core/types/rando';

export const sectionTitles: Record<TRandoSectionId, string> = {
  properties: 'Properties',
  // Plus basic data sets, based on `randoDataSetKeys`
  'create-datasets': 'Create datasets',
  delete: 'Delete',
  disaggregate: 'Disaggregate',
  mapping: 'Mapping',
  replace: 'Replace',
  update: 'Update',
};
