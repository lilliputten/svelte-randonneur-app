import {
  TEditableListSpec,
  TFilterItem,
  TFiltersData,
  TGenericEditableSpec,
} from '@/src/core/types/editable';
import { ensureArray } from '@/src/core/helpers/basic';

interface TExtendDataSetWithFiltersOptions {
  // TODO
}

// TODO: Move to constants...
const selectFiltersFor = ['unit', 'categories', 'role'];

function detectFilterTypeByLastId(id: string): TFilterItem {
  return selectFiltersFor.includes(id) ? 'select' : true;
}

function getObjSpecFilters(
  objSpecs: TGenericEditableSpec[],
  opts: TExtendDataSetWithFiltersOptions = {},
  parentId: string = '',
  level: number = 0,
) {
  console.log('[extendDataSetWithFilters:getObjSpecFilters] start', level, parentId, {
    objSpecs,
    opts,
    parentId,
    level,
  });
  let filters: TFiltersData = {};
  objSpecs.forEach((item) => {
    const { id, type } = item;
    const subId = [parentId, id].filter(Boolean).join('.');
    if (type === 'object') {
      // Sub-object...
      const subFilters = getObjSpecFilters(
        ensureArray(item.spec),
        opts,
        subId,
        // subSpec.id,
        level + 1,
      );
      if (subFilters) {
        filters = { ...filters, ...subFilters };
      }
    } else {
      // Scalar...
      filters[subId] = detectFilterTypeByLastId(id);
    }
  });
  console.log('[extendDataSetWithFilters:getObjSpecFilters] done', level, parentId, {
    filters,
  });
  return filters;
}

/** Changing `spec` data in-place */
export function extendDataSetWithFilters(
  spec: TGenericEditableSpec,
  opts: TExtendDataSetWithFiltersOptions = {},
  parentId: string = '',
  level: number = 0,
) {
  const { id, type } = spec;
  console.log('[extendDataSetWithFilters:extendDataSetWithFilters]', level, type, id, {
    opts,
    id,
    type,
    spec,
    level,
  });
  /* // Recursive?
   * if (type === 'list' && spec.layout === 'table') {
   *   extendDataSetWithFilters(spec, opts, level);
   * }
   */
  if (type === 'object') {
    const subSpec = spec.spec;
    if (!Array.isArray(subSpec)) {
      extendDataSetWithFilters(subSpec, opts, parentId, level + 1);
    } else {
      subSpec.forEach((subSubItem) => {
        extendDataSetWithFilters(subSubItem, opts, parentId, level + 1);
      });
    }
  } else if (type === 'list') {
    spec = spec as TEditableListSpec;
    // Don't nothing if filters has already defined...
    if (!spec.filters) {
      let filters: TFiltersData = {};
      const subSpec = spec.spec;
      if (subSpec.type === 'object') {
        let objSpecs = subSpec.spec;
        if (!Array.isArray(objSpecs)) {
          objSpecs = [objSpecs];
        }
        // Create filter records for all object's fields
        filters = getObjSpecFilters(
          objSpecs,
          opts,
          parentId,
          // subSpec.id,
          level + 1,
        );
      } else {
        // Scalar: add this id to filters data
        filters[id] = detectFilterTypeByLastId(id);
      }
      if (Object.keys(filters).length) {
        console.log(
          '[extendDataSetWithFilters:extendDataSetWithFilters] set filters',
          level,
          type,
          id,
          {
            filters,
          },
        );
        spec.filters = filters;
      }
    }
  }
}
