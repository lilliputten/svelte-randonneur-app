import { ucFirst } from '@/src/core/helpers/basic';

export function makeTitleFromPropertyId(id: string) {
  const title = ucFirst(id.trim())
    .replace(/[_ \t-]+/g, ' ')
    .replace(/\buuid\b/gi, 'UUID');
  return title;
}
