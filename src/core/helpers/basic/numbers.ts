interface TNormalizedFloatStrOptions {
  /** Fixed point position */
  fixedPoint?: number;
  stripFixedZeros?: boolean;
}
export function normalizedFloatStr(n: number, opts: TNormalizedFloatStrOptions = {}): string {
  const {
    // prettier-ignore
    fixedPoint = 2,
    stripFixedZeros = true,
  } = opts;
  let str = n.toFixed(fixedPoint);
  if (stripFixedZeros) {
    str = str.replace(/\.*0+$/, '');
  }
  return str;
}

interface TGetApproxSizeOptions {
  /** Normalize result to string representation using `normalizedFloatStr` */
  normalize?: boolean | TNormalizedFloatStrOptions;
}
export function getApproxSize(
  size: number,
  opts: TGetApproxSizeOptions = {},
): [number | string, string] {
  // TODO: Return approximated values, eg '~1K' instead of '1003B'
  const { normalize } = opts;
  const levels = [
    'B', // Bytes
    'K', // Kilobytes
    'M', // Megabytes
    'G', // Gigabites
  ];
  const lastLevel = levels.length - 1;
  const range = 1024;
  let level = 0;
  let approx = false;
  while (level < lastLevel) {
    const diff = range - size;
    const diffAbs = Math.abs(diff);
    if (diffAbs < 100) {
      // Only one of the next level value...
      approx = true;
      level++;
      size = 1;
      break;
    } else if (diff > 0 /* size < range */) {
      break;
    }
    size /= range;
    level++;
  }
  const currLevelStr = levels[level];
  // Result: final number or normalized representation (depends on option's `normalize`)
  let result: number | string = size;
  if (normalize) {
    const normalizeOpts = typeof normalize === 'object' ? normalize : undefined;
    result = normalizedFloatStr(size, normalizeOpts);
  }
  if (approx) {
    // TODO: Or just add 'approx sign' ('~') into the resulting list?
    result = '~' + result;
  }
  return [result, currLevelStr];
}
