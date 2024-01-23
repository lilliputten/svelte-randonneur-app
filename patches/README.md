# Project patches


## Patching modules:

Patched `svelte-headless-table` and `svelte-keyed` modules to allow nested table ids (like `object.field`).

Added 3rd optional `opts` argument to `keyed` function. `opts.flat` tells to not use keys parsing and allows to use nested ones.

### svelte-headless-table

- `node_modules/svelte-headless-table/plugins/addColumnFilters.js`

### svelte-keyed

- `node_modules/svelte-keyed/dist/index.es.js`


## To create patch for a package name 'NAME':

```
npx patch-package NAME
```

(Check for accidentally included swap files: eg, diffs for `.swp` files.)


## To apply all the patches:

Run npm script:

```
npm run patch-node-packages
```

or call it directly:

```
npx patch-package
```


## See for a details:

- [patch-package](https://www.npmjs.com/package/patch-package)
