import { TMainMenu } from '@/src/core/constants/app';

export function isActiveMainMenuItem(item: TMainMenu, pathname: string) {
  const { url, compare } = item;
  if (compare === 'exact') {
    return pathname === url;
  }
  return pathname.startsWith(url);
}
