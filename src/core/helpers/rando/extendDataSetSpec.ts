import { TEditableObjectSpec, TGenericEditableSpec } from '@/src/core/types/editable';
import { makeTitleFromPropertyId } from '@/src/core/helpers/data';

interface TExtendPropertiesSpecOpts {
  /** Don't add labels on this level */
  dontAddLabels?: boolean;
  /** Don't add titles on this level */
  dontAddTitles?: boolean;
  // makeHorizontalList?: boolean;
}

export function extendDataSetSpec(
  spec: TGenericEditableSpec,
  level: number = 0,
  parentId: string = '',
  opts: TExtendPropertiesSpecOpts = {},
) {
  const { id, type } = spec;
  const thisId = [parentId, id].filter(Boolean).join('.');
  if (!spec.label && !opts.dontAddLabels) {
    spec.label = spec.title || makeTitleFromPropertyId(id);
  } else if (!spec.title && !opts.dontAddTitles) {
    spec.title = spec.label || makeTitleFromPropertyId(id);
  }
  spec._fullId = thisId;
  // --@ts-expect-error: Using debug field
  spec._level = level;
  if (type === 'object' && spec.spec) {
    const subSpec = Array.isArray(spec.spec) ? spec.spec : [spec.spec];
    subSpec.forEach((itemSpec) => {
      extendDataSetSpec(itemSpec, level + 1, thisId);
    });
  }
  if (type === 'list' && spec.spec) {
    const itemSpec = spec.spec as TEditableObjectSpec;
    if (itemSpec.type === 'object') {
      spec.layout = 'table';
      spec.flatObjects = true;
      spec.editInPlace = false;
      spec.useActionsColumn = true;
      spec.activeRows = true;
      extendDataSetSpec(itemSpec, level + 1, thisId, { dontAddLabels: true });
    } else {
      // TODO: Determine whether the list can be displayed horizontally.
      spec.layout = 'horizontal';
    }
  }
}
