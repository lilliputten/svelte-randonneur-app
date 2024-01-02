export const displayLayouts = [
  // prettier-ignore
  'horizontal',
  'vertical',
] as const;
export type TDisplayLayout = (typeof displayLayouts)[number];
export const defaultDisplayLayout: TDisplayLayout = displayLayouts[0];
