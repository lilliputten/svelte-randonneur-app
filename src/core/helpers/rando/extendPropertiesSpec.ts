import { ensureArray, ucFirst } from '@/src/core/helpers/basic';
import {
  TEditableObjectSpec,
  // TEditableListSpec,
  // TGenericEditableData,
  TGenericEditableSpec,
} from '@/src/core/types/editable';

interface TExtendPropertiesSpecOpts {
  /** Don't add labels on this level */
  dontAddLabels?: boolean;
  /** Don't add titles on this level */
  dontAddTitles?: boolean;
  // makeHorizontalList?: boolean;
}

export function extendPropertiesSpec(
  spec: TGenericEditableSpec,
  level: number = 0,
  parentId: string = '',
  opts: TExtendPropertiesSpecOpts = {},
) {
  const { id, type } = spec;
  const thisId = [parentId, id].filter(Boolean).join('.');
  if (!spec.label && !opts.dontAddLabels) {
    spec.label = spec.title || ucFirst(id);
  }
  if (!spec.title && !opts.dontAddTitles) {
    spec.title = spec.label || ucFirst(id);
  }
  spec._fullId = thisId;
  // --@ts-expect-error: Using debug field
  spec._level = level;
  if (type === 'object' && spec.spec) {
    const subSpec = ensureArray(spec.spec);
    subSpec.forEach((itemSpec) => {
      extendPropertiesSpec(itemSpec, level + 1, thisId);
    });
  }
  if (type === 'list' && spec.spec) {
    const itemSpec = spec.spec as TEditableObjectSpec;
    spec.layout = 'table';
    spec.flatObjects = true;
    spec.editInPlace = false;
    spec.useActionsColumn = true;
    spec.activeRows = true;
    extendPropertiesSpec(itemSpec, level + 1, thisId, { dontAddLabels: true });
  }
}
