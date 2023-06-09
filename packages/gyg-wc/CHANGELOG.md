# gyg-wc

## [0.8.1](https://github.com/theisel/getyourguide/compare/gyg-wc@0.8.0...gyg-wc@0.8.1) (2023-06-23)

### Bug Fixes

- **gyg-wc:** astro.d.ts ([#55](https://github.com/theisel/getyourguide/issues/55)) ([386bf73](https://github.com/theisel/getyourguide/commit/386bf736c7bc0cbf9a6ad6850c482d58660f6aea))

## [0.8.0](https://github.com/theisel/getyourguide/compare/gyg-wc@0.7.1...gyg-wc@0.8.0) (2023-06-17)

### Features

- **gyg-wc:** global GYG_PARTNER_ID ([#44](https://github.com/theisel/getyourguide/issues/44)) ([ecb4566](https://github.com/theisel/getyourguide/commit/ecb456645d3b58e4b0631f5104e826c44408dc5e))

## [0.7.1](https://github.com/theisel/getyourguide/compare/gyg-wc@0.7.0...gyg-wc@0.7.1) (2023-06-17)

### Bug Fixes

- **gyg-wc:** set `partnerId` to widget ([#40](https://github.com/theisel/getyourguide/issues/40)) ([322c5a5](https://github.com/theisel/getyourguide/commit/322c5a577b497ca63754afa5f0c696a28de185eb))
- **gyg-wc:** use `globalThis` ([#41](https://github.com/theisel/getyourguide/issues/41)) ([b5372fc](https://github.com/theisel/getyourguide/commit/b5372fced1fe7ec9c3fb0cffadc4ce4389d41837))

## [0.7.0](https://github.com/theisel/getyourguide/compare/gyg-wc@0.6.0...gyg-wc@0.7.0) (2023-06-16)

### ⚠ BREAKING CHANGES

- **sanity-plugin:** rewrite ([#38](https://github.com/theisel/getyourguide/issues/38))
- **gyg-wc:** rewrite ([#35](https://github.com/theisel/getyourguide/issues/35))

### Code Refactoring

- **gyg-wc:** rewrite ([#35](https://github.com/theisel/getyourguide/issues/35)) ([13ae1e8](https://github.com/theisel/getyourguide/commit/13ae1e84ba6278736c46d185a11fb64c2160ff16))
- **sanity-plugin:** rewrite ([#38](https://github.com/theisel/getyourguide/issues/38)) ([1d25732](https://github.com/theisel/getyourguide/commit/1d25732de575db70426abe807b3494b077faf24c))

## [0.6.0](https://github.com/theisel/getyourguide/compare/gyg-wc@0.5.0...gyg-wc@0.6.0) (2023-06-14)

### Features

- **gyg-wc/availability:** add theme `system` ([#32](https://github.com/theisel/getyourguide/issues/32)) ([52670d8](https://github.com/theisel/getyourguide/commit/52670d8dd0f601e510864e60e3d4db3c258c99c2))

### Bug Fixes

- **gyg wc:** types ([#31](https://github.com/theisel/getyourguide/issues/31)) ([3cfe70b](https://github.com/theisel/getyourguide/commit/3cfe70be6f1e3a5074b3bd9d2695d8f2bde3fd49))

## [0.5.0](https://github.com/theisel/getyourguide/compare/gyg-wc@0.4.0...gyg-wc@0.5.0) (2023-06-14)

### ⚠ BREAKING CHANGES

- **gyg wc:** api ([#29](https://github.com/theisel/getyourguide/issues/29))

### Code Refactoring

- **gyg wc:** api ([#29](https://github.com/theisel/getyourguide/issues/29)) ([57f0e8d](https://github.com/theisel/getyourguide/commit/57f0e8dffdf8ee968db073dc37043755db2f4a01))

## [0.4.0](https://github.com/theisel/getyourguide/compare/gyg-wc@0.3.0...gyg-wc@0.4.0) (2023-06-13)

### ⚠ BREAKING CHANGES

- gyg-wc ([#14](https://github.com/theisel/getyourguide/issues/14))

### Bug Fixes

- **gyg-wc:** typings ([#18](https://github.com/theisel/getyourguide/issues/18)) ([0f8c189](https://github.com/theisel/getyourguide/commit/0f8c1894dfc6cb255c90a4999afa7dec7367bd83))

### Code Refactoring

- gyg-wc ([#14](https://github.com/theisel/getyourguide/issues/14)) ([c8cb32e](https://github.com/theisel/getyourguide/commit/c8cb32e516bd1953d9e9a91b1c685dcb1d4abbc6))

## 0.3.0

### Minor Changes

- 797fe74: **BREAKING CHANGE**

  Rewritten codebase

  - Added `<gyg-widget>`
  - Added `gyg-wc/types` TS typing
  - Dropped `<getyourguide-activity>`
  - Dropped `<getyourguide-city>`
  - Dropped `propsToAttrs` utility function
  - Updated `examples`

  `<gyg-widget>` replaces `<getyourguide-activity>` and `<getyourguide-city>`

  ```diff
  - <getyourguide-activity ...>
  + <gyg-widget widget="activities" ...>
  ```

  ```diff
  - <getyourguide-city ...>
  + <gyg-widget widget="city" ...>
  ```

## 0.2.1

### Patch Changes

- a9a5f80: Amended `README` and added `docs` directory

  - gyg-wc
  - sanity-getyourguide-plugin

## 0.2.0

### Minor Changes

- 89a2fe7: **BREAKING CHANGE**

  Removed setting `lang` to `en` when undefined

- 89a2fe7: Added `astro.d.ts` for `Astro` projects

### Patch Changes

- 89a2fe7: &#9656; **gyg-wc/utils**

  Fixes `propsToAttrs` utility function

  - Allows for `snake_case` property names
  - Consecutive uppercase letters are no longer separated by hyphens

- 89a2fe7: Fixes missing `export` declaration
- 89a2fe7: Fixes `react.d.ts` for `React` projects

## 0.1.2

### Patch Changes

- ece2282: Minifies output

## 0.1.1

### Patch Changes

- 94f1520: Fixes `package.json`
