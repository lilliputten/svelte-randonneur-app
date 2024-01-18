import { describe, it, expect } from 'vitest';

import { makeTitleFromPropertyId } from './makeTitleFromPropertyId';

describe('makeTitleFromPropertyId', () => {
  it('should make human readable string from data id', () => {
    const id = 'some-data-id';
    const result = makeTitleFromPropertyId(id);
    expect(result).toBe('Some data id');
  });
  it('omit uuid translation', () => {
    const id = 'uuid';
    const result = makeTitleFromPropertyId(id);
    expect(result).toBe('UUID');
  });
});
