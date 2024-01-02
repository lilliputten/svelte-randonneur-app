export const displayLayouts = [
  // prettier-ignore
  'vertical',
  'horizontal',
] as const;
export type TDisplayLayout = (typeof displayLayouts)[number];
export const defaultDisplayLayout: TDisplayLayout = displayLayouts[0];
