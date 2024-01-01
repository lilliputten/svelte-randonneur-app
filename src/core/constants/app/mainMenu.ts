import { dev } from '$app/environment';

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
  dev && {
    text: 'Demo',
    url: '/demo',
  },
].filter(Boolean) as TMainMenu[];
