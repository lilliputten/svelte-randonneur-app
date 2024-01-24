export function ensureArray<T = unknown>(list: T | T[]): T[] {
  return Array.isArray(list) ? list : [list];
}
