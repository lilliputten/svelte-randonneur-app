export interface TMainMenu {
  text: string;
  url: string;
  compare?: 'exact';
}

export const mainMenu: TMainMenu[] = [
  {
    text: 'Start',
    url: '/',
    compare: 'exact',
  },
  {
    text: 'Editor',
    url: '/editor',
  },
];
