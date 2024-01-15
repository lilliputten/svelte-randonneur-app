import { TDataSetDictSlot } from '@/src/core/types/rando';

export const propertiesDataSample: TDataSetDictSlot = {
  name: 'minimal-1',
  licenses: [
    {
      name: 'CC BY 4.0',
      path: 'https://creativecommons.org/licenses/by/4.0/',
      title: 'Creative Commons Attribution 4.0 International',
    },
  ],
  version: '1.0.0',
  description:
    'Small example file showing the randoneeur data format. Extracted from the ecoinvent 3.8 to 3.9 migration.',
  homepage: 'https://github.com/Depart-de-Sentier/happy_family',
  created: '2023-03-11T09:53:59.74Z',
  contributors: [
    {
      title: 'Thomas Sonderegger',
      path: 'https://www.linkedin.com/in/thomas-sonderegger-719852191/',
      role: 'author',
    },
    {
      title: 'Chris Mutel',
      path: 'https://chris.mutel.org/',
      role: 'wrangler',
    },
  ],
};
